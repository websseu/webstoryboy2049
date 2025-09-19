import { z } from 'zod'
import {
  ContactSchema,
  EmailExistenceSchema,
  EmailOnlySchema,
  PasswordResetSchema,
  TermsAgreementSchema,
  UserSignInSchema,
  UserSignUpSchema,
  VerifyEmailSchema,
} from './validator'

export interface Contact {
  _id: string
  email: string
  title: string
  message: string
  status: '대기중' | '확인완료' | '답장완료'
  createdAt: string
  updatedAt: string
}

export interface User {
  _id: string
  name: string
  username: string
  email: string
  role?: string
  visitCount: number
  isActive: boolean
  emailVerified: boolean
  createdAt: string
}

export interface Pagination {
  currentPage: number
  totalPages: number
  totalCount: number
  limit: number
  hasNextPage: boolean
  hasPrevPage: boolean
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

// 이메일 존재 여부 확인
export type IEmailExistenceInput = z.infer<typeof EmailExistenceSchema>

// 비밀번호 리셋
export type IPasswordResetInput = z.infer<typeof PasswordResetSchema>
