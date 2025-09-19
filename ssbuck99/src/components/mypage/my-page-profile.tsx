import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '../ui/button'

interface SessionData {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
    id?: string
    role?: string
    visitCount?: number
  }
  expires?: string
}

interface MyPageProfileProps {
  session: SessionData
}

export default function MyPageProfile({ session }: MyPageProfileProps) {
  return (
    <Card className='border-starbucks-green-pale bg-white'>
      <CardHeader>
        <CardTitle className='font-gmarket text-starbucks-green text-xl'>
          내 정보
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='font-nanum font-bold text-sm text-gray-700 mb-1 block'>
              이름
            </label>
            <p className='font-nanum text-sm text-gray-900 py-3 px-4 bg-gray-50 rounded'>
              {session.user?.name || '미설정'}
            </p>
          </div>
          <div>
            <label className='font-nanum font-bold text-sm text-gray-700 mb-1 block'>
              이메일
            </label>
            <p className='font-nanum text-sm text-gray-900 py-3 px-4 bg-gray-50 rounded'>
              {session.user?.email || '미설정'}
            </p>
          </div>
          <div>
            <label className='font-nanum font-bold text-sm text-gray-700 mb-1 block'>
              역할
            </label>
            <p className='font-nanum text-sm text-gray-900 py-3 px-4 bg-gray-50 rounded'>
              {session.user?.role === 'admin' ? '관리자' : '일반 사용자'}
            </p>
          </div>
          <div>
            <label className='font-nanum font-bold text-sm text-gray-700 mb-1 block'>
              방문 횟수
            </label>
            <p className='font-nanum text-sm text-gray-900 py-3 px-4 bg-gray-50 rounded'>
              {session.user?.visitCount || 0}회
            </p>
          </div>
        </div>
        <div className='flex gap-2 pt-4'>
          <Button className='bg-starbucks-green hover:bg-starbucks-green-light'>
            정보 수정
          </Button>
          <Button
            variant='outline'
            className='border-starbucks-green text-starbucks-green hover:bg-starbucks-green-pale'
          >
            비밀번호 변경
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
