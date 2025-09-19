'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import {
  User,
  Mail,
  Crown,
  Shield,
  Ban,
  Calendar,
  Eye,
  CheckCircle,
  XCircle,
} from 'lucide-react'
import { Separator } from '../ui/separator'
import { getInitials } from '@/lib/utils'

interface UserType {
  _id: string
  name: string
  email: string
  role: 'user' | 'admin'
  image: string
  visitCount: number
  isActive: boolean
  emailVerified: boolean
  createdAt: string
  updatedAt: string
}

interface DialogUserDetailProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  user: UserType | null
}

export default function DialogUserDetail({
  open,
  onOpenChange,
  user,
}: DialogUserDetailProps) {
  if (!user) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-md'>
        <DialogHeader>
          <DialogTitle className='font-gmarket text-blue-700'>
            사용자 상세 정보
          </DialogTitle>
        </DialogHeader>
        <div className='space-y-2 text-sm max-h-[60vh] overflow-y-auto'>
          {/* 프로필 정보 */}
          <div className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg'>
            <Avatar className='h-12 w-12'>
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback className='bg-blue-100 text-blue-700 font-bold'>
                {getInitials(user.name || user.email)}
              </AvatarFallback>
            </Avatar>
            <div className='flex-1 min-w-0'>
              <h3 className='font-semibold text-gray-900 truncate'>
                {user.name || '이름 없음'}
              </h3>
              <p className='text-gray-600 truncate'>{user.email}</p>
            </div>
          </div>

          <Separator />

          {/* 기본 정보 */}
          <div className='flex items-start gap-2'>
            <User className='h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>이름:</span>
              <span className='ml-2 text-gray-900 break-words'>
                {user.name || '이름 없음'}
              </span>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <Mail className='h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>이메일:</span>
              <span className='ml-2 text-gray-900 break-words'>
                {user.email}
              </span>
            </div>
          </div>

          <Separator />

          {/* 권한 정보 */}
          <div className='flex items-start gap-2'>
            {user.role === 'admin' ? (
              <Crown className='h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0' />
            ) : (
              <User className='h-4 w-4 text-gray-600 mt-0.5 flex-shrink-0' />
            )}
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>역할:</span>
              <span className='ml-2'>
                <Badge
                  variant={user.role === 'admin' ? 'default' : 'secondary'}
                  className={`${
                    user.role === 'admin'
                      ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
                      : 'bg-gray-100 text-gray-800 border-gray-300'
                  }`}
                >
                  {user.role === 'admin' ? (
                    <>
                      <Crown className='w-3 h-3 mr-1' />
                      관리자
                    </>
                  ) : (
                    <>
                      <User className='w-3 h-3 mr-1' />
                      사용자
                    </>
                  )}
                </Badge>
              </span>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            {user.isActive ? (
              <Shield className='h-4 w-4 text-green-600 mt-0.5 flex-shrink-0' />
            ) : (
              <Ban className='h-4 w-4 text-red-600 mt-0.5 flex-shrink-0' />
            )}
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>상태:</span>
              <span className='ml-2'>
                <Badge
                  variant={user.isActive ? 'default' : 'destructive'}
                  className={`${
                    user.isActive
                      ? 'bg-green-100 text-green-800 border-green-300'
                      : 'bg-red-100 text-red-800 border-red-300'
                  }`}
                >
                  {user.isActive ? (
                    <>
                      <Shield className='w-3 h-3 mr-1' />
                      활성
                    </>
                  ) : (
                    <>
                      <Ban className='w-3 h-3 mr-1' />
                      비활성
                    </>
                  )}
                </Badge>
              </span>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            {user.emailVerified ? (
              <CheckCircle className='h-4 w-4 text-green-600 mt-0.5 flex-shrink-0' />
            ) : (
              <XCircle className='h-4 w-4 text-red-600 mt-0.5 flex-shrink-0' />
            )}
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>이메일 인증:</span>
              <span className='ml-2'>
                <Badge
                  variant={user.emailVerified ? 'default' : 'destructive'}
                  className={`${
                    user.emailVerified
                      ? 'bg-green-100 text-green-800 border-green-300'
                      : 'bg-red-100 text-red-800 border-red-300'
                  }`}
                >
                  {user.emailVerified ? (
                    <>
                      <CheckCircle className='w-3 h-3 mr-1' />
                      인증됨
                    </>
                  ) : (
                    <>
                      <XCircle className='w-3 h-3 mr-1' />
                      미인증
                    </>
                  )}
                </Badge>
              </span>
            </div>
          </div>

          <Separator />

          {/* 활동 정보 */}
          <div className='flex items-start gap-2'>
            <Eye className='h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>방문 횟수:</span>
              <span className='ml-2 text-gray-900 font-medium'>
                {user.visitCount}회
              </span>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <Calendar className='h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>가입일:</span>
              <span className='ml-2 text-gray-900'>
                {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <Calendar className='h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>최근 수정:</span>
              <span className='ml-2 text-gray-900'>
                {new Date(user.updatedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <DialogFooter className='sm:justify-center mt-1'>
          <Button
            size='lg'
            className='bg-blue-700'
            onClick={() => onOpenChange(false)}
          >
            확인
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
