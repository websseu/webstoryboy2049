import { z } from 'zod'
import {
  ContactSchema,
  EmailOnlySchema,
  PasswordResetSchema,
  TermsAgreementSchema,
  UserSignInSchema,
  UserSignUpSchema,
  VerifyEmailSchema,
} from './validator'

// 뮤직 데이터
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
