import { z } from 'zod'
import {
  ContactSchema,
  TermsAgreementSchema,
  EmailOnlySchema,
  VerifyEmailSchema,
  UserInfoSchema,
  UserSignInSchema,
} from './validator'

// 문의사항
export type IContactInput = z.infer<typeof ContactSchema>

// 회원가입
export type ITermsAgreementInput = z.infer<typeof TermsAgreementSchema>
export type IEmailOnlyInput = z.infer<typeof EmailOnlySchema>
export type IVerifyEmailInput = z.infer<typeof VerifyEmailSchema>
export type IUserInfoInput = z.infer<typeof UserInfoSchema>

// 로그인
export type IUserSignInInput = z.infer<typeof UserSignInSchema>
