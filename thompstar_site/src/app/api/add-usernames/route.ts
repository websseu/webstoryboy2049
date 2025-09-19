import { NextRequest, NextResponse } from 'next/server'
import { addUsernameToExistingUsers } from '@/lib/actions/user.action'

export async function POST(request: NextRequest) {
  try {
    const result = await addUsernameToExistingUsers()

    if (result.success) {
      return NextResponse.json(result)
    } else {
      return NextResponse.json(result, { status: 500 })
    }
  } catch (error) {
    console.error('API 오류:', error)
    return NextResponse.json(
      { success: false, message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
