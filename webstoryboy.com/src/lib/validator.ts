import { z } from 'zod'

// 공통요소
const UserName = z
  .string()
  .min(2, { message: '사용자 이름은 최소 2자 이상이어야 합니다.' })
  .max(15, { message: '사용자 이름은 최대 15자까지 가능합니다.' })
const Email = z
  .string()
  .min(1, '이메일은 필수 입력 사항입니다.')
  .email('올바른 이메일 형식이 아닙니다.')
const Password = z
  .string()
  .min(6, { message: '비밀번호는 최소 6자 이상이어야 합니다.' })
  .max(20, { message: '비밀번호는 최대 20자까지 가능합니다.' })
const Title = z
  .string()
  .min(5, { message: '제목은 최소 5자 이상이어야 합니다.' })
  .max(100, { message: '제목은 최대 100자까지 가능합니다.' })
const Slug = z
  .string()
  .min(5, { message: '슬러그는 최소 5자 이상이어야 합니다.' })
  .max(100, { message: '슬러그는 최대 100자까지 가능합니다.' })
const Message = z
  .string()
  .min(5, { message: '문의하기는 최소 5자 이상이어야 합니다.' })
  .max(10000, { message: '문의하기는 최대 10000자까지 가능합니다.' })

// 문의 하기
export const ContactSchema = z.object({
  email: Email,
  title: Title,
  message: Message,
})

// 회원 요소
export const UserInputSchema = z.object({
  name: UserName,
  email: Email,
  emailVerified: z.boolean(),
  password: Password,
  role: z.string().optional(),
  image: z.string().optional(),
  isActive: z.boolean(),
  visitCount: z.number().int().default(0),
  verificationToken: z.string().nullable().optional(),
})

// 회원가입
export const UserSignUpSchema = z
  .object({
    name: UserName,
    email: Email,
    password: Password,
    confirmPassword: Password,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '패스워드가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })

// 로그인
export const UserSignInSchema = z.object({
  email: Email,
  password: Password,
})

// 회원 프로필
export const UserProfileSchema = z.object({
  bio: z.string().optional(),
  location: z.string().optional(),
  job: z.string().optional(),
  mbti: z.string().optional(),
  age: z.string().optional(),
  instagram: z.string().optional(),
  github: z.string().optional(),
  youtube: z.string().optional(),
  twitter: z.string().optional(),
})

// 글쓰기
export const PostInputSchema = z.object({
  title: Title,
  slug: Slug,
  category: z.string().min(1, '카테고리를 선택해주세요.'),
  subCategory: z.string().min(1, '서브카테고리를 선택해주세요.'),
  components: z.string().optional(),
  description: z.string().optional(),
  contents: z.string().optional(),
  isPublished: z.boolean(),
  author: z.string().optional(),
  images: z.string().optional(),
  youtubeId: z.string().optional(),
  tags: z.array(z.string()).optional(),
  numReviews: z.number().optional(),
  numViews: z.number().optional(),
  numLikes: z.number().optional(),
  reviews: z.array(z.string()).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  likes: z
    .array(
      z.object({
        user: z.string(),
        count: z.number(),
      })
    )
    .optional(),
})

// 글쓰기 업데이트
export const PostUpdateSchema = PostInputSchema.extend({
  _id: z.string(),
})
