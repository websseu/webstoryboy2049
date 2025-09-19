'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dog,
  BadgeCheck,
  BellDot,
  UserPlus,
  LogIn,
  Calendar,
  Crown,
  Cat,
} from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Separator } from '../ui/separator'
import DialogNotice from '../dialog/dialog-notice'
import DialogContact from '../dialog/dialog-contact'
import DialogSignup from '../dialog/dialog-signup'
import DialogSignin from '../dialog/dialog-signin'
import { Badge } from '../ui/badge'
import { getInitials } from '@/lib/utils'
import DialogLogout from '../dialog/dialog-logout'
import DialogFindPass from '../dialog/dialog-find-pass'
import DialogFindEmail from '../dialog/dialog-find-email'

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

interface HeaderRightMenuProps {
  session: SessionData | null
}

export default function HeaderRightMenu({ session }: HeaderRightMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isNoticeOpen, setIsNoticeOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  const [isSigninOpen, setIsSigninOpen] = useState(false)
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)
  const [isFindEmailOpen, setIsFindEmailOpen] = useState(false)
  const [isFindPassOpen, setIsFindPassOpen] = useState(false)

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='h-10 w-10 border rounded-full bg-starbucks-green hover:bg-starbucks-green-light cursor-pointer transition-all duration-200'
          >
            <Dog className='text-white' />
            <span className='sr-only'>메뉴 열기</span>
          </Button>
        </SheetTrigger>

        <SheetContent
          side='right'
          className='w-80 bg-starbucks-green-bg border-l border-starbucks-green-pale'
        >
          <SheetHeader className='border-b border-starbucks-green-pale bg-white'>
            <SheetTitle className='font-gmarket text-xl font-bold text-starbucks-green mt-1'>
              쓰벅 99
            </SheetTitle>
          </SheetHeader>

          <div className='p-4 border-b border-starbucks-green-pale bg-white mt-[-16px]'>
            {session?.user ? (
              <div className='flex items-center gap-4'>
                <Avatar className='h-14 w-14'>
                  <AvatarImage
                    src={session.user.image || ''}
                    alt={session.user.name || ''}
                  />
                  <AvatarFallback className='bg-blue-100 text-blue-700 font-bold'>
                    {session.user.name ? getInitials(session.user.name) : 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center gap-2'>
                    <h3 className='font-gmarket font-bold text-gray-900 truncate'>
                      {session.user.name || '사용자'}
                    </h3>
                    {session.user.role === 'admin' && (
                      <Badge
                        variant='secondary'
                        className='bg-yellow-200 text-yellow-800 text-xs border-yellow-300'
                      >
                        <Crown className='w-3 h-3' />
                        관리자
                      </Badge>
                    )}
                  </div>
                  <p className='font-nanum text-sm text-gray-600 truncate mb-1'>
                    {session.user.email}
                  </p>
                  <div className='flex items-center gap-1 mt-1'>
                    <Calendar className='w-3 h-3 text-gray-400' />
                    <span className='font-nanum text-xs text-muted-foreground'>
                      방문 {session.user.visitCount || 0}회
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className='text-center py-2'>
                <div className='flex justify-center mb-3'>
                  <div className='w-14 h-14 bg-starbucks-green rounded-full flex items-center justify-center transition-shadow duration-200'>
                    <Dog className='w-7 h-7 text-white' />
                  </div>
                </div>
                <h3 className='font-gmarket font-bold text-starbucks-green text-lg'>
                  쓰벅 99에 오신 것을 환영합니다!
                </h3>
                <p className='font-nanum text-sm text-starbucks-green-lighter mb-3 leading-relaxed'>
                  로그인하고 더 많은 서비스를 이용해보세요
                </p>
                <div className='flex items-center justify-center gap-2 flex-wrap'>
                  <div className='flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full'>
                    <span className='font-nanum font-bold text-xs text-blue-700'>
                      스타벅스 정보
                    </span>
                  </div>
                  <div className='flex items-center gap-1 bg-starbucks-green-pale px-3 py-1 rounded-full'>
                    <span className='font-nanum font-bold text-xs text-starbucks-green'>
                      커뮤니티
                    </span>
                  </div>
                  <div className='flex items-center gap-1 bg-purple-50 px-3 py-1 rounded-full'>
                    <span className='font-nanum font-bold text-xs text-purple-700'>
                      기록 관리
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <nav className='px-4'>
            {/* 공지사항 */}
            <Button
              variant='ghost'
              className='flex items-center justify-start gap-2 py-6 rounded font-nanum bg-accent mb-2 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 w-full text-left'
              onClick={() => {
                setIsNoticeOpen(true)
                setIsOpen(false)
              }}
            >
              <BadgeCheck className='w-5 h-5' />
              <span className='text-sm font-bold'>공지사항</span>
            </Button>

            {/* 문의하기 */}
            <Button
              variant='ghost'
              className='flex items-center justify-start gap-2 py-6 rounded font-nanum bg-accent text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 w-full text-left'
              onClick={() => {
                setIsContactOpen(true)
                setIsOpen(false)
              }}
            >
              <BellDot className='w-5 h-5' />
              <span className='text-sm font-bold'>문의하기</span>
            </Button>

            <Separator className='mt-4 mb-4' />

            {/* 이메일 찾기 */}
            <Button
              variant='ghost'
              className='flex items-center justify-start gap-2 mb-2 rounded font-nanum bg-accent text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 w-full text-left'
              onClick={() => {
                setIsFindEmailOpen(true)
                setIsOpen(false)
              }}
            >
              <Cat className='w-5 h-5' />
              <span className='text-sm font-bold'>이메일 찾기</span>
            </Button>

            {/* 비밀번호 찾기 */}
            <Button
              variant='ghost'
              className='flex items-center justify-start gap-2 rounded font-nanum bg-accent text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 w-full text-left'
              onClick={() => {
                setIsFindPassOpen(true)
                setIsOpen(false)
              }}
            >
              <Dog className='w-5 h-5' />
              <span className='text-sm font-bold'>비밀번호 찾기</span>
            </Button>

            {!session ? (
              <>
                <Separator className='mt-4 mb-4' />
                {/* 로그인 */}
                <Button
                  className='flex items-center justify-center gap-2 rounded font-nanum p-3 transition-colors bg-green-700 text-white hover:bg-green-600 w-full mb-2'
                  onClick={() => {
                    setIsSigninOpen(true)
                    setIsOpen(false)
                  }}
                >
                  <LogIn className='w-4 h-4' />
                  <span className='text-sm font-medium'>로그인</span>
                </Button>

                {/* 회원가입 */}
                <Button
                  variant='outline'
                  className='flex items-center justify-center gap-2 rounded font-nanum p-2 w-full border-green-700 hover:border-green-200 text-green-700 hover:bg-green-50 bg-transparent'
                  onClick={() => {
                    setIsSignupOpen(true)
                    setIsOpen(false)
                  }}
                >
                  <UserPlus className='w-4 h-4' />
                  <span className='text-sm font-medium'>회원가입</span>
                </Button>
              </>
            ) : (
              <>
                <Separator className='mt-4 mb-4' />

                {/* 마이페이지 */}
                <Button
                  variant='ghost'
                  className='flex items-center justify-start gap-2 mb-2 rounded font-nanum bg-accent text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 w-full text-left'
                  onClick={() => {
                    window.location.href = '/mypage'
                    setIsOpen(false)
                  }}
                >
                  <UserPlus className='w-5 h-5' />
                  <span className='text-sm font-bold'>마이페이지</span>
                </Button>

                {/* 관리자페이지 */}
                {session.user?.role === 'admin' && (
                  <Button
                    variant='ghost'
                    className='flex items-center justify-start gap-2 mb-2 rounded font-nanum bg-accent text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 w-full text-left'
                    onClick={() => {
                      window.location.href = '/admin'
                      setIsOpen(false)
                    }}
                  >
                    <UserPlus className='w-5 h-5' />
                    <span className='text-sm font-bold'>관리자페이지</span>
                  </Button>
                )}

                <Separator className='mt-4 mb-4' />

                {/* 로그아웃 */}
                <Button
                  variant='outline'
                  className='flex items-center justify-center gap-2 rounded font-nanum p-3 w-full border-blue-700 hover:border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent'
                  onClick={() => {
                    setIsLogoutOpen(true)
                    setIsOpen(false)
                  }}
                >
                  <LogIn className='w-4 h-4' />
                  <span className='text-sm font-medium'>로그아웃</span>
                </Button>
              </>
            )}
          </nav>

          <div className='absolute bottom-4 left-4 right-4'>
            <div className='rounded-sm bg-starbucks-green-pale border border-starbucks-green/20 p-4 text-center'>
              <p className='font-nanum text-sm text-starbucks-green font-medium'>
                스타벅스와 함께하는 특별한 커피 타임! ☕
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* 공지사항 Dialog */}
      <DialogNotice open={isNoticeOpen} onOpenChange={setIsNoticeOpen} />

      {/* 문의하기 Dialog */}
      <DialogContact open={isContactOpen} onOpenChange={setIsContactOpen} />

      {/* 회원가입 Dialog */}
      <DialogSignup open={isSignupOpen} onOpenChange={setIsSignupOpen} />

      {/* 로그인 Dialog */}
      <DialogSignin open={isSigninOpen} onOpenChange={setIsSigninOpen} />

      {/* 로그아웃 Dialog */}
      <DialogLogout open={isLogoutOpen} onOpenChange={setIsLogoutOpen} />

      {/* 비밀번호 찾기 Dialog */}
      <DialogFindPass open={isFindPassOpen} onOpenChange={setIsFindPassOpen} />

      {/* 이메일 찾기 Dialog */}
      <DialogFindEmail
        open={isFindEmailOpen}
        onOpenChange={setIsFindEmailOpen}
      />
    </div>
  )
}
