'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  User,
  Mail,
  Calendar,
  MapPin,
  Edit3,
  Save,
  X,
  Coffee,
  Star,
  Shield,
  Clock,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function ProfilePage() {
  const { data: session, update } = useSession()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: session?.user?.name || '',
    username: session?.user?.username || '',
    email: session?.user?.email || '',
  })

  if (!session?.user) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <Card className='w-full max-w-md'>
          <CardHeader className='text-center'>
            <CardTitle className='text-xl font-gmarket text-green-700'>
              로그인이 필요합니다
            </CardTitle>
            <CardDescription>
              프로필을 확인하려면 먼저 로그인해주세요.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Button asChild className='w-full bg-green-700 hover:bg-green-800'>
              <Link href='/auth/signin'>로그인하기</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const handleEdit = () => {
    setIsEditing(true)
    setFormData({
      name: session.user.name || '',
      username: session.user.username || '',
      email: session.user.email || '',
    })
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleSave = async () => {
    try {
      // 여기에 실제 업데이트 로직을 추가할 수 있습니다
      await update({
        ...session,
        user: {
          ...session.user,
          name: formData.name,
          username: formData.username,
        },
      })

      setIsEditing(false)
      toast.success('프로필이 성공적으로 업데이트되었습니다.')
    } catch (error) {
      console.log(error)
      toast.error('프로필 업데이트에 실패했습니다.')
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const getRoleBadge = (role?: string) => {
    if (role === 'admin') {
      return (
        <Badge className='text-green-700 border border-green-600 bg-transparent hover:bg-green-100'>
          <Shield className='w-3 h-3' />
          관리자
        </Badge>
      )
    }
    return (
      <Badge className='bg-green-100 text-green-800  hover:bg-green-100'>
        <User className='w-3 h-3' />
        일반회원
      </Badge>
    )
  }

  const getEmailVerifiedBadge = () => {
    // emailVerified 속성이 없으므로 기본적으로 미인증으로 표시
    return (
      <Badge variant='outline' className='text-gray-600'>
        <Clock className='w-3 h-3' />
        미인증
      </Badge>
    )
  }

  return (
    <div className='py-8'>
      {/* 헤더 */}
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-gmarket font-bold text-green-700 mb-2'>
          프로필 관리
        </h1>
        <p className='text-muted-foreground text-sm font-nanum'>
          내 정보를 확인하고 관리할 수 있습니다
        </p>
      </div>

      <div className='grid gap-4 md:grid-cols-3'>
        {/* 프로필 카드 */}
        <Card className='md:col-span-1'>
          <CardHeader className='text-center'>
            <div className='flex justify-center mb-4'>
              {session.user.image ? (
                <div className='w-24 h-24 rounded-full overflow-hidden border-4 border-gray-50'>
                  <Image
                    src={session.user.image}
                    alt={session.user.name || '프로필 이미지'}
                    width={96}
                    height={96}
                    className='w-full h-full object-cover'
                  />
                </div>
              ) : (
                <div className='w-24 h-24 bg-green-100 rounded-full flex items-center justify-center border-4 border-green-200'>
                  <User className='w-12 h-12 text-green-600' />
                </div>
              )}
            </div>
            <CardTitle className='font-gmarket text-xl text-gray-900'>
              {session.user.name || '사용자'}
            </CardTitle>
            <CardDescription className='font-nanum'>
              {session.user.email}
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='flex justify-center gap-2'>
              {getRoleBadge(session.user.role)}
              {getEmailVerifiedBadge()}
            </div>

            <Separator />

            <div className='space-y-3 text-sm'>
              <div className='flex items-center gap-2 text-gray-600'>
                <Coffee className='w-4 h-4' />
                <span className='font-nanum'>
                  방문 횟수: {session.user.visitCount || 0}회
                </span>
              </div>
              <div className='flex items-center gap-2 text-gray-600'>
                <Star className='w-4 h-4' />
                <span className='font-nanum'>
                  가입일: {new Date().toLocaleDateString('ko-KR')}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 정보 편집 카드 */}
        <Card className='md:col-span-2'>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <div>
                <CardTitle className='font-gmarket text-xl text-gray-900'>
                  기본 정보
                </CardTitle>
                <CardDescription className='font-nanum'>
                  개인정보를 수정할 수 있습니다
                </CardDescription>
              </div>
              {!isEditing ? (
                <Button onClick={handleEdit} variant='outline' size='sm'>
                  <Edit3 className='w-4 h-4' />
                  수정
                </Button>
              ) : (
                <div className='flex gap-2'>
                  <Button
                    onClick={handleSave}
                    size='sm'
                    className='bg-green-700 hover:bg-green-800'
                  >
                    <Save className='w-4 h-4' />
                    저장
                  </Button>
                  <Button onClick={handleCancel} variant='outline' size='sm'>
                    <X className='w-4 h-4' />
                    취소
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='grid gap-4 md:grid-cols-2'>
              <div className='space-y-2'>
                <Label
                  htmlFor='name'
                  className='font-nanum text-sm font-medium'
                >
                  이름
                </Label>
                {isEditing ? (
                  <Input
                    id='name'
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder='이름을 입력하세요'
                    className='font-nanum h-10'
                  />
                ) : (
                  <div className='p-3 py-2 bg-gray-50 rounded border'>
                    <span className='font-nanum text-gray-900 text-sm'>
                      {session.user.name || '미설정'}
                    </span>
                  </div>
                )}
              </div>

              <div className='space-y-2'>
                <Label
                  htmlFor='username'
                  className='font-nanum text-sm font-medium'
                >
                  사용자명
                </Label>
                {isEditing ? (
                  <Input
                    id='username'
                    value={formData.username}
                    onChange={(e) =>
                      handleInputChange('username', e.target.value)
                    }
                    placeholder='사용자명을 입력하세요'
                    className='font-nanum'
                  />
                ) : (
                  <div className='p-3 py-2 bg-gray-50 rounded border'>
                    <span className='font-nanum text-gray-900 text-sm'>
                      {session.user.username || '미설정'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email' className='font-nanum text-sm font-medium'>
                이메일
              </Label>
              <div className='p-3 py-2 bg-gray-50 rounded border'>
                <div className='flex items-center gap-2'>
                  <Mail className='w-4 h-4 text-gray-500' />
                  <span className='font-nanum text-gray-900 text-sm'>
                    {session.user.email}
                  </span>
                </div>
              </div>
              <p className='text-xs text-gray-500 font-nanum'>
                이메일은 보안상 수정할 수 없습니다
              </p>
            </div>

            {session.user.username && (
              <div className='space-y-2'>
                <Label className='font-nanum text-sm font-medium'>
                  내 사이트
                </Label>
                <div className='p-3 bg-green-50 rounded-md border border-green-200'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <MapPin className='w-4 h-4 text-green-600' />
                      <span className='font-nanum text-green-800'>
                        byeolstar.com/@{session.user.username}
                      </span>
                    </div>
                    <Button
                      asChild
                      size='sm'
                      variant='outline'
                      className='border-green-300 text-green-700 hover:bg-green-100'
                    >
                      <Link href={`/@${session.user.username}`}>방문하기</Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* 추가 기능 카드들 */}
      <div className='grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3'>
        <Card className='hover:shadow-md transition-shadow cursor-pointer'>
          <CardHeader className='pb-3'>
            <CardTitle className='font-gmarket text-lg flex items-center gap-2'>
              <Coffee className='w-5 h-5 text-green-600' />
              방문 기록
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-gray-600 font-nanum mb-3'>
              나의 방문 기록을 확인해보세요
            </p>
            <Button variant='outline' size='sm' className='w-full'>
              기록 보기
            </Button>
          </CardContent>
        </Card>

        <Card className='hover:shadow-md transition-shadow cursor-pointer'>
          <CardHeader className='pb-3'>
            <CardTitle className='font-gmarket text-lg flex items-center gap-2'>
              <Star className='w-5 h-5 text-yellow-600' />
              즐겨찾기
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-gray-600 font-nanum mb-3'>
              저장한 장소들을 관리해보세요
            </p>
            <Button variant='outline' size='sm' className='w-full'>
              즐겨찾기 보기
            </Button>
          </CardContent>
        </Card>

        <Card className='hover:shadow-md transition-shadow cursor-pointer'>
          <CardHeader className='pb-3'>
            <CardTitle className='font-gmarket text-lg flex items-center gap-2'>
              <Calendar className='w-5 h-5 text-blue-600' />
              활동 내역
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-gray-600 font-nanum mb-3'>
              나의 활동 내역을 확인해보세요
            </p>
            <Button variant='outline' size='sm' className='w-full'>
              내역 보기
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
