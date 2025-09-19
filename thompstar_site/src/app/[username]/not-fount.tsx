import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { UserX, Home, Search } from 'lucide-react'

export default function UserNotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4'>
      <Card className='w-full max-w-md text-center shadow-lg'>
        <CardHeader>
          <div className='mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4'>
            <UserX className='w-8 h-8 text-gray-400' />
          </div>
          <CardTitle className='text-2xl font-bold text-gray-800'>
            사용자를 찾을 수 없습니다
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-gray-600'>
            요청하신 사용자 프로필이 존재하지 않거나 비활성화되었습니다.
          </p>
          <div className='flex flex-col sm:flex-row gap-2 justify-center'>
            <Button asChild variant='default'>
              <Link href='/' className='flex items-center gap-2'>
                <Home className='w-4 h-4' />
                홈으로 돌아가기
              </Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href='/users' className='flex items-center gap-2'>
                <Search className='w-4 h-4' />
                다른 사용자 찾기
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
