'use client'

import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { PencilLine } from 'lucide-react'
import { Button } from '../ui/button'

interface UserProfileProps {
  session: {
    user: {
      name?: string | null
      email?: string | null
      image?: string | null
      id?: string
      role?: string
      visitCount?: number
      verificationToken?: string | null
    }
  }
}

export default function UserProfile({ session }: UserProfileProps) {
  const user = session.user

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='flex items-center gap-2 px-2 py-1.5 text-sm hover:bg-accent rounded cursor-pointer'>
          <PencilLine className='h-4 w-4 text-zinc-500' />
          프로필
        </div>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] pt-10 pb-9'>
        <DialogHeader>
          <DialogTitle className='text-center text-2xl'>
            {user.name}
          </DialogTitle>
          <DialogDescription className='text-center'>
            안녕하세요!. 개발에 관심있는 1인입니다.
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-4'>
          <div className='flex items-center justify-center gap-2 mb-4'>
            <Image
              src={user.image || '/face/default.jpg'}
              width={100}
              height={100}
              alt={user.name || '사용자 이름'}
              className='rounded-full overflow-hidden object-cover'
            />
          </div>
          <div className='text-base flex items-center justify-center mb-2 font-poppins font-light'>
            {user.email}
          </div>
        </div>
        <DialogFooter className='sm:justify-center'>
          <Button variant='outline' className='text-center'>
            수정하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
