'use client'

import React, { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { IContact } from '@/lib/db/models/contact.model'
import { deleteContact } from '@/lib/actions/contact.action'
import { toast } from 'sonner'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '../ui/alert-dialog'

interface DialogContactDeleteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  contact: IContact | null
  onSuccess: (deletedContact: IContact) => void
}

export default function DialogContactDelete({
  open,
  onOpenChange,
  contact,
  onSuccess,
}: DialogContactDeleteProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleCancel = () => {
    if (!isDeleting) {
      onOpenChange(false)
    }
  }

  const handleConfirm = async () => {
    if (!contact || !contact._id) {
      toast.error('삭제할 문의사항 정보가 없습니다.')
      return
    }

    setIsDeleting(true)

    try {
      const result = await deleteContact(contact._id.toString())

      if (result.success) {
        toast.success(result.message || '문의사항이 성공적으로 삭제되었습니다.')

        // 성공 콜백 호출
        onSuccess(contact)

        // 다이얼로그 닫기
        onOpenChange(false)
      } else {
        toast.error(result.error || '문의사항 삭제 중 오류가 발생했습니다.')
      }
    } catch (error) {
      console.error('문의사항 삭제 중 오류:', error)
      toast.error('서버 요청 중 오류가 발생했습니다.')
    } finally {
      setIsDeleting(false)
    }
  }

  if (!contact) return null

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>문의사항 삭제</AlertDialogTitle>
          <AlertDialogDescription>
            &ldquo;{contact.email}&rdquo; 문의사항을 삭제하시겠습니까?
            <span className='text-destructive block pt-1'>
              이 작업은 되돌릴 수 없습니다.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel} disabled={isDeleting}>
            취소
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            disabled={isDeleting}
            className='bg-destructive text-white hover:bg-destructive/90'
          >
            {isDeleting ? (
              <>
                <Loader2 className='h-4 w-4 mr-2 animate-spin' />
                삭제 중...
              </>
            ) : (
              '삭제'
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
