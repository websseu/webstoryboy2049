'use client'

import { BadgeCheck } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface DialogNoticeProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function DialogNotice({ open, onOpenChange }: DialogNoticeProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[600px]'>
        <DialogHeader>
          <DialogTitle className='flex items-center justify-center gap-2 mb-1 mt-4'>
            <BadgeCheck className='h-5 w-5' />
            공지사항
          </DialogTitle>
          <DialogDescription className='text-center'>
            최신 공지사항을 여기서 확인하세요!
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-4 border-t py-4 mb-2'>
          <div className='border-b pb-4'>
            <div className='flex items-end mb-2'>
              <h3 className='font-semibold text-sm mr-2'>[중요] 시스템 점검 안내</h3>
              <span className='text-xs text-muted-foreground'>2025.05.04</span>
            </div>
            <p className='text-sm text-muted-foreground mb-2 leading-6'>
              2025년 5월 10일 오전 2시부터 4시까지 시스템 점검이 진행됩니다. 문의사항은 문의사항을
              클릭해주세요! 감사합니다.
            </p>
          </div>
          <div className='border-b pb-4'>
            <div className='flex items-end mb-2'>
              <h3 className='font-semibold text-sm mr-2'>[완전중요] 웹사이트 리뉴얼 완료</h3>
              <span className='text-xs text-muted-foreground'>2025.04.20</span>
            </div>

            <p className='text-sm text-muted-foreground mb-2 leading-6'>
              더 나은 사용자 경험을 위해 웹사이트가 새롭게 리뉴얼되었습니다. 불편한 부분이 있으면
              언제든지 문의주세요!
            </p>
          </div>
          <div className='border-b pb-4'>
            <div className='flex items-end mb-2'>
              <h3 className='font-semibold text-sm mr-2'>[덜중요] 새로운 메뉴 추가</h3>
              <span className='text-xs text-muted-foreground'>2025.04.20</span>
            </div>
            <p className='text-sm text-muted-foreground mb-2 leading-6'>
              더 나은 사용자 경험을 위해 웹사이트가 새롭게 리뉴얼되었습니다. 불편한 부분이 있으면
              언제든지 문의주세요!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
