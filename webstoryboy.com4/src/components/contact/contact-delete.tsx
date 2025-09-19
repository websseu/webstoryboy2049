'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { deleteContact } from '@/lib/actions/contact.action'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog'

interface ContactDeleteProps {
  contactId: string
}

export default function ContactDelete({ contactId }: ContactDeleteProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleDelete = async () => {
    const res = await deleteContact(contactId)
    if (res.success) {
      setIsOpen(false)
      router.refresh()
      toast.success('문의가 성공적으로 삭제되었습니다.')
    } else {
      toast.error(res.error || '삭제에 실패했습니다.')
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button size='sm' variant='destructive'>
          삭제
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className='font-nanum'>
        <AlertDialogHeader>
          <AlertDialogTitle>정말 이 문의를 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            한 번 삭제하면 복구할 수 없습니다. 계속 진행하시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>삭제</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
