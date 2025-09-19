'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiWolfHowl } from 'react-icons/gi'
import {
  BadgeCheck,
  FishIcon,
  Mail,
  LogOut,
  Cake,
  Coffee,
  UserRoundSearch,
  Binoculars,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu'
import { formatDateWeek } from '@/lib/utils'
import DialogNotice from '../dialog/dialog-notice'
import DialogContact from '../dialog/dialog-contact'
import DialogLogout from '../dialog/dialog-logout'
import DialogSignup from '../dialog/dialog-signup'
import DialogSignin from '../dialog/dialog-signin'
import DialogEmail from '../dialog/dialog-email'
import DialogPw from '../dialog/dialog-pw'

interface User {
  name?: string | null
  email?: string | null
  image?: string | null
  id?: string
  role?: string
  visitCount?: number
}

interface SessionData {
  user?: User
  expires?: string
}

interface HeaderRightMenuProps {
  session: SessionData | null
}

export default function HeaderRightMenu({ session }: HeaderRightMenuProps) {
  const { date, day } = formatDateWeek()
  const [isNoticeOpen, setIsNoticeOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  const [isSigninOpen, setIsSigninOpen] = useState(false)
  const [isEmailOpen, setIsEmailOpen] = useState(false)
  const [isPwOpen, setIsPwOpen] = useState(false)

  return (
    <div className='absolute right-2 sm:right-4'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {session ? (
            <Link href={'/'} className='circle'>
              <Image
                src={session.user?.image || '/face/default.jpg'}
                alt={session.user?.name || 'profile'}
                width={34}
                height={34}
                className='rounded-full w-8 h-8 object-cover'
              />
            </Link>
          ) : (
            <Link href={'/'} className='circle'>
              <GiWolfHowl size='20' />
            </Link>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 mt-1' align='end'>
          {session ? (
            <>
              {/* 로그인 했을때 */}
              <DropdownMenuLabel>
                <div className='flex items-center'>
                  <div className='w-8 h-8 flex items-center justify-center text-[10px] bg-accent rounded-full mr-1.5 mt-1 font-poppins font-light'>
                    {session.user?.visitCount ?? 0}
                  </div>
                  <div className='flex flex-col font-nanum'>
                    <p className='text-sm my-1 font-bold leading-none'>{session.user?.name}</p>
                    <p className='text-[10px] leading-none text-muted-foreground'>
                      {session.user?.email}
                    </p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {/* 공지사항 */}
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault()
                    setIsNoticeOpen(true)
                  }}
                >
                  <BadgeCheck />
                  공지사항
                </DropdownMenuItem>

                {/* 문의하기 */}
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault()
                    setIsContactOpen(true)
                  }}
                >
                  <Mail className='h-4 w-4' />
                  문의하기
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <FishIcon className='h-4 w-4' />
                    관리자
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Link href='/admin/posts/create'>글쓰기</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href='/admin/contact'>문의관리</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href='/admin/users'>회원관리</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href='/admin/posts'>글관리</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href='/admin/comments'>댓글관리</Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />

                {/* 로그아웃 */}
                <DropdownMenuItem
                  onSelect={(event) => {
                    event.preventDefault()
                    setIsLogoutOpen(true)
                  }}
                >
                  <LogOut className='h-4 w-4' />
                  로그아웃
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </>
          ) : (
            <>
              {/* 로그인 안했을때 */}
              <DropdownMenuLabel>
                <div className='flex items-center'>
                  <div className='w-8 h-8 flex items-center justify-center text-[10px] bg-accent rounded-full mr-1.5 mt-1 font-poppins font-light'>
                    HI!
                  </div>
                  <div className='flex flex-col font-nanum'>
                    <p className='text-sm my-1 font-bold leading-none'>{date}</p>
                    <p className='text-[10px] leading-none text-muted-foreground'>{day}</p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {/* 공지사항 */}
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault()
                    setIsNoticeOpen(true)
                  }}
                >
                  <BadgeCheck />
                  공지사항
                </DropdownMenuItem>

                {/* 문의하기 */}
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault()
                    setIsContactOpen(true)
                  }}
                >
                  <Mail className='h-4 w-4' />
                  문의하기
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                {/* 회원가입 */}
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault()
                    setIsSignupOpen(true)
                  }}
                >
                  <Cake className='h-4 w-4' />
                  회원가입
                </DropdownMenuItem>

                {/* 로그인 */}
                <DropdownMenuItem
                  onSelect={(event) => {
                    event.preventDefault()
                    setIsSigninOpen(true)
                  }}
                >
                  <Coffee className='h-4 w-4' />
                  로그인
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {/* 이메일 찾기 */}
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault()
                    setIsEmailOpen(true)
                  }}
                >
                  <UserRoundSearch className='h-4 w-4' />
                  이메일 찾기
                </DropdownMenuItem>
                {/* 비밀번호 찾기 */}
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault()
                    setIsPwOpen(true)
                  }}
                >
                  <Binoculars className='h-4 w-4' />
                  비밀번호 찾기
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogNotice open={isNoticeOpen} onOpenChange={setIsNoticeOpen} />
      <DialogContact open={isContactOpen} onOpenChange={setIsContactOpen} />
      <DialogLogout open={isLogoutOpen} onOpenChange={setIsLogoutOpen} />
      <DialogSignup open={isSignupOpen} onOpenChange={setIsSignupOpen} />
      <DialogSignin open={isSigninOpen} onOpenChange={setIsSigninOpen} />
      <DialogEmail open={isEmailOpen} onOpenChange={setIsEmailOpen} />
      <DialogPw open={isPwOpen} onOpenChange={setIsPwOpen} />
    </div>
  )
}
