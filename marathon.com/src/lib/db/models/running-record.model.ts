import { Schema, type Document, model, models } from 'mongoose'

export interface IRunningRecord extends Document {
  userId: Schema.Types.ObjectId
  title: string
  date: Date
  targetDistance: number // km
  actualDistance?: number // km
  targetTime?: string // HH:MM:SS 형식
  actualTime: string // HH:MM:SS 형식
  pace?: string // 자동 계산된 페이스 (분/km)
  notes?: string
  weather?: string
  location?: string
  difficulty: 1 | 2 | 3 | 4 | 5 // 1: 매우 쉬움, 5: 매우 어려움
  feeling: 1 | 2 | 3 | 4 | 5 // 1: 매우 나쁨, 5: 매우 좋음
  createdAt: Date
  updatedAt: Date
}

const RunningRecordSchema = new Schema<IRunningRecord>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    date: {
      type: Date,
      required: true,
    },
    targetDistance: {
      type: Number,
      required: true,
      min: 0.1,
      max: 200,
    },
    actualDistance: {
      type: Number,
      min: 0.1,
      max: 200,
    },
    targetTime: {
      type: String,
      match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
    },
    actualTime: {
      type: String,
      required: true,
      match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
    },
    pace: {
      type: String,
    },
    notes: {
      type: String,
      maxlength: 1000,
    },
    weather: {
      type: String,
      enum: ['맑음', '흐림', '비', '눈', '바람', '더움', '추움'],
    },
    location: {
      type: String,
      maxlength: 100,
    },
    difficulty: {
      type: Number,
      min: 1,
      max: 5,
      default: 3,
    },
    feeling: {
      type: Number,
      min: 1,
      max: 5,
      default: 3,
    },
  },
  {
    timestamps: true,
  }
)

// 인덱스 설정
RunningRecordSchema.index({ userId: 1, date: -1 })
RunningRecordSchema.index({ userId: 1, createdAt: -1 })

// 페이스 자동 계산 미들웨어
RunningRecordSchema.pre('save', function (next) {
  if (this.actualTime && this.actualDistance) {
    const timeArray = this.actualTime.split(':')
    const totalMinutes =
      Number.parseInt(timeArray[0]) * 60 +
      Number.parseInt(timeArray[1]) +
      Number.parseInt(timeArray[2]) / 60
    const paceMinutes = totalMinutes / this.actualDistance
    const paceMin = Math.floor(paceMinutes)
    const paceSec = Math.round((paceMinutes - paceMin) * 60)
    this.pace = `${paceMin}:${paceSec.toString().padStart(2, '0')}`
  } else if (this.actualTime && this.targetDistance) {
    const timeArray = this.actualTime.split(':')
    const totalMinutes =
      Number.parseInt(timeArray[0]) * 60 +
      Number.parseInt(timeArray[1]) +
      Number.parseInt(timeArray[2]) / 60
    const paceMinutes = totalMinutes / this.targetDistance
    const paceMin = Math.floor(paceMinutes)
    const paceSec = Math.round((paceMinutes - paceMin) * 60)
    this.pace = `${paceMin}:${paceSec.toString().padStart(2, '0')}`
  }
  next()
})

const RunningRecord =
  models.RunningRecord || model<IRunningRecord>('RunningRecord', RunningRecordSchema)

export default RunningRecord
