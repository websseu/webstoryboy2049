import { Schema, Model, models, model } from 'mongoose'
import { IContactInput } from '@/lib/types'

export interface IContact extends Document, IContactInput {
  _id: string
  createdAt: Date
  updatedAt: Date
}

const ContactSchema = new Schema<IContact>(
  {
    email: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
)

const Contact =
  (models.Contact as Model<IContact>) ||
  model<IContact>('Contact', ContactSchema)

export default Contact
