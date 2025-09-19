import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { connectToDatabase } from '@/lib/db'
import User from '@/lib/db/models/user.model'
import { generateUsername } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, message: '로그인이 필요합니다.' },
        { status: 401 }
      )
    }

    await connectToDatabase()
    const user = await User.findById(session.user.id)

    if (!user) {
      return NextResponse.json(
        { success: false, message: '사용자를 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    // 이미 username이 있는지 확인
    if (user.username) {
      return NextResponse.json({
        success: true,
        message: '이미 username이 있습니다.',
        username: user.username,
      })
    }

    // username 생성
    if (!user.name) {
      return NextResponse.json(
        { success: false, message: '사용자 이름이 없습니다.' },
        { status: 400 }
      )
    }

    let username = generateUsername(user.name)
    let usernameExists = await User.findOne({ username })
    let attempts = 0

    // username 중복이 없을 때까지 재생성 (최대 10번)
    while (usernameExists && attempts < 10) {
      username = generateUsername(user.name)
      usernameExists = await User.findOne({ username })
      attempts++
    }

    // username 저장
    user.username = username
    await user.save()

    return NextResponse.json({
      success: true,
      message: 'username이 성공적으로 추가되었습니다.',
      username: username,
    })
  } catch (error) {
    console.error('username 추가 오류:', error)
    return NextResponse.json(
      { success: false, message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
