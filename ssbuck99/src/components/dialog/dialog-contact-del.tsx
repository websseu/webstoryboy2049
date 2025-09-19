'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog'

interface DialogContactDelProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  email: string
  onDeleteConfirm: () => void
  isDeleting: boolean
}

export default function DialogContactDel({
  open,
  onOpenChange,
  email,
  onDeleteConfirm,
  isDeleting,
}: DialogContactDelProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='flex items-center gap-2 font-gmarket text-red-600'>
            문의사항 삭제
          </AlertDialogTitle>
          <AlertDialogDescription>
            &ldquo;{email}&rdquo;의 문의사항을 삭제하시겠습니까?
            <span className='text-red-600 font-medium block pt-1'>
              이 작업은 되돌릴 수 없습니다.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>취소</AlertDialogCancel>
          <AlertDialogAction
            onClick={onDeleteConfirm}
            disabled={isDeleting}
            className='bg-red-600 hover:bg-red-700'
          >
            {isDeleting ? '삭제 중...' : '삭제'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
