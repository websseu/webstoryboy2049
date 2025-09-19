import { Schema, type Document, model, models } from 'mongoose'

export interface IComment extends Document {
  marathonId: Schema.Types.ObjectId
  userId: Schema.Types.ObjectId
  content: string
  isEdited: boolean
  isDeleted: boolean
  likes: number
  parentId?: Schema.Types.ObjectId // 대댓글용 (나중에 사용)
  createdAt: Date
  updatedAt: Date
}

const CommentSchema = new Schema<IComment>(
  {
    marathonId: {
      type: Schema.Types.ObjectId,
      ref: 'Marathon',
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
    isEdited: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    likes: {
      type: Number,
      default: 0,
    },
    parentId: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      default: null,
    },
  },
  {
    timestamps: true,
  }
)

// 인덱스 설정
CommentSchema.index({ marathonId: 1, createdAt: -1 })
CommentSchema.index({ userId: 1 })
CommentSchema.index({ parentId: 1 })

const Comment = models.Comment || model<IComment>('Comment', CommentSchema)

export default Comment
