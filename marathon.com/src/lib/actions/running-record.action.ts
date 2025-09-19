'use server'

import { revalidatePath } from 'next/cache'
import { connectToDatabase } from '../db'
import RunningRecord from '../db/models/running-record.model'

// 달리기 기록 생성
export async function createRunningRecord(
  userId: string,
  data: {
    title: string
    date: string
    targetDistance: number
    actualDistance?: number
    targetTime?: string
    actualTime: string
    notes?: string
    weather?: string
    location?: string
    difficulty: number
    feeling: number
  }
) {
  try {
    await connectToDatabase()

    // 데이터 검증
    if (!data.title.trim()) {
      return { success: false, error: '제목을 입력해주세요.' }
    }

    if (data.targetDistance <= 0) {
      return { success: false, error: '목표 거리는 0보다 커야 합니다.' }
    }

    if (!data.actualTime.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      return { success: false, error: '시간 형식이 올바르지 않습니다. (HH:MM:SS)' }
    }

    const record = await RunningRecord.create({
      userId,
      ...data,
      date: new Date(data.date),
    })

    revalidatePath('/records')
    revalidatePath('/records/list')

    return {
      success: true,
      message: '달리기 기록이 저장되었습니다.',
      recordId: record._id.toString(),
    }
  } catch (error) {
    console.error('달리기 기록 생성 오류:', error)
    return {
      success: false,
      error: '기록 저장 중 오류가 발생했습니다.',
    }
  }
}

// 사용자의 달리기 기록 목록 조회
export async function getUserRunningRecords(userId: string, page = 1, limit = 10) {
  try {
    await connectToDatabase()

    const skip = (page - 1) * limit

    const records = await RunningRecord.find({ userId })
      .sort({ date: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()

    const totalCount = await RunningRecord.countDocuments({ userId })
    const totalPages = Math.ceil(totalCount / limit)

    return {
      success: true,
      records: JSON.parse(JSON.stringify(records)),
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    }
  } catch (error) {
    console.error('달리기 기록 조회 오류:', error)
    return {
      success: false,
      records: [],
      error: '기록을 불러오는데 실패했습니다.',
    }
  }
}

// 달리기 기록 상세 조회
export async function getRunningRecordById(recordId: string, userId: string) {
  try {
    await connectToDatabase()

    const record = await RunningRecord.findOne({
      _id: recordId,
      userId,
    }).lean()

    if (!record) {
      return {
        success: false,
        error: '기록을 찾을 수 없습니다.',
      }
    }

    return {
      success: true,
      record: JSON.parse(JSON.stringify(record)),
    }
  } catch (error) {
    console.error('달리기 기록 상세 조회 오류:', error)
    return {
      success: false,
      error: '기록을 불러오는데 실패했습니다.',
    }
  }
}

// 달리기 기록 수정
export async function updateRunningRecord(
  recordId: string,
  userId: string,
  data: {
    title: string
    date: string
    targetDistance: number
    actualDistance?: number
    targetTime?: string
    actualTime: string
    notes?: string
    weather?: string
    location?: string
    difficulty: number
    feeling: number
  }
) {
  try {
    await connectToDatabase()

    const record = await RunningRecord.findOneAndUpdate(
      { _id: recordId, userId },
      {
        ...data,
        date: new Date(data.date),
      },
      { new: true }
    )

    if (!record) {
      return {
        success: false,
        error: '기록을 찾을 수 없거나 수정 권한이 없습니다.',
      }
    }

    revalidatePath('/records')
    revalidatePath('/records/list')
    revalidatePath(`/records/${recordId}`)

    return {
      success: true,
      message: '기록이 수정되었습니다.',
    }
  } catch (error) {
    console.error('달리기 기록 수정 오류:', error)
    return {
      success: false,
      error: '기록 수정 중 오류가 발생했습니다.',
    }
  }
}

// 달리기 기록 삭제
export async function deleteRunningRecord(recordId: string, userId: string) {
  try {
    await connectToDatabase()

    const record = await RunningRecord.findOneAndDelete({
      _id: recordId,
      userId,
    })

    if (!record) {
      return {
        success: false,
        error: '기록을 찾을 수 없거나 삭제 권한이 없습니다.',
      }
    }

    revalidatePath('/records')
    revalidatePath('/records/list')

    return {
      success: true,
      message: '기록이 삭제되었습니다.',
    }
  } catch (error) {
    console.error('달리기 기록 삭제 오류:', error)
    return {
      success: false,
      error: '기록 삭제 중 오류가 발생했습니다.',
    }
  }
}

// 달리기 통계 조회
export async function getRunningStats(userId: string) {
  try {
    await connectToDatabase()

    const stats = await RunningRecord.aggregate([
      { $match: { userId: userId } },
      {
        $group: {
          _id: null,
          totalRecords: { $sum: 1 },
          totalDistance: { $sum: '$targetDistance' },
          avgDistance: { $avg: '$targetDistance' },
          avgDifficulty: { $avg: '$difficulty' },
          avgFeeling: { $avg: '$feeling' },
        },
      },
    ])

    // 최근 기록
    const recentRecords = await RunningRecord.find({ userId }).sort({ date: -1 }).limit(5).lean()

    // 월별 통계
    const monthlyStats = await RunningRecord.aggregate([
      { $match: { userId: userId } },
      {
        $group: {
          _id: {
            year: { $year: '$date' },
            month: { $month: '$date' },
          },
          count: { $sum: 1 },
          totalDistance: { $sum: '$targetDistance' },
        },
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: 12 },
    ])

    return {
      success: true,
      stats: stats[0] || {
        totalRecords: 0,
        totalDistance: 0,
        avgDistance: 0,
        avgDifficulty: 0,
        avgFeeling: 0,
      },
      recentRecords: JSON.parse(JSON.stringify(recentRecords)),
      monthlyStats: JSON.parse(JSON.stringify(monthlyStats)),
    }
  } catch (error) {
    console.error('달리기 통계 조회 오류:', error)
    return {
      success: false,
      error: '통계를 불러오는데 실패했습니다.',
    }
  }
}
