'use server'

import Contact from '@/lib/db/model/contact.model'
import { connectToDatabase } from '../db'
import { ContactSchema } from '../validator'
import type { IContactInput } from '../type'
import { sendContactNotification } from '@/email/contact-notification'

// 문의사항 만들기
export async function createContact(formData: IContactInput) {
  try {
    // 1. Zod 스키마로 입력 검증
    const parsedData = await ContactSchema.parseAsync(formData)

    // 2. MongoDB 연결
    await connectToDatabase()

    // 3. 문의 내용 저장
    const newContact = await Contact.create(parsedData)

    // 4. 관리자에게 알림 이메일 발송
    try {
      await sendContactNotification({
        email: parsedData.email,
        title: parsedData.title,
        message: parsedData.message,
        contactDate: newContact.createdAt,
      })
      console.log('관리자 문의 알림 이메일 발송 성공')
    } catch (emailError) {
      console.error('관리자 문의 알림 이메일 발송 실패:', emailError)
    }

    // 5. 성공 응답 반환
    return {
      success: true,
      message: '문의가 성공적으로 접수되었습니다.',
    }
  } catch (err) {
    console.error('문의 저장 중 오류 발생:', err)
    // 6. 실패 응답 반환
    return {
      success: false,
      message: '문의 저장 중 오류가 발생했습니다.',
    }
  }
}

// 문의사항 가져오기
export interface ContactData {
  _id: string
  email: string
  title: string
  message: string
  createdAt: Date
}

export interface GetContactsParams {
  page?: number
  limit?: number
}

export async function getContacts(params: GetContactsParams = {}) {
  try {
    await connectToDatabase()

    const { page = 1, limit = 10 } = params

    // 페이지네이션 계산
    const skip = (page - 1) * limit

    // 데이터 조회 (최신순으로 정렬)
    const [contacts, totalCount] = await Promise.all([
      Contact.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Contact.countDocuments({}),
    ])

    return {
      success: true,
      contacts,
      totalCount,
    }
  } catch (error) {
    console.error('문의사항 조회 오류:', error)
    return {
      success: false,
      message: '문의사항을 불러오는 중 오류가 발생했습니다.',
    }
  }
}
