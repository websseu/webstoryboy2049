import React from 'react'
import Link from 'next/link'
import { GiWolfHowl } from 'react-icons/gi'
import {
  BadgeCheck,
  SmilePlus,
  Cake,
  Coffee,
  Shrimp,
  Rabbit,
  TvMinimalPlay,
  Projector,
  LogOut,
  UserRoundSearch,
  Snail,
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
} from '../ui/dropdown-menu'

export default function HeaderRight() {
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
                {/* 77 */}
                HI!
              </div>
              <div className='flex flex-col font-nanum'>
                <p className='text-sm my-1 font-bold leading-none'>
                  {/* webstoryboy */}
                  2025.05.04
                </p>
                <p className='text-[10px] leading-none text-muted-foreground'>
                  {/* webstoryboy@naver.com */}
                  화요일
                </p>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BadgeCheck className='h-4 w-4' />
              공지사항
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SmilePlus className='h-4 w-4' />
              문의하기
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Rabbit className='h-4 w-4' />
              프로필
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Coffee className='h-4 w-4' />
              로그인
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className='h-4 w-4' />
              로그아웃
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Cake className='h-4 w-4' />
              회원가입
            </DropdownMenuItem>
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
                <Shrimp className='h-4 w-4' />
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
              <TvMinimalPlay className='h-4 w-4' />
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
