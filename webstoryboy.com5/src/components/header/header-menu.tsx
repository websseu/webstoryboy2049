'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GiWolfHowl } from 'react-icons/gi'
import { BadgeCheck, Mail, LogOut, Coffee, Cake } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import DialogNotice from '../dialog/dialog-notice'
import DialogContact from '../dialog/dialog-contact'
import { formatDateWeek } from '@/lib/utils'
import DialogLogout from '../dialog/dialog-logout'
import DialogSignin from '../dialog/dialog-signin'
import DialogSignup from '../dialog/dialog-signup'

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

interface HeaderRightClientProps {
  session: SessionData | null
}

export default function HeaderMenu({ session }: HeaderRightClientProps) {
  const { date, day } = formatDateWeek()
  const [isNoticeOpen, setIsNoticeOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)
  const [isSigninOpen, setIsSigninOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)

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
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault()
                    setIsNoticeOpen(true)
                  }}
                >
                  <BadgeCheck className='h-4 w-4' />
                  공지사항
                </DropdownMenuItem>
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
                <DropdownMenuItem
                  onSelect={(event) => {
                    event.preventDefault()
                    setIsLogoutOpen(true)
                  }}
                >
                  <LogOut className='h-4 w-4' />
                  로그아웃
                </DropdownMenuItem>

                <DialogNotice open={isNoticeOpen} onOpenChange={setIsNoticeOpen} />
                <DialogContact open={isContactOpen} onOpenChange={setIsContactOpen} />
                <DialogLogout open={isLogoutOpen} onOpenChange={setIsLogoutOpen} />
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
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault()
                    setIsNoticeOpen(true)
                  }}
                >
                  <BadgeCheck className='h-4 w-4' />
                  공지사항
                </DropdownMenuItem>
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

                <DialogSignup open={isSignupOpen} onOpenChange={setIsSignupOpen} />
                <DialogSignin open={isSigninOpen} onOpenChange={setIsSigninOpen} />
              </DropdownMenuGroup>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
