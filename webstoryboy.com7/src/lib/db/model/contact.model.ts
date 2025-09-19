import { Schema, Document, models, model } from 'mongoose'

export interface IContact extends Document {
  email: string
  title: string
  message: string
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

const Contact = models.Contact || model<IContact>('Contact', ContactSchema)

export default Contact
