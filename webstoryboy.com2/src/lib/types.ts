import { z } from 'zod'
import {
  ContactSchema,
  PostInputSchema,
  PostUpdateSchema,
  UserInputSchema,
  UserSignInSchema,
  UserSignUpSchema,
} from './validator'

export type MenuCard = {
  title: string
  description: string
  icon: string
  iconCount: number
  href: string
  buttonText: string
}

export type MenuItemType = {
  title: string
  description: string
  href: string
}

export type MenuSection = {
  label: string
  card: MenuCard
  items: MenuItemType[]
}

export type HtmlDocItem = {
  slug: string
  title: string
}

// 메뉴 데이터
export type Data = {
  menuData: MenuSection[]
  HtmlDocs: HtmlDocItem[]
  CssDocs: string[]
}

// 문의하기
export type IContactInput = z.infer<typeof ContactSchema>

// 회원 요소
export type IUserInput = z.infer<typeof UserInputSchema>

// 회원가입
export type IUserSignUp = z.infer<typeof UserSignUpSchema>

// 로그인
export type IUserSignIn = z.infer<typeof UserSignInSchema>

// 글 요소
export type IPostInput = z.infer<typeof PostInputSchema>

// 글 업데이트
export type IPostUpdate = z.infer<typeof PostUpdateSchema>
