'use client'

import React from 'react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Contact } from '@/lib/type'
import { Angry, Mail, MessageSquare, CheckCircle, Calendar, Send } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../ui/dialog'

interface DialogContactDetailProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  contact: Contact | null
}

export default function DialogContactDetail({
  open,
  onOpenChange,
  contact,
}: DialogContactDetailProps) {
  if (!contact) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-2xl'>
        <DialogHeader className='border-b pb-4'>
          <DialogTitle className='flex items-center justify-center gap-1 text-xl font-black text-green-700'>
            <Angry className='h-5 w-5' />
            문의 사항
          </DialogTitle>
          <DialogDescription className='text-center text-sm'>
            문의 사항 상세 정보입니다.
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-4 text-sm max-h-[60vh] overflow-y-auto'>
          {/* 이메일 */}
          <div className='flex items-center gap-2'>
            <Mail className='h-4 w-4 text-blue-600 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>이메일:</span>
              <span className='ml-2 text-gray-900 break-words'>{contact.email}</span>
            </div>
          </div>
          <Separator />

          {/* 문의 내용 */}
          <div className='flex items-start gap-2'>
            <MessageSquare className='h-4 w-4 text-green-600 mt-0.5 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>문의 내용:</span>
              <div className='mt-2 p-3 bg-gray-50 rounded-lg'>
                <p className='whitespace-pre-wrap break-words leading-6 text-gray-900'>
                  {contact.message}
                </p>
              </div>
            </div>
          </div>
          <Separator />

          {/* 상태 */}
          <div className='flex items-center gap-2'>
            <CheckCircle className='h-4 w-4 text-orange-600 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>처리 상태:</span>
              <span className='ml-2'>{contact.status}</span>
            </div>
          </div>
          <Separator />

          {/* 접수일 / 최종 수정일 */}
          <div className='flex items-start gap-2'>
            <Calendar className='h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>접수일:</span>
              <span className='ml-2 text-gray-900'>
                {new Date(contact.createdAt).toLocaleDateString()}{' '}
                {new Date(contact.createdAt).toLocaleTimeString()}
              </span>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <Calendar className='h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>최근 수정:</span>
              <span className='ml-2 text-gray-900'>
                {new Date(contact.updatedAt).toLocaleDateString()}{' '}
                {new Date(contact.updatedAt).toLocaleTimeString()}
              </span>
            </div>
          </div>
        </div>

        <DialogFooter className='sm:justify-center border-t pt-4'>
          <Button
            onClick={() => onOpenChange(false)}
            className='w-full bg-green-700 hover:bg-green-800'
          >
            <Send className='mr-2 h-4 w-4' />
            확인 완료
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
