'use server'

import { connectToDatabase } from '@/lib/db'
import { IContactInput } from '../types'
import Contact from '../db/model/contact.model'
import { revalidatePath } from 'next/cache'

// 문의사항 만들기
export async function createContact(data: IContactInput) {
  try {
    await connectToDatabase()
    await Contact.create(data)

    return {
      success: true,
    }
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

/**
 * 페이지네이션된 문의사항 목록 가져오기
 * @param page 현재 페이지 (1부터 시작)
 * @param limit 페이지당 항목 수
 */
export async function getContacts(page: number, limit: number) {
  try {
    await connectToDatabase()

    const skip = (page - 1) * limit
    // 동시에 리스트와 전체 개수 조회
    const [contacts, totalItems] = await Promise.all([
      Contact.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Contact.countDocuments(),
    ])

    return {
      success: true,
      contacts,
      totalItems,
    }
  } catch (error) {
    return { success: false, error: JSON.stringify(error) }
  }
}

// 문의사항 삭제하기
export async function deleteContact(contactId: string) {
  try {
    await connectToDatabase()
    const result = await Contact.findByIdAndDelete(contactId)
    if (!result) throw new Error('해당 문의가 존재하지 않습니다.')

    revalidatePath('/admin/contact')
    return { success: true }
  } catch (error) {
    return { success: false, error: JSON.stringify(error) }
  }
}
