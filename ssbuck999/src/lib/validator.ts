import { z } from 'zod'

// 문의사항
export const ContactSchema = z.object({
  email: z.string().email({ message: '→ 유효한 이메일을 입력해주세요.' }),
  message: z
    .string()
    .min(10, { message: '→ 메시지는 최소 10자 이상 입력해주세요.' })
    .max(300, { message: '→ 메시지는 최대 300자까지 입력할 수 있습니다.' }),
  status: z.enum(['대기중', '확인완료', '답장완료']).optional(),
})

// 회원가입 1단계: 약관 동의
export const TermsAgreementSchema = z.object({
  termsOfService: z.boolean().refine((val) => val === true, {
    message: '→ 이용약관에 동의해주세요.',
  }),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: '→ 개인정보취급방침에 동의해주세요.',
  }),
  allAgreed: z.boolean().optional(),
})

// 회원가입 2단계: 이메일 입력
export const EmailOnlySchema = z.object({
  email: z.string().email('→ 유효한 이메일 주소를 입력해주세요.'),
})

// 회원가입 3단계: 이메일 인증
export const VerifyEmailSchema = z.object({
  email: z.string().email('→ 유효한 이메일 주소를 입력해주세요.'),
  verificationCode: z.string().length(6, '→ 인증번호는 6자리여야 합니다.'),
})

// 회원가입 4단계: 사용자 정보 입력
export const UserSignUpSchema = z
  .object({
    email: z.string().email('→ 유효한 이메일 주소를 입력해주세요.'),
    name: z
      .string()
      .min(2, '→ 이름은 최소 2자 이상이어야 합니다.')
      .max(20, '→ 이름은 최대 20자까지 입력할 수 있습니다.'),
    password: z
      .string()
      .min(6, '→ 비밀번호는 최소 6자 이상이어야 합니다.')
      .regex(/[A-Z]/, '→ 비밀번호에는 최소 하나의 대문자가 포함되어야 합니다.')
      .regex(/[0-9]/, '→ 비밀번호에는 최소 하나의 숫자가 포함되어야 합니다.'),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => !data.confirmPassword || data.password === data.confirmPassword,
    {
      message: '→ 비밀번호가 일치하지 않습니다.',
      path: ['confirmPassword'],
    }
  )

// 로그인
export const UserSignInSchema = z.object({
  email: z.string().email('→ 유효한 이메일 주소를 입력해주세요.'),
  password: z
    .string()
    .min(6, '→ 비밀번호는 최소 6자 이상이어야 합니다.')
    .regex(/[A-Z]/, '→ 비밀번호에는 최소 하나의 대문자가 포함되어야 합니다.')
    .regex(/[0-9]/, '→ 비밀번호에는 최소 하나의 숫자가 포함되어야 합니다.'),
})

// 비밀번호 리셋
export const PasswordResetSchema = z
  .object({
    email: z.string().email('올바른 이메일 형식이 아닙니다.'),
    verificationCode: z
      .string()
      .min(6, '인증번호는 6자리입니다.')
      .max(6, '인증번호는 6자리입니다.'),
    newPassword: z
      .string()
      .min(8, '비밀번호는 최소 8자리 이상이어야 합니다.')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        '비밀번호는 대소문자, 숫자, 특수문자를 포함해야 합니다.'
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })

// 글 쓰기
export const PostInputSchema = z.object({
  title: z
    .string()
    .min(1, { message: '→ 제목을 입력해주세요.' })
    .max(200, { message: '→ 제목은 최대 200자까지 가능합니다.' }),
  slug: z
    .string()
    .min(1, { message: '→ 슬러그를 입력해주세요.' })
    .max(200, { message: '→ 슬러그는 최대 200자까지 가능합니다.' }),
  category: z.string().min(1, { message: '카테고리를 선택해주세요.' }),
  description: z
    .string()
    .max(500, { message: '→ 설명은 최대 500자까지 가능합니다.' })
    .optional(),
  isPublished: z.boolean(),
  storeId: z.string().optional(),
  numViews: z.coerce.number().min(0),
  numLikes: z.coerce.number().min(0),
})

// 글 업데이트용
export const PostUpdateSchema = PostInputSchema.partial().extend({
  id: z.string().min(1, { message: '→ 게시글 ID가 필요합니다.' }),
})

// 스토어 생성
export const StoreInputSchema = z.object({
  storeId: z
    .string()
    .min(1, { message: '→ 스토어 ID를 입력해주세요.' })
    .max(50, { message: '→ 스토어 ID는 최대 50자까지 가능합니다.' }),
  name: z
    .string()
    .min(1, { message: '→ 매장명을 입력해주세요.' })
    .max(100, { message: '→ 매장명은 최대 100자까지 가능합니다.' }),
  address: z
    .string()
    .min(1, { message: '→ 주소를 입력해주세요.' })
    .max(200, { message: '→ 주소는 최대 200자까지 가능합니다.' }),
  location: z
    .string()
    .min(1, { message: '→ 지역을 입력해주세요.' })
    .max(50, { message: '→ 지역은 최대 50자까지 가능합니다.' }),
  parking: z
    .string()
    .min(1, { message: '→ 주차 정보를 입력해주세요.' })
    .max(300, { message: '→ 주차 정보는 최대 300자까지 가능합니다.' }),
  directions: z
    .string()
    .min(1, { message: '→ 오시는길 정보를 입력해주세요.' })
    .max(300, { message: '→ 오시는길 정보는 최대 300자까지 가능합니다.' }),
  since: z
    .string()
    .min(1, { message: '→ 오픈일을 입력해주세요.' })
    .max(20, { message: '→ 오픈일은 최대 20자까지 가능합니다.' }),
  phone: z
    .string()
    .min(1, { message: '→ 전화번호를 입력해주세요.' })
    .max(20, { message: '→ 전화번호는 최대 20자까지 가능합니다.' }),
  tags: z.array(z.string()).optional(),
  images: z.array(z.string()).optional(),
})

// 스토어 업데이트용
export const StoreUpdateSchema = StoreInputSchema.partial().extend({
  id: z.string().min(1, { message: '→ 스토어 ID가 필요합니다.' }),
})

// 리뷰 생성
export const ReviewInputSchema = z.object({
  postId: z.string().min(1, { message: '→ 게시글 ID를 입력해주세요.' }),
  userId: z.string().min(1, { message: '→ 사용자 ID를 입력해주세요.' }),
  content: z
    .string()
    .min(1, { message: '→ 리뷰 내용을 입력해주세요.' })
    .max(1000, { message: '→ 리뷰 내용은 최대 1000자까지 가능합니다.' }),
  rating: z
    .number()
    .min(1, { message: '→ 평점을 선택해주세요.' })
    .max(5, { message: '→ 평점은 1~5점 사이여야 합니다.' }),
  parentId: z.string().optional(),
})

// 리뷰 수정
export const ReviewUpdateSchema = ReviewInputSchema.partial().extend({
  id: z.string().min(1, { message: '→ 리뷰 ID가 필요합니다.' }),
})
