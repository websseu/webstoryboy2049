'use client'

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '../ui/button'
import { useState } from 'react'
import { SignOut } from '@/lib/actions/user.action'

interface DialogLogoutProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function DialogLogout({ open, onOpenChange }: DialogLogoutProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    try {
      setIsLoading(true)
      await SignOut()
      onOpenChange(false)
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error)
      setIsLoading(false)
    }
  }

  return (
    <>
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>정말로 로그아웃을 하겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>아쉽지만 그럼 다음에 만나요!😅</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant='outline' onClick={() => onOpenChange(false)}>
              취소
            </Button>
            <Button variant='destructive' onClick={handleLogout} disabled={isLoading}>
              {isLoading ? '로그아웃 중...' : '로그아웃'}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
