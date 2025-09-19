'use server'

import User from '../db/model/user.model'
import bcrypt from 'bcryptjs'
import { IUserSignIn, IUserSignUp } from '../types'
import { UserSignUpSchema } from '../validator'
import { connectToDatabase } from '../db'
import { signIn, signOut } from '@/auth'
import { redirect } from 'next/navigation'

import crypto from 'crypto'
import { sendVerificationEmail } from '@/email/email-verification'
import PasswordResetCode from '../db/model/password.model'
import { sendPasswordResetCodeEmail } from '@/email/email-password'

// registerUser : 회원가입
// signInWithCredentials : 로그인
// SignOut : 로그아웃
// SignInWithGoogle : 구글 로그인
// SignInWithGithub : 깃헙 로그인
// getAllUsers : 모든 회원 목록 조회
// getAllUsersPages : 모든 회원 목록 조회(페이지)
// deleteUser : 해당(id) 회원 삭제
// updateUser : 해당(id) 회원 정보 수정

// checkEmailExists : 이메일 존재 여부 확인

// 회원가입
export async function registerUser(userSignUp: IUserSignUp) {
  try {
    // 사용자 입력 데이터 유효성 검사 및 구조 파싱
    const user = await UserSignUpSchema.parseAsync({
      name: userSignUp.name,
      email: userSignUp.email,
      password: userSignUp.password,
      confirmPassword: userSignUp.confirmPassword,
    })

    // 데이터베이스 연결
    await connectToDatabase()

    // 이메일 중복 검사
    const existingUser = await User.findOne({ email: user.email })
    if (existingUser) {
      return { success: false }
    }

    // 인증 토큰 생성
    const verificationToken = crypto.randomBytes(32).toString('hex')

    // 유저 정보 생성 및 저장 (비밀번호는 해싱 후 저장)
    const newUser = await User.create({
      ...user,
      password: await bcrypt.hash(user.password, 10),
      role: 'User',
      image: '/face/default.jpg',
      verificationToken,
    })

    // 인증 이메일 발송
    await sendVerificationEmail(newUser.email, verificationToken)

    // 회원가입 성공 응답
    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 로그인
export async function signInWithCredentials(user: IUserSignIn) {
  try {
    const res = await signIn('credentials', {
      redirect: false,
      email: user.email,
      password: user.password,
    })

    if (!res || res.error) {
      return {
        success: false,
        error: res?.error || '로그인에 실패함!',
      }
    }

    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 로그아웃
export const SignOut = async () => {
  await signOut({ redirect: false })
  redirect('/')
}

// 구글 로그인
export const SignInWithGoogle = async () => {
  await signIn('google')
}

// 깃헙 로그인
export const SignInWithGithub = async () => {
  await signIn('github')
}

// 모든 회원 목록 조회
export async function getAllUsers() {
  try {
    // 데이터베이스 연결
    await connectToDatabase()

    // 모든 사용자 조회
    const users = await User.find({}).select('-password -verificationToken')

    return {
      success: true,
      users,
    }
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 모든 회원 목록 조회(페이지)
export async function getAllUsersPages({
  page = 1,
  limit = 10,
}: {
  page?: number
  limit?: number
}) {
  try {
    await connectToDatabase()

    const totalUsers = await User.countDocuments()
    const skip = (Number(page) - 1) * limit
    const users = await User.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()

    return {
      success: true,
      users,
      totalUsers,
      totalPages: Math.ceil(totalUsers / limit),
      currentPage: page,
    }
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 해당(id) 회원 삭제
export async function deleteUser(userId: string) {
  try {
    await connectToDatabase()

    const result = await User.findByIdAndDelete(userId)

    if (!result) {
      throw new Error('회원이 존재하지 않습니다.')
    }

    return {
      success: true,
    }
  } catch (error) {
    console.error('회원 삭제 오류:', error)
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 해당(id) 회원 정보 수정
export async function updateUser(
  userId: string,
  updateData: {
    name: string
    email: string
    role: string
    visitCount: number
  }
) {
  try {
    await connectToDatabase()

    const result = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    })

    if (!result) {
      throw new Error('수정할 회원이 존재하지 않습니다.')
    }

    return {
      success: true,
      message: '회원 수정 완료함!',
    }
  } catch (error) {
    console.error('회원 수정 오류:', error)
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 이메일 존재 여부 확인
export async function checkEmailExists(email: string) {
  try {
    await connectToDatabase()

    const user = await User.findOne({ email }).lean()

    if (user) {
      return { success: true }
    } else {
      return { success: false }
    }
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 주어진 이메일로 비밀번호 재설정 코드를 생성하고 전송
export async function sendPasswordResetCode(email: string) {
  try {
    await connectToDatabase()

    // 사용자가 존재하는지 확인
    const user = await User.findOne({ email })
    if (!user) {
      return { success: false, error: '등록되지 않은 이메일입니다.' }
    }

    // 6자리 인증코드 생성
    const code = Math.floor(100000 + Math.random() * 900000).toString()

    // 기존 코드 삭제 후 새로 저장
    await PasswordResetCode.deleteMany({ email })

    // 새로운 인증 코드 저장 (5분 후 만료)
    await PasswordResetCode.create({
      email,
      code,
      expiresAt: new Date(Date.now() + 1000 * 60 * 5), // 5분 유효
    })

    // 생성된 인증 코드를 이메일로 전송
    await sendPasswordResetCodeEmail(email, code)

    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 이메일과 인증 코드가 일치하는지 확인하고 유효 기간을 검사
export async function verifyPasswordResetCode(email: string, code: string) {
  await connectToDatabase()

  // 이메일과 코드로 인증 코드 레코드 조회
  const record = await PasswordResetCode.findOne({ email, code })
  if (!record) {
    return { success: false, error: '인증번호가 일치하지 않습니다.' }
  }

  // 코드가 만료되었는지 확인
  if (record.expiresAt < new Date()) {
    return { success: false, error: '인증번호가 만료되었습니다.' }
  }

  // 인증 코드 사용 후 삭제 (일회용)
  await PasswordResetCode.deleteOne({ _id: record._id })

  return { success: true }
}

// 이메일로 사용자 조회 후 새 비밀번호로 변경
export async function resetUserPassword(email: string, newPassword: string) {
  await connectToDatabase()

  // 이메일로 사용자 조회
  const user = await User.findOne({ email })
  if (!user) {
    return { success: false, error: '사용자를 찾을 수 없습니다.' }
  }

  // 새 비밀번호를 해시하여 저장
  user.password = await bcrypt.hash(newPassword, 10)
  await user.save()

  return { success: true, message: '비밀번호가 성공적으로 변경되었습니다.' }
}
