import Link from 'next/link'
import Image from 'next/image'
import { GiWolfHowl } from 'react-icons/gi'
import { Button } from '../ui/button'
import { formatDateWeek } from '@/lib/utils'
import { auth } from '@/auth'
import {
  BadgeCheck,
  SmilePlus,
  FolderLock,
  NotebookPen,
  Bell,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu'
import { SignOut } from '@/lib/actions/user.actions'
import UserProfile from '../user/user-profile'

export default async function HeaderRight() {
  const session = await auth()
  const { date, day } = formatDateWeek()

  return (
    <div className='absolute right-4'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {session ? (
            <div className='border rounded-full p-1 bg-background cursor-pointer'>
              <Image
                src={session.user?.image || '/face/default.jpg'}
                alt={session.user?.name || 'profile'}
                width={34}
                height={34}
                className='rounded-full w-8 h-8 object-cover'
              />
            </div>
          ) : (
            <div className='circle'>
              <GiWolfHowl size='20' />
            </div>
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className='w-56 mr-0 mt-1 bg-background'
          align='end'
          forceMount
        >
          {session ? (
            <>
              <DropdownMenuLabel className='font-normal'>
                <div className='flex items-center'>
                  <div className='w-8 h-8 flex items-center justify-center text-[10px] bg-accent rounded-full mr-1.5 mt-1 font-popins font-bold text-zinc-500'>
                    {session.user.visitCount ?? 0}
                  </div>
                  <div className='flex flex-col space-y-1'>
                    <p className='text-sm my-1 font-bold leading-none'>
                      {session.user?.name}
                    </p>
                    <p className='text-[10px] leading-none text-black700'>
                      {session.user?.email}
                    </p>
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
                <UserProfile session={session} />
              </DropdownMenuItem>

              {session.user.role === 'Admin' && (
                <>
                  <DropdownMenuSeparator />
                  <Link href='/admin/posts/create'>
                    <DropdownMenuItem>
                      <NotebookPen className='h-4 w-4' />
                      글쓰기
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <span className='flex items-center gap-2'>
                        <FolderLock className='h-4 w-4' /> 관리자
                      </span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem asChild>
                          <Link
                            href='/admin/contact'
                            className='cursor-pointer'
                          >
                            문의사항 관리
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href='/admin/users' className='cursor-pointer'>
                            회원 관리
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href='/admin/posts' className='cursor-pointer'>
                            글 관리
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href='/admin/comments'
                            className='cursor-pointer'
                          >
                            댓글 관리
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className='m-0 p-1'>
                <form action={SignOut}>
                  <Button className='w-full cursor-pointer'>로그아웃</Button>
                </form>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuLabel className='font-normal'>
                <div className='flex items-center'>
                  <div className='w-8 h-8 flex items-center justify-center text-[10px] bg-accent rounded-full mr-1.5 mt-1 font-popins font-bold text-zinc-500'>
                    HI!
                  </div>
                  <div className='flex flex-col space-y-1'>
                    <p className='text-sm my-1 font-bold leading-none'>
                      {date}
                    </p>
                    <p className='text-[10px] leading-none'>{day}</p>
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
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
