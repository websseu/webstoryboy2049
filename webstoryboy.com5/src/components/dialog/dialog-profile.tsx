'use client'

import { Rabbit } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface DialogProfileProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function DialogProfile({ open, onOpenChange }: DialogProfileProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[600px]'>
        <DialogHeader>
          <DialogTitle className='flex items-center justify-center gap-2 mb-1 mt-4'>
            <Rabbit className='h-5 w-5' />
            프로필
          </DialogTitle>
          <DialogDescription className='text-center'>
            나의 프로필을 확인 할 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-4 border-t py-4 mb-2'></div>
      </DialogContent>
    </Dialog>
  )
}
