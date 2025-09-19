import { z } from 'zod'
import {
  ContactSchema,
  EmailExistenceSchema,
  EmailOnlySchema,
  PasswordResetSchema,
  PostInputSchema,
  PostUpdateSchema,
  StoreInputSchema,
  StoreUpdateSchema,
  TermsAgreementSchema,
  UserEditSchema,
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
  provider?: string
  image: string
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

// 회원정보 수정
export type UserEditInput = z.infer<typeof UserEditSchema>

// 글 쓰기
export type IPostInput = z.infer<typeof PostInputSchema>

// 글 수정하기
export type IPostUpdateInput = z.infer<typeof PostUpdateSchema>

// 스토어 생성
export type IStoreInput = z.infer<typeof StoreInputSchema>

// 스토어 수정하기
export type IStoreUpdateInput = z.infer<typeof StoreUpdateSchema>
