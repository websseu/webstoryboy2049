import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/db'
import User from '@/lib/db/model/user.model'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')

  // 토큰이 없으면 잘못된 요청 처리
  if (!token) {
    return NextResponse.json(
      { success: false, message: '잘못된 요청입니다.' },
      { status: 400 }
    )
  }

  // 데이터베이스 연결
  await connectToDatabase()

  // DB에서 해당 토큰을 가진 사용자를 조회
  const user = await User.findOne({ verificationToken: token })

  // 사용자 없으면 유효하지 않은 토큰 처리
  if (!user) {
    return NextResponse.json(
      { success: false, message: '유효하지 않은 인증 토큰입니다.' },
      { status: 400 }
    )
  }

  // 토큰이 유효한 경우 이메일 인증 상태 업데이트
  user.emailVerified = true
  user.verificationToken = null

  // 변경사항 저장
  await user.save()

  // 성공 응답 반환
  return NextResponse.json({
    success: true,
    message: '이메일 인증이 완료되었습니다.',
  })
}
