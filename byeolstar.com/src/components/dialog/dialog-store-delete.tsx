import React, { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { IStore } from '@/lib/db/models/store.model'
import { deleteStore } from '@/lib/actions/store.action'
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

interface DialogStoreDeleteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  store: IStore | null
  onSuccess: (deletedPost: IStore) => void
}

export default function DialogStoreDelete({
  open,
  onOpenChange,
  store,
  onSuccess,
}: DialogStoreDeleteProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleCancel = () => {
    if (!isDeleting) {
      onOpenChange(false)
    }
  }

  const handleConfirm = async () => {
    if (!store || !store._id) {
      toast.error('삭제할 게시글 정보가 없습니다.')
      return
    }

    setIsDeleting(true)

    try {
      const result = await deleteStore(store._id.toString())

      if (result.success) {
        toast.success(result.message || '게시글이 성공적으로 삭제되었습니다.')

        // 성공 콜백 호출
        onSuccess(store)

        // 다이얼로그 닫기
        onOpenChange(false)
      } else {
        toast.error(result.error || '게시글 삭제 중 오류가 발생했습니다.')
      }
    } catch (error) {
      console.error('게시글 삭제 중 오류:', error)
      toast.error('서버 요청 중 오류가 발생했습니다.')
    } finally {
      setIsDeleting(false)
    }
  }

  if (!store) return null

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>스토어 삭제</AlertDialogTitle>
          <AlertDialogDescription>
            &ldquo;{store.name}&rdquo; 스토어를 삭제하시겠습니까?
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
