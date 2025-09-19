'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle } from 'lucide-react'
import CommentForm from './comment-form'
import CommentList from './comment-list'

interface CommentSectionProps {
  marathonId: string
  userId?: string
  userImage?: string
  userName?: string
  initialCommentCount?: number
}

export default function CommentSection({
  marathonId,
  userId,
  userImage,
  userName,
  initialCommentCount = 0,
}: CommentSectionProps) {
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const handleCommentAdded = () => {
    setRefreshTrigger((prev) => prev + 1)
  }

  return (
    <Card className='mt-8'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <MessageCircle className='h-5 w-5' />
          댓글 ({initialCommentCount})
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <CommentForm
          marathonId={marathonId}
          userId={userId}
          userImage={userImage}
          userName={userName}
          onCommentAdded={handleCommentAdded}
        />
        <CommentList
          marathonId={marathonId}
          currentUserId={userId}
          refreshTrigger={refreshTrigger}
        />
      </CardContent>
    </Card>
  )
}
