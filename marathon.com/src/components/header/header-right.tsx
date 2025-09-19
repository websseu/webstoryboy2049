'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'
import { APP_COPYRIGHT, APP_NAME } from '@/lib/constants'
import { authItems, loggedInItems, menuItems } from '@/lib/menu'
import {
  Beer,
  ChevronRight,
  Lock,
  Mail,
  Rabbit,
  Salad,
  Medal,
} from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'

import DialogNotice from '../dialog/dialog-notice'
import DialogContact from '../dialog/dialog-contact'
import DialogSignup from '../dialog/dialog-signup'
import DialogSignin from '../dialog/dialog-signin'
import DialogLogout from '../dialog/dialog-logout'
import DialogFindEmail from '../dialog/dialog-find-email'
import DialogFindPass from '../dialog/dialog-find-pass'

interface SessionData {
  user?: {
    name?: string | null
    username?: string
    email?: string | null
    image?: string | null
    id?: string
    role?: string
    visitCount?: number
  }
  expires?: string
}

interface HeaderRightProps {
  session: SessionData | null
}

export default function HeaderRight({ session }: HeaderRightProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isNoticeDialogOpen, setIsNoticeDialogOpen] = useState(false)
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
  const [isSignupDialogOpen, setIsSignupDialogOpen] = useState(false)
  const [isSigninDialogOpen, setIsSigninDialogOpen] = useState(false)
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false)
  const [isFindEmailDialogOpen, setIsFindEmailDialogOpen] = useState(false)
  const [isFindPassDialogOpen, setIsFindPassDialogOpen] = useState(false)

  const handleMenuClick = (href: string, type: string) => {
    if (type === 'dialog') {
      setIsOpen(false)
      if (href === '#notice') {
        setIsNoticeDialogOpen(true)
      } else if (href === '#contact') {
        setIsContactDialogOpen(true)
      } else if (href === '#login') {
        setIsSigninDialogOpen(true)
      } else if (href === '#signup') {
        setIsSignupDialogOpen(true)
      } else if (href === '#logout') {
        setIsLogoutDialogOpen(true)
      } else if (href === '#find-email') {
        setIsFindEmailDialogOpen(true)
      } else if (href === '#find-password') {
        setIsFindPassDialogOpen(true)
      }
    } else if (type === 'page') {
      if (href === '/records' && !session?.user) {
        setIsOpen(false)
        setIsSigninDialogOpen(true)
      } else if (href === '/admin' && session?.user?.role !== 'admin') {
        setIsOpen(false)
        alert('관리자만 접근할 수 있습니다.')
      } else {
        setIsOpen(false)
        router.push(href)
      }
    }
  }

  // 현재 표시할 인증 관련 메뉴 결정
  const currentAuthItems = session?.user ? loggedInItems : authItems

  // 관리자 메뉴 표시 여부 결정
  const showAdminItems = session?.user && session.user.role === 'admin'

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='group h-11 w-11 border bg-blue-700 hover:bg-white hover:border-blue-700 rounded-full hover:text-white'
          >
            <Medal className='text-white group-hover:text-blue-700' />
            <span className='sr-only'>메뉴 열기</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='right' className='w-80 gap-0'>
          <SheetHeader className='border-b'>
            <SheetTitle className='font-gmarket text-xl font-bold text-blue-700 mt-1 pb-4'>
              {APP_NAME}
            </SheetTitle>
            <SheetDescription className='sr-only'>
              메뉴 및 사용자 정보를 확인할 수 있습니다.
            </SheetDescription>
          </SheetHeader>

          {/* 사용자 정보 섹션 */}
          <div className='p-4 border-b bg-gray-100 mt-[-16px]'>
            <div className='text-center py-2'>
              {session?.user ? (
                <>
                  <div className='flex justify-center mb-3'>
                    {session.user.image ? (
                      <div className='w-12 h-12 rounded-full overflow-hidden'>
                        <Image
                          src={session.user.image}
                          alt={session.user.name || '프로필 이미지'}
                          width={50}
                          height={50}
                          className='w-full h-full object-cover'
                        />
                      </div>
                    ) : (
                      <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center'>
                        <Rabbit className='w-6 h-6 text-white' />
                      </div>
                    )}
                  </div>
                  <h3 className='font-gmarket font-bold text-lg text-gray-900'>
                    안녕하세요, {session.user.name || '사용자'}님!
                  </h3>
                  <p className='font-nanum text-sm text-gray-600 truncate mb-1'>
                    {session.user.email}
                  </p>
                  <p className='font-nanum text-xs text-blue-600 mt-1'>
                    방문 {session.user.visitCount || 0}회
                  </p>
                  {session.user.username && (
                    <Link
                      href={`/@${session.user.username}`}
                      className='font-nanum inline-block mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded-full hover:bg-blue-700 transition-colors'
                      onClick={() => setIsOpen(false)}
                    >
                      내 기록 사이트 보기
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <div className='flex justify-center mb-3'>
                    <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                      <Salad className='w-6 h-6 text-blue-600' />
                    </div>
                  </div>
                  <h3 className='font-gmarket font-bold text-lg text-gray-900'>
                    방가워요! 환영합니다!
                  </h3>
                  <p className='font-nanum text-sm text-gray-600 mb-2'>
                    로그인하고 더 많은 서비스를 이용해보세요
                  </p>
                  <div className='flex items-center justify-center gap-1'>
                    <div className='w-2 h-2 bg-blue-200 rounded-full'></div>
                    <span className='font-nanum text-xs text-blue-600'>
                      말아톤 정보
                    </span>
                    <div className='w-2 h-2 bg-green-200 rounded-full ml-2'></div>
                    <span className='font-nanum text-xs text-green-600'>
                      커뮤니티
                    </span>
                    <div className='w-2 h-2 bg-purple-200 rounded-full ml-2'></div>
                    <span className='font-nanum text-xs text-purple-600'>
                      기록 관리
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          <ScrollArea className='flex-1 h-[calc(100vh-200px)]'>
            {/* 메인 메뉴 */}
            <div className='py-2'>
              <nav className='space-y-1'>
                {menuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleMenuClick(item.href, item.type)}
                      className='w-full flex items-center justify-between px-4 py-3 text-left hover:bg-blue-50 transition-colors group cursor-pointer'
                    >
                      <div className='flex items-center gap-3'>
                        <Icon className='w-4 h-4 text-gray-600 group-hover:text-blue-600' />
                        <span className='font-nanum text-sm text-gray-900 group-hover:text-blue-600'>
                          {item.label}
                        </span>
                      </div>
                      <ChevronRight className='w-4 h-4 text-gray-400 group-hover:text-blue-600' />
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* 인증 메뉴 */}
            <div className='py-2 border-t border-b'>
              <nav className='space-y-1'>
                {currentAuthItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleMenuClick(item.href, item.type)}
                      className='w-full flex items-center justify-between px-4 py-3 text-left hover:bg-blue-50 transition-colors group cursor-pointer'
                    >
                      <div className='flex items-center gap-3'>
                        <Icon className='w-4 h-4 text-gray-600 group-hover:text-blue-600' />
                        <span className='font-nanum text-sm text-gray-900 group-hover:text-blue-600'>
                          {item.label}
                        </span>
                      </div>
                      <ChevronRight className='w-4 h-4 text-gray-400 group-hover:text-blue-600' />
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* 찾기 (로그인하지 않은 사용자만 표시) */}
            {!session?.user && (
              <div className='py-2 border-b'>
                <nav className='space-y-1'>
                  <button
                    onClick={() => handleMenuClick('#find-email', 'dialog')}
                    className='w-full flex items-center justify-between px-4 py-3 text-left hover:bg-blue-50 transition-colors group cursor-pointer'
                  >
                    <div className='flex items-center gap-3'>
                      <Mail className='w-4 h-4 text-gray-600 group-hover:text-blue-600' />
                      <span className='font-nanum text-sm text-gray-900 group-hover:text-blue-600'>
                        이메일 찾기
                      </span>
                    </div>
                    <ChevronRight className='w-4 h-4 text-gray-400 group-hover:text-blue-600' />
                  </button>
                  <button
                    onClick={() => handleMenuClick('#find-password', 'dialog')}
                    className='w-full flex items-center justify-between px-4 py-3 text-left hover:bg-blue-50 transition-colors group cursor-pointer'
                  >
                    <div className='flex items-center gap-3'>
                      <Lock className='w-4 h-4 text-gray-600 group-hover:text-blue-600' />
                      <span className='font-nanum text-sm text-gray-900 group-hover:text-blue-600'>
                        비밀번호 찾기
                      </span>
                    </div>
                    <ChevronRight className='w-4 h-4 text-gray-400 group-hover:text-blue-600' />
                  </button>
                </nav>
              </div>
            )}

            {/* 관리자 메뉴 (관리자만 표시) */}
            {showAdminItems && (
              <div className='border-b py-2'>
                <nav className='space-y-1'>
                  <button
                    onClick={() => handleMenuClick('/admin', 'page')}
                    className='w-full flex items-center justify-between px-4 py-3 text-left hover:bg-blue-50 transition-colors group cursor-pointer'
                  >
                    <div className='flex items-center gap-3'>
                      <Beer className='w-4 h-4 text-gray-600 group-hover:text-blue-600' />
                      <span className='font-nanum text-sm text-gray-900 group-hover:text-blue-600'>
                        관리자 페이지
                      </span>
                    </div>
                    <ChevronRight className='w-4 h-4 text-gray-400 group-hover:text-blue-600' />
                  </button>
                </nav>
              </div>
            )}
          </ScrollArea>

          {/* 앱 정보 */}
          <div className='absolute bottom-0 left-0 right-0'>
            <div className='text-center py-3 bg-gray-50'>
              <p className='font-nanum text-xs text-gray-500 mb-1'>
                {APP_NAME} v1.0.0
              </p>
              <p className='font-nanum text-xs text-gray-400'>
                {APP_COPYRIGHT}
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <DialogNotice
        open={isNoticeDialogOpen}
        onOpenChange={setIsNoticeDialogOpen}
      />

      <DialogContact
        open={isContactDialogOpen}
        onOpenChange={setIsContactDialogOpen}
      />

      <DialogSignup
        open={isSignupDialogOpen}
        onOpenChange={setIsSignupDialogOpen}
      />

      <DialogSignin
        open={isSigninDialogOpen}
        onOpenChange={setIsSigninDialogOpen}
      />

      <DialogLogout
        open={isLogoutDialogOpen}
        onOpenChange={setIsLogoutDialogOpen}
      />

      <DialogFindEmail
        open={isFindEmailDialogOpen}
        onOpenChange={setIsFindEmailDialogOpen}
      />

      <DialogFindPass
        open={isFindPassDialogOpen}
        onOpenChange={setIsFindPassDialogOpen}
      />
    </>
  )
}
