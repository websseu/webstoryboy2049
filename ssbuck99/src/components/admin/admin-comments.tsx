import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function AdminComments() {
  return (
    <Card className='border-starbucks-green-pale bg-white'>
      <CardHeader>
        <CardTitle className='font-gmarket text-starbucks-green text-xl'>
          댓글 관리
        </CardTitle>
        <CardDescription className='font-nanum'>
          사용자 댓글을 검토하고 관리할 수 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent>CommentsManage</CardContent>
    </Card>
  )
}
