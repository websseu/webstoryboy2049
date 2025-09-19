'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { GiWolfHowl } from 'react-icons/gi'
import { BadgeCheck, SmilePlus, Coffee, Cake, FishIcon } from 'lucide-react'
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
} from '../ui/dropdown-menu'
import { formatDateWeek } from '@/lib/utils'
import DialogNotice from '../dialog/dialog-notice'
import DialogContact from '../dialog/dialog-contact'

export default function HeaderRight() {
  const { date, day } = formatDateWeek()
  const [isNoticeOpen, setIsNoticeOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

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
              <BadgeCheck className='h-4 w-4' />
              공지사항
            </DropdownMenuItem>
            {/* 문의하기 */}
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault()
                setIsContactOpen(true)
              }}
            >
              <SmilePlus className='h-4 w-4' />
              문의하기
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Coffee className='h-4 w-4' />
              로그인
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Cake className='h-4 w-4' />
              회원가입
            </DropdownMenuItem>
          </DropdownMenuGroup>
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
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogNotice open={isNoticeOpen} onOpenChange={setIsNoticeOpen} />
      <DialogContact open={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>
  )
}
