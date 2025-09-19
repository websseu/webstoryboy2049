import { z } from 'zod'

// 문의사항
export const ContactSchema = z.object({
  email: z.string().email({ message: '→ 유효한 이메일을 입력해주세요.' }),
  title: z
    .string()
    .min(5, { message: '→ 제목은 5글자 이상 입력해주세요.' })
    .max(50, { message: '→ 제목은 최대 50자까지 입력할 수 있습니다.' }),
  message: z
    .string()
    .min(10, { message: '→ 메시지는 최소 10자 이상 입력해주세요.' })
    .max(300, { message: '→ 메시지는 최대 300자까지 입력할 수 있습니다.' }),
})
