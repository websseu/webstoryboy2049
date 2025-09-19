'use server'

import { connectToDatabase } from '../db'
import User from '../db/models/user.model'

// 사용자명으로 프로필 조회
export async function getUserProfile(username: string) {
  try {
    await connectToDatabase()

    const user = await User.findOne({
      username: username,
      isActive: true,
    })
      .select('-password -verificationCode -verificationCodeExpires')
      .lean()

    if (!user) {
      return { success: false, message: '사용자를 찾을 수 없습니다.' }
    }

    return {
      success: true,
      user: JSON.parse(JSON.stringify(user)),
    }
  } catch (error) {
    console.error('프로필 조회 오류:', error)
    return {
      success: false,
      message: '프로필 조회 중 오류가 발생했습니다.',
    }
  }
}

// 사용자명 중복 확인
export async function checkUsernameAvailability(username: string) {
  try {
    await connectToDatabase()

    const existingUser = await User.findOne({ username })

    return {
      success: true,
      available: !existingUser,
    }
  } catch (error) {
    console.error('사용자명 확인 오류:', error)
    return {
      success: false,
      message: '사용자명 확인 중 오류가 발생했습니다.',
    }
  }
}

// 프로필 방문 횟수 증가
export async function incrementProfileVisit(username: string) {
  try {
    await connectToDatabase()

    await User.findOneAndUpdate(
      { username: username },
      { $inc: { visitCount: 1 } }
    )

    return { success: true }
  } catch (error) {
    console.error('방문 횟수 업데이트 오류:', error)
    return { success: false }
  }
}
