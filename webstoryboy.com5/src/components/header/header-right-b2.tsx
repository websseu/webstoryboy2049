'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GiWolfHowl } from 'react-icons/gi'
import {
  BadgeCheck,
  FishIcon,
  Rabbit,
  MonitorPlayIcon,
  Projector,
  UserRoundSearch,
  Snail,
  Mail,
  Cake,
  Coffee,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import DialogNotice from '../dialog/dialog-notice'
import DialogContact from '../dialog/dialog-contact'
import DialogSignup from '../dialog/dialog-signup'
import DialogSignin from '../dialog/dialog-signin'
import DialogProfile from '../dialog/dialog-profile'

export default function HeaderRight() {
  const [isNoticeOpen, setIsNoticeOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  const [isSigninOpen, setIsSigninOpen] = useState(false)

  return (
    <div className='absolute right-2 sm:right-4'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Link href={'/'} className='circle'>
            <GiWolfHowl size='20' />
          </Link>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 mt-1' align='end'>
          <DropdownMenuLabel>
            <div className='flex items-center'>
              <div className='w-8 h-8 flex items-center justify-center text-[10px] bg-accent rounded-full mr-1.5 mt-1 font-poppins font-light'>
                HI!
              </div>
              <div className='flex flex-col font-nanum'>
                <p className='text-sm my-1 font-bold leading-none'>2025.05.04</p>
                <p className='text-[10px] leading-none text-muted-foreground'>화요일</p>
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
              <BadgeCheck className='h-4 w-4' />
              공지사항
            </DropdownMenuItem>
            <DialogNotice open={isNoticeOpen} onOpenChange={setIsNoticeOpen} />

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
            <DialogContact open={isContactOpen} onOpenChange={setIsContactOpen} />

            {/* 프로필 */}
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault()
                setIsProfileOpen(true)
              }}
            >
              <Rabbit className='h-4 w-4' />
              프로필
            </DropdownMenuItem>
            <DialogProfile open={isProfileOpen} onOpenChange={setIsProfileOpen} />
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
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
            <DialogSignin open={isSigninOpen} onOpenChange={setIsSigninOpen} />

            {/* 회원가입 */}
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault()
                setIsSigninOpen(true)
              }}
            >
              <Cake className='h-4 w-4' />
              회원가입
            </DropdownMenuItem>
            <DialogSignup open={isSignupOpen} onOpenChange={setIsSignupOpen} />

            <DropdownMenuItem>
              <UserRoundSearch className='h-4 w-4' />
              아이디 찾기
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Snail className='h-4 w-4' />
              비밀번호 찾기
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <FishIcon className='h-4 w-4' />
                관리자
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>글쓰기</DropdownMenuItem>
                  <DropdownMenuItem>문의관리</DropdownMenuItem>
                  <DropdownMenuItem>회원관리</DropdownMenuItem>
                  <DropdownMenuItem>글관리</DropdownMenuItem>
                  <DropdownMenuItem>댓글관리</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem>
              <MonitorPlayIcon className='h-4 w-4' />
              웹쓰 유튜브
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Projector className='h-4 w-4' />
              웹쓰 깃허브
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
