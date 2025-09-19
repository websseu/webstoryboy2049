import mongoose from 'mongoose'

const PasswordResetCodeSchema = new mongoose.Schema({
  email: { type: String, required: true },
  code: { type: String, required: true },
  expiresAt: { type: Date, required: true },
})

const PasswordResetCode =
  mongoose.models.PasswordResetCode ||
  mongoose.model('PasswordResetCode', PasswordResetCodeSchema)

export default PasswordResetCode
