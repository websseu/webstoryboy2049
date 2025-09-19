'use server'

import Contact from '@/lib/db/model/contact.model'
import { connectToDatabase } from '../db'
import { ContactSchema } from '../validator'
import { IContactInput } from '../type'

export async function createContact(formData: IContactInput) {
  try {
    const parsed = ContactSchema.parse(formData)

    await connectToDatabase()
    await Contact.create(parsed)

    return {
      success: true,
    }
  } catch (error) {
    console.error('문의 오류:', error)
    return {
      success: false,
      error: '문의 저장 중 오류가 발생했습니다.',
    }
  }
}
