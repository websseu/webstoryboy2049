import { notFound } from 'next/navigation'
import { connectToDatabase } from '@/lib/db'
import User from '@/lib/db/models/user.model'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, Mail, UserIcon, Eye } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

interface UserProfilePageProps {
  params: {
    username: string
  }
}

async function getUserByUsername(username: string) {
  try {
    await connectToDatabase()

    // @ 기호 제거 (URL에서 @username으로 접근할 수 있도록)
    const cleanUsername = username.startsWith('@')
      ? username.slice(1)
      : username

    const user = await User.findOne({
      username: cleanUsername,
      isActive: true,
    }).lean()

    if (!user) {
      return null
    }

    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    console.error('사용자 조회 오류:', error)
    return null
  }
}

export default async function UserProfilePage({
  params,
}: UserProfilePageProps) {
  const user = await getUserByUsername(params.username)

  if (!user) {
    notFound()
  }

  const joinDate = new Date(user.createdAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8'>
      <div className='container mx-auto px-4 max-w-4xl'>
        {/* 헤더 섹션 */}
        <div className='text-center mb-8'>
          <div className='relative inline-block'>
            <Avatar className='w-32 h-32 mx-auto mb-4 border-4 border-white shadow-lg'>
              <AvatarImage
                src={user.image || '/placeholder.svg'}
                alt={user.name}
              />
              <AvatarFallback className='text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white'>
                {user.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            {user.role === 'admin' && (
              <Badge className='absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white'>
                관리자
              </Badge>
            )}
          </div>

          <h1 className='text-4xl font-bold text-gray-800 mb-2'>{user.name}</h1>
          <p className='text-xl text-gray-600 mb-4'>@{user.username}</p>

          <div className='flex justify-center items-center gap-4 text-sm text-gray-500'>
            <div className='flex items-center gap-1'>
              <Eye className='w-4 h-4' />
              <span>방문 {user.visitCount}회</span>
            </div>
            <Separator orientation='vertical' className='h-4' />
            <div className='flex items-center gap-1'>
              <CalendarDays className='w-4 h-4' />
              <span>{joinDate} 가입</span>
            </div>
          </div>
        </div>

        {/* 프로필 카드 */}
        <div className='grid gap-6 md:grid-cols-2'>
          {/* 기본 정보 */}
          <Card className='shadow-lg'>
            <CardHeader>
              <h2 className='text-xl font-semibold flex items-center gap-2'>
                <UserIcon className='w-5 h-5' />
                기본 정보
              </h2>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex justify-between items-center'>
                <span className='text-gray-600'>이름</span>
                <span className='font-medium'>{user.name}</span>
              </div>
              <Separator />
              <div className='flex justify-between items-center'>
                <span className='text-gray-600'>사용자명</span>
                <span className='font-medium'>@{user.username}</span>
              </div>
              <Separator />
              <div className='flex justify-between items-center'>
                <span className='text-gray-600'>역할</span>
                <Badge
                  variant={user.role === 'admin' ? 'default' : 'secondary'}
                >
                  {user.role === 'admin' ? '관리자' : '사용자'}
                </Badge>
              </div>
              <Separator />
              <div className='flex justify-between items-center'>
                <span className='text-gray-600'>상태</span>
                <Badge variant={user.isActive ? 'default' : 'destructive'}>
                  {user.isActive ? '활성' : '비활성'}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* 활동 정보 */}
          <Card className='shadow-lg'>
            <CardHeader>
              <h2 className='text-xl font-semibold flex items-center gap-2'>
                <Eye className='w-5 h-5' />
                활동 정보
              </h2>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>
                  {user.visitCount}
                </div>
                <p className='text-gray-600'>총 방문 횟수</p>
              </div>
              <Separator />
              <div className='text-center'>
                <div className='text-lg font-semibold text-gray-800 mb-2'>
                  {joinDate}
                </div>
                <p className='text-gray-600'>가입일</p>
              </div>
              <Separator />
              <div className='text-center'>
                <Badge className='bg-green-100 text-green-800'>
                  {user.emailVerified ? '이메일 인증 완료' : '이메일 미인증'}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 연락처 정보 (관리자만 표시) */}
        {user.role === 'admin' && (
          <Card className='mt-6 shadow-lg'>
            <CardHeader>
              <h2 className='text-xl font-semibold flex items-center gap-2'>
                <Mail className='w-5 h-5' />
                연락처 정보
              </h2>
            </CardHeader>
            <CardContent>
              <div className='flex items-center gap-2'>
                <Mail className='w-4 h-4 text-gray-500' />
                <span className='text-gray-600'>이메일:</span>
                <span className='font-medium'>{user.email}</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 푸터 */}
        <div className='text-center mt-8 text-gray-500'>
          <p className='text-sm'>
            이 페이지는 {user.name}님의 공개 프로필입니다.
          </p>
        </div>
      </div>
    </div>
  )
}

// 메타데이터 생성
export async function generateMetadata({ params }: UserProfilePageProps) {
  const user = await getUserByUsername(params.username)

  if (!user) {
    return {
      title: '사용자를 찾을 수 없습니다',
      description: '요청하신 사용자 프로필을 찾을 수 없습니다.',
    }
  }

  return {
    title: `${user.name} (@${user.username}) - 프로필`,
    description: `${user.name}님의 프로필 페이지입니다. 가입일: ${new Date(
      user.createdAt
    ).toLocaleDateString('ko-KR')}`,
  }
}
