'use server'

import { revalidatePath } from 'next/cache'
import bcrypt from 'bcryptjs'

import { connectToDatabase } from '@/lib/db'
import Comment from '@/lib/db/model/comment.model'
import { CommentSchema } from '@/lib/validator'
import { ICommentInput } from '@/lib/types'

// 댓글 작성
export async function createComment(data: ICommentInput) {
  const parsed = CommentSchema.parse(data)
  await connectToDatabase()

  // 비밀번호가 있으면 해시 처리
  if (parsed.password) {
    const salt = await bcrypt.genSalt(10)
    parsed.password = await bcrypt.hash(parsed.password, salt)
  }

  // 댓글 생성
  await Comment.create(parsed)

  // 해당 포스트 경로 재검증
  revalidatePath(`/posts/${parsed.postId}`)
}

// 댓글 목록 조회
export async function getComments(postId: string) {
  await connectToDatabase()
  const comments = await Comment.find({ postId }).sort({ createdAt: -1 })
  return comments
}

// 댓글 삭제 (비밀번호 확인)
export async function deleteComment(id: string, password?: string) {
  await connectToDatabase()
  const comment = await Comment.findById(id)
  if (!comment) {
    throw new Error('댓글을 찾을 수 없습니다.')
  }

  // 비밀번호가 설정된 댓글인지 확인
  if (comment.password) {
    if (!password) {
      throw new Error('비밀번호를 입력해주세요.')
    }
    const isMatch = await bcrypt.compare(password, comment.password)
    if (!isMatch) {
      throw new Error('비밀번호가 일치하지 않습니다.')
    }
  }

  await comment.deleteOne()
  // 삭제 후 포스트 경로 재검증
  revalidatePath(`/posts/${comment.postId}`)
}
