'use server'

import User from '../db/model/user.model'
import { connectToDatabase } from '../db'
import { SignupSchema } from '../validator'
import { ISignupInput } from '../type'
import bcrypt from 'bcryptjs'

export async function createUser(formData: ISignupInput) {
  try {
    // zod 비동기 유효성 검사
    const parsed = await SignupSchema.parseAsync(formData)
    const { name, email, password } = parsed

    // DB 연결
    await connectToDatabase()

    // 중복 검사
    const [nameExists, emailExists] = await Promise.all([
      User.findOne({ name }),
      User.findOne({ email: email.toLowerCase() }),
    ])

    if (nameExists) {
      return { success: false, message: '이미 사용 중인 이름입니다.' }
    }

    if (emailExists) {
      return { success: false, message: '이미 등록된 이메일입니다.' }
    }

    // 유저 정보 생성 및 저장
    const newUser = await User.create({
      name,
      email: email.trim().toLowerCase(),
      password: await bcrypt.hash(password, 10),
      role: 'user',
      image: '/face/default.jpg',
      visitCount: 0,
      verificationToken: '',
    })

    // 성공 반환
    return {
      success: true,
      message: `${newUser.name}님, 회원가입이 완료되었습니다!`,
    }
  } catch (error) {
    console.error('회원가입 오류:', error)
    return {
      success: false,
      message: '회원가입 중 알 수 없는 오류가 발생했습니다.',
    }
  }
}
