import { z } from 'zod'
import {
  ContactSchema,
  EmailOnlySchema,
  PasswordResetSchema,
  PlaylistSchema,
  TermsAgreementSchema,
  UserSignInSchema,
  UserSignUpSchema,
  VerifyEmailSchema,
} from './validator'

// 문의사항
export type IContactInput = z.infer<typeof ContactSchema>

// 회원가입
export type ITermsAgreementInput = z.infer<typeof TermsAgreementSchema>
export type IEmailOnlyInput = z.infer<typeof EmailOnlySchema>
export type IVerifyEmailInput = z.infer<typeof VerifyEmailSchema>
export type IUserSignUpInput = z.infer<typeof UserSignUpSchema>

// 로그인
export type IUserSignInInput = z.infer<typeof UserSignInSchema>

// 비밀번호 리셋
export type IPasswordResetInput = z.infer<typeof PasswordResetSchema>

export interface MusicData {
  ranking: string
  title: string
  artist: string
  image: string
  prev: string
  streak: string
  streams: string
  youtubeID?: string
}

export interface ISongInput {
  title: string
  artist: string
  image: string
  youtubeID: string
}

export interface IPlaylistInput {
  userId: string
  name: string
}

export interface IPlaylistCreateInput {
  userId: string
  name?: string
}

export interface IPlaylistUpdateInput {
  userId: string
  name?: string
  currentIndex?: number
  isPlaying?: boolean
}

export interface ISongAddInput {
  userId: string
  song: ISongInput
  position?: 'top' | 'bottom'
}

export interface ISongRemoveInput {
  userId: string
  songIndex: number
}

export interface IPlaylistResponse {
  success: boolean
  message?: string
  error?: string
  playlist?: {
    _id: string
    userId: string
    name: string
    songs: ISongInput[]
    currentIndex: number
    isPlaying: boolean
    isActive: boolean
    createdAt: string
    updatedAt: string
  }
}
