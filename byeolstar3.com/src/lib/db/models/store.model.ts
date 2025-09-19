import { Schema, Document, models, model } from 'mongoose'

export interface IStore extends Document {
  storeId: string
  name: string
  address: string
  location: string
  parking: string
  directions: string
  since: string
  phone: string
  tags: string[]
  services: string[]
  facilities: string[]
  images: string[]
  createdAt: Date
  updatedAt: Date
}

const StoreSchema = new Schema<IStore>(
  {
    storeId: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    address: { type: String, trim: true },
    location: { type: String, trim: true },
    parking: { type: String, trim: true },
    directions: { type: String, trim: true },
    since: { type: String, trim: true },
    phone: { type: String, trim: true },
    tags: { type: [String], default: [] },
    services: { type: [String], default: [] },
    facilities: { type: [String], default: [] },
    images: { type: [String], default: [] },
  },
  { timestamps: true }
)

// 검색을 위한 인덱스
StoreSchema.index({ name: 'text', address: 'text', location: 'text' })
StoreSchema.index({ storeId: 1 })
StoreSchema.index({ location: 1 })
StoreSchema.index({ tags: 1 })

const Store = models.Store || model<IStore>('Store', StoreSchema)

export default Store
