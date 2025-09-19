'use client'

import type React from 'react'

import { useState, useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { User, Send } from 'lucide-react'
import { createComment } from '@/lib/actions/comment.action'
import { toast } from 'sonner'
import Link from 'next/link'

interface CommentFormProps {
  marathonId: string
  userId?: string
  userImage?: string
  userName?: string
  onCommentAdded?: () => void
}

export default function CommentForm({
  marathonId,
  userId,
  userImage,
  userName,
  onCommentAdded,
}: CommentFormProps) {
  const [content, setContent] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!userId) {
      toast.error('로그인이 필요합니다.')
      return
    }

    if (!content.trim()) {
      toast.error('댓글 내용을 입력해주세요.')
      return
    }

    startTransition(async () => {
      const result = await createComment(marathonId, userId, content)

      if (result.success) {
        toast.success(result.message)
        setContent('')
        onCommentAdded?.()
      } else {
        toast.error(result.error || '댓글 작성에 실패했습니다.')
      }
    })
  }

  if (!userId) {
    return (
      <Card>
        <CardContent className='p-4 text-center'>
          <p className='text-gray-500 mb-4'>댓글을 작성하려면 로그인이 필요합니다.</p>
          <Button asChild>
            <Link href='/auth/signin'>로그인</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className='p-4'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='flex gap-3'>
            <Avatar className='w-10 h-10'>
              <AvatarImage src={userImage || '/placeholder.svg'} alt={userName || '사용자'} />
              <AvatarFallback>
                <User className='h-5 w-5' />
              </AvatarFallback>
            </Avatar>
            <div className='flex-1'>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='댓글을 입력하세요...'
                className='min-h-[80px] resize-none'
                maxLength={1000}
                disabled={isPending}
              />
              <div className='flex justify-between items-center mt-2'>
                <span className='text-sm text-gray-500'>{content.length}/1000</span>
                <Button type='submit' size='sm' disabled={isPending || !content.trim()}>
                  <Send className='h-4 w-4 mr-2' />
                  {isPending ? '작성 중...' : '댓글 작성'}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
