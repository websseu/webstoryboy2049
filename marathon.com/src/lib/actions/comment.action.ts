'use server'

import { revalidatePath } from 'next/cache'
import { connectToDatabase } from '../db'
import Comment from '../db/models/comment.model'
import Marathon from '../db/models/marathon.model'

// 1. createComment : 댓글 작성
// 2. getComments : 댓글 목록 조회
// 3. updateComment : 댓글 수정
// 4. deleteComment : 댓글 삭제
// 5. getCommentCount : 댓글 개수 조회

// 댓글 작성
export async function createComment(marathonId: string, userId: string, content: string) {
  try {
    await connectToDatabase()

    // 내용 검증
    if (!content.trim()) {
      return {
        success: false,
        error: '댓글 내용을 입력해주세요.',
      }
    }

    if (content.length > 1000) {
      return {
        success: false,
        error: '댓글은 1000자 이내로 작성해주세요.',
      }
    }

    // 마라톤 존재 확인
    const marathon = await Marathon.findById(marathonId)
    if (!marathon) {
      return {
        success: false,
        error: '마라톤을 찾을 수 없습니다.',
      }
    }

    // 댓글 생성
    const comment = await Comment.create({
      marathonId,
      userId,
      content: content.trim(),
    })

    // 댓글 수 증가 (마라톤 모델에 commentCount 필드 추가 필요)
    // await Marathon.findByIdAndUpdate(marathonId, {
    //   $inc: { commentCount: 1 },
    // })

    revalidatePath(`/marathon/${marathon.slug}`)

    return {
      success: true,
      message: '댓글이 작성되었습니다.',
      commentId: comment._id.toString(),
    }
  } catch (error) {
    console.error('댓글 작성 오류:', error)
    return {
      success: false,
      error: '댓글 작성 중 오류가 발생했습니다.',
    }
  }
}

// 댓글 목록 조회
export async function getComments(marathonId: string, page = 1, limit = 10) {
  try {
    await connectToDatabase()

    const skip = (page - 1) * limit

    const comments = await Comment.find({
      marathonId,
      isDeleted: false,
      parentId: null, // 대댓글 제외
    })
      .populate({
        path: 'userId',
        select: 'name image',
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()

    const totalCount = await Comment.countDocuments({
      marathonId,
      isDeleted: false,
      parentId: null,
    })

    const totalPages = Math.ceil(totalCount / limit)

    return {
      success: true,
      comments: JSON.parse(JSON.stringify(comments)),
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
    console.error('댓글 조회 오류:', error)
    return {
      success: false,
      comments: [],
      error: '댓글을 불러오는데 실패했습니다.',
    }
  }
}

// 댓글 수정
export async function updateComment(commentId: string, userId: string, content: string) {
  try {
    await connectToDatabase()

    // 내용 검증
    if (!content.trim()) {
      return {
        success: false,
        error: '댓글 내용을 입력해주세요.',
      }
    }

    if (content.length > 1000) {
      return {
        success: false,
        error: '댓글은 1000자 이내로 작성해주세요.',
      }
    }

    // 댓글 존재 및 권한 확인
    const comment = await Comment.findOne({
      _id: commentId,
      userId,
      isDeleted: false,
    })

    if (!comment) {
      return {
        success: false,
        error: '댓글을 찾을 수 없거나 수정 권한이 없습니다.',
      }
    }

    // 댓글 수정
    await Comment.findByIdAndUpdate(commentId, {
      content: content.trim(),
      isEdited: true,
    })

    // 마라톤 페이지 재검증
    const marathon = await Marathon.findById(comment.marathonId)
    if (marathon) {
      revalidatePath(`/marathon/${marathon.slug}`)
    }

    return {
      success: true,
      message: '댓글이 수정되었습니다.',
    }
  } catch (error) {
    console.error('댓글 수정 오류:', error)
    return {
      success: false,
      error: '댓글 수정 중 오류가 발생했습니다.',
    }
  }
}

// 댓글 삭제
export async function deleteComment(commentId: string, userId: string) {
  try {
    await connectToDatabase()

    // 댓글 존재 및 권한 확인
    const comment = await Comment.findOne({
      _id: commentId,
      userId,
      isDeleted: false,
    })

    if (!comment) {
      return {
        success: false,
        error: '댓글을 찾을 수 없거나 삭제 권한이 없습니다.',
      }
    }

    // 소프트 삭제
    await Comment.findByIdAndUpdate(commentId, {
      isDeleted: true,
      content: '삭제된 댓글입니다.',
    })

    // 댓글 수 감소
    await Marathon.findByIdAndUpdate(comment.marathonId, {
      $inc: { commentCount: -1 },
    })

    // 마라톤 페이지 재검증
    const marathon = await Marathon.findById(comment.marathonId)
    if (marathon) {
      revalidatePath(`/marathon/${marathon.slug}`)
    }

    return {
      success: true,
      message: '댓글이 삭제되었습니다.',
    }
  } catch (error) {
    console.error('댓글 삭제 오류:', error)
    return {
      success: false,
      error: '댓글 삭제 중 오류가 발생했습니다.',
    }
  }
}

// 댓글 개수 조회
export async function getCommentCount(marathonId: string) {
  try {
    await connectToDatabase()

    const count = await Comment.countDocuments({
      marathonId,
      isDeleted: false,
    })

    return {
      success: true,
      count,
    }
  } catch (error) {
    console.error('댓글 개수 조회 오류:', error)
    return {
      success: false,
      count: 0,
    }
  }
}
