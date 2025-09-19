import { z } from 'zod'
import { ContactSchema } from './validator'

// 문의사항
export type IContactInput = z.infer<typeof ContactSchema>
