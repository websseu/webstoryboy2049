import React, { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { IUser } from '@/lib/db/models/user.model'
import { deleteUser } from '@/lib/actions/user.action'
import { toast } from 'sonner'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

interface DialogUserDeleteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  user: IUser | null
  onSuccess: (deletedUser: IUser) => void
}

export default function DialogUserDelete({
  open,
  onOpenChange,
  user,
  onSuccess,
}: DialogUserDeleteProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleCancel = () => {
    if (!isDeleting) {
      onOpenChange(false)
    }
  }

  const handleConfirm = async () => {
    if (!user || !user._id) {
      toast.error('삭제할 회원 정보가 없습니다.')
      return
    }

    setIsDeleting(true)

    try {
      const result = await deleteUser(user._id.toString())

      if (result.success) {
        toast.success(result.message || '회원이 성공적으로 삭제되었습니다.')

        // 성공 콜백 호출
        onSuccess(user)

        // 다이얼로그 닫기
        onOpenChange(false)
      } else {
        toast.error(result.error || '회원 삭제 중 오류가 발생했습니다.')
      }
    } catch (error) {
      console.error('회원 삭제 중 오류:', error)
      toast.error('서버 요청 중 오류가 발생했습니다.')
    } finally {
      setIsDeleting(false)
    }
  }

  if (!user) return null

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>회원 삭제</AlertDialogTitle>
          <AlertDialogDescription>
            &ldquo;{user.name}&rdquo; 회원을 삭제하시겠습니까?
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
