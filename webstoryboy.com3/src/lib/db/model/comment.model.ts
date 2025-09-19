import { Document, Model, models, model, Schema, Types } from 'mongoose'
import { ICommentInput } from '@/lib/types'

// 댓글 인터페이스: 입력 타입에서 postId를 제외하고, MongoDB ObjectId 타입으로 재정의합니다.
export interface IComment extends Document, Omit<ICommentInput, 'postId'> {
  postId: Types.ObjectId
  _id: string
  createdAt: Date
  updatedAt: Date
}

// 댓글 스키마 정의
const commentSchema = new Schema<IComment>(
  {
    postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    author: { type: String, default: 'anonymous' },
    content: { type: String, required: true },
    password: { type: String },
  },
  { timestamps: true }
)

// 모델 생성 또는 기존 모델 재사용
const Comment = (models.Comment as Model<IComment>) || model<IComment>('Comment', commentSchema)

export default Comment
