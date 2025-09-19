'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import FindEmailForm from './find-email'

export default function FindEmailDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type='button' className='uline'>
          이메일 찾기
        </button>
      </DialogTrigger>
      <DialogContent className='max-w-md font-nanum'>
        <DialogHeader>
          <DialogTitle className='font-bold text-lg'>이메일 찾기</DialogTitle>
          <DialogDescription>가입 시 사용한 이메일이 존재하는지 확인합니다.</DialogDescription>
        </DialogHeader>
        <FindEmailForm />
      </DialogContent>
    </Dialog>
  )
}
