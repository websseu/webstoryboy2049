import { Schema, type Document, model, models } from 'mongoose'

export interface ISong {
  title: string
  artist: string
  image: string
  youtubeID: string
  addedAt: Date
}

export interface IPlaylist extends Document {
  userId: string
  name: string
  songs: ISong[]
  currentIndex: number
  isPlaying: boolean
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const SongSchema = new Schema<ISong>({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  image: { type: String, required: true },
  youtubeID: { type: String, required: true },
  addedAt: { type: Date, default: Date.now },
})

const PlaylistSchema = new Schema<IPlaylist>(
  {
    userId: { type: String, required: true, unique: true },
    name: { type: String, default: 'My Playlist' },
    songs: [SongSchema],
    currentIndex: { type: Number, default: -1 },
    isPlaying: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
)

const Playlist = models.Playlist || model<IPlaylist>('Playlist', PlaylistSchema)
export default Playlist
