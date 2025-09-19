import Link from 'next/link'
import { GiWolfHowl } from 'react-icons/gi'
import { BadgeCheck, SmilePlus, Bell } from 'lucide-react'
import { formatDateWeek } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

export default async function HeaderRight() {
  const { date, day } = formatDateWeek()

  return (
    <div className='absolute right-4'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='circle'>
            <GiWolfHowl size='20' />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className='w-56 mr-0 mt-1 bg-background'
          align='end'
          forceMount
        >
          <DropdownMenuLabel className='font-normal'>
            <div className='flex items-center'>
              <div className='w-8 h-8 flex items-center justify-center text-[10px] bg-accent rounded-full mr-1.5 mt-1 font-popins font-bold'>
                HI!
              </div>
              <div className='flex flex-col space-y-1'>
                <p className='text-sm my-1 font-bold leading-none'>{date}</p>
                <p className='text-[10px] leading-none text-black700'>{day}</p>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link
              href={'/notice'}
              className='w-full flex gap-2 items-center cursor-pointer'
            >
              <BadgeCheck className='h-4 w-4' />
              공지사항
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href={'/contact'}
              className='w-full flex gap-2 items-center cursor-pointer'
            >
              <Bell className='h-4 w-4' />
              문의하기
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link
              href={'/sign-up'}
              className='w-full flex gap-2 items-center cursor-pointer'
            >
              <SmilePlus className='h-4 w-4' />
              회원가입
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='p-0 m-1 mt-2'>
            <Link
              href='/sign-in'
              className='bg-black w-full text-white text-center p-2 rounded'
            >
              로그인
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
