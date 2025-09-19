'use server'

import { revalidatePath } from 'next/cache'
import { CommentInputSchema } from '@/lib/validator'
import { connectToDatabase } from '../db'
import Comments from '../db/model/comment.model'
import { auth } from '@/auth'

export async function createComment(data: unknown) {
  try {
    // auth를 통해 세션 확인 (보안 검증용)
    const session = await auth()

    if (!session || !session.user) {
      return {
        success: false,
        message: '로그인이 필요합니다.',
      }
    }

    // 입력 데이터 검증
    const validatedData = CommentInputSchema.parse(data)

    // MongoDB 연결
    await connectToDatabase()

    // 댓글 생성 (클라이언트에서 받은 데이터 사용)
    const newComment = await Comments.create({
      postId: validatedData.postId,
      author: validatedData.author,
      content: validatedData.content,
      email: validatedData.email || null,
      isDeleted: false,
    })

    // 해당 게시글 페이지 재검증
    revalidatePath(`/posts/${validatedData.postId}`)

    return {
      success: true,
      message: '댓글이 성공적으로 작성되었습니다.',
      data: {
        id: newComment._id.toString(),
        postId: newComment.postId,
        author: newComment.author,
        content: newComment.content,
        createdAt: newComment.createdAt,
      },
    }
  } catch (error) {
    console.error('댓글 생성 오류:', error)

    // Zod 검증 오류
    if (error instanceof Error && error.name === 'ZodError') {
      return {
        success: false,
        message: '입력 데이터가 올바르지 않습니다.',
        errors: JSON.parse(error.message),
      }
    }

    return {
      success: false,
      message: '댓글 작성 중 오류가 발생했습니다. 다시 시도해주세요.',
    }
  }
}

// 댓글 목록 조회 (페이지네이션)
export async function getCommentsPaginated(
  page = 1,
  limit = 10,
  search?: string,
  status?: 'all' | 'active' | 'deleted'
) {
  try {
    await connectToDatabase()

    // 검색 조건 구성
    const searchConditions: any = {}

    if (search) {
      searchConditions.$or = [
        { author: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
      ]
    }

    if (status === 'active') {
      searchConditions.isDeleted = false
    } else if (status === 'deleted') {
      searchConditions.isDeleted = true
    }

    // 전체 개수 조회
    const totalCount = await Comments.countDocuments(searchConditions)

    // 페이지네이션 계산
    const totalPages = Math.ceil(totalCount / limit)
    const skip = (page - 1) * limit

    // 댓글 목록 조회 (게시글 정보 포함)
    const comments = await Comments.find(searchConditions)
      .populate('postId', 'title slug')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()

    return {
      success: true,
      comments: comments.map((comment) => ({
        ...comment,
        _id: comment._id.toString(),
        postId: comment.postId.toString(),
        post: comment.postId,
      })),
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
    console.error('댓글 목록 조회 오류:', error)
    return {
      success: false,
      error: '댓글 목록을 불러오는데 실패했습니다.',
    }
  }
}

// 댓글 삭제 (소프트 삭제)
export async function deleteComment(commentId: string) {
  try {
    const session = await auth()

    if (!session || !session.user) {
      return {
        success: false,
        message: '권한이 없습니다.',
      }
    }

    await connectToDatabase()

    const comment = await Comments.findByIdAndUpdate(commentId, { isDeleted: true }, { new: true })

    if (!comment) {
      return {
        success: false,
        message: '댓글을 찾을 수 없습니다.',
      }
    }

    revalidatePath('/admin/comments')

    return {
      success: true,
      message: '댓글이 삭제되었습니다.',
    }
  } catch (error) {
    console.error('댓글 삭제 오류:', error)
    return {
      success: false,
      message: '댓글 삭제 중 오류가 발생했습니다.',
    }
  }
}

// 댓글 복원
export async function restoreComment(commentId: string) {
  try {
    const session = await auth()

    if (!session || !session.user) {
      return {
        success: false,
        message: '권한이 없습니다.',
      }
    }

    await connectToDatabase()

    const comment = await Comments.findByIdAndUpdate(commentId, { isDeleted: false }, { new: true })

    if (!comment) {
      return {
        success: false,
        message: '댓글을 찾을 수 없습니다.',
      }
    }

    revalidatePath('/admin/comments')

    return {
      success: true,
      message: '댓글이 복원되었습니다.',
    }
  } catch (error) {
    console.error('댓글 복원 오류:', error)
    return {
      success: false,
      message: '댓글 복원 중 오류가 발생했습니다.',
    }
  }
}
