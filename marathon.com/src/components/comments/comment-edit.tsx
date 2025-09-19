'use client'

import type React from 'react'

import { useState, useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { updateComment } from '@/lib/actions/comment.action'
import { toast } from 'sonner'

interface Comment {
  _id: string
  content: string
  userId: {
    _id: string
    name: string
    image: string
  }
}

interface CommentEditFormProps {
  comment: Comment
  onCancel: () => void
  onSuccess: () => void
}

export default function CommentEditForm({ comment, onCancel, onSuccess }: CommentEditFormProps) {
  const [content, setContent] = useState(comment.content)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!content.trim()) {
      toast.error('댓글 내용을 입력해주세요.')
      return
    }

    startTransition(async () => {
      const result = await updateComment(comment._id, comment.userId._id, content)

      if (result.success) {
        toast.success(result.message)
        onSuccess()
      } else {
        toast.error(result.error || '댓글 수정에 실패했습니다.')
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className='min-h-[80px] resize-none'
        maxLength={1000}
        disabled={isPending}
      />
      <div className='flex justify-between items-center'>
        <span className='text-sm text-gray-500'>{content.length}/1000</span>
        <div className='flex gap-2'>
          <Button type='button' variant='outline' size='sm' onClick={onCancel} disabled={isPending}>
            취소
          </Button>
          <Button type='submit' size='sm' disabled={isPending || !content.trim()}>
            {isPending ? '수정 중...' : '수정'}
          </Button>
        </div>
      </div>
    </form>
  )
}
