'use server'

import Contact from '@/lib/db/model/contact.model'
import { connectToDatabase } from '../db'
import { sendContactNotification } from '@/email/contact-notification'
import { IContactInput } from '../type'
import { ContactSchema } from '../validator'

// createContact : 문의사항 만들기
// getContact : 문의사항 가져오기
// deleteContact : 특정 문의사항 삭제

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

// 모든 문의사항 가져오기
export async function getContacts() {
  try {
    // 1. MongoDB 연결
    await connectToDatabase()

    // 2. 문의사항을 생성일시 내림차순으로 조회
    const contacts = await Contact.find().sort({ createdAt: -1 })

    return {
      success: true,
      contacts,
    }
  } catch (error) {
    console.error('문의사항 조회 중 오류 발생:', error)
    return {
      success: false,
      contacts: [],
    }
  }
}

// 특정 문의사항 삭제
export async function deleteContact(contactId: string) {
  try {
    await connectToDatabase()
    await Contact.findByIdAndDelete(contactId)

    return {
      success: true,
      message: '문의사항이 삭제되었습니다.',
    }
  } catch (err) {
    console.error('문의삭제 중 오류 발생', err)
    return {
      success: false,
      message: '문의삭제 중 오류 발생가 발생했습니다.',
    }
  }
}
