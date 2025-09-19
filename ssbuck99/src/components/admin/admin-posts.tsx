import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function AdminPosts() {
  return (
    <Card className='border-starbucks-green-pale bg-white'>
      <CardHeader>
        <CardTitle className='font-gmarket text-starbucks-green text-xl'>
          글 관리
        </CardTitle>
        <CardDescription className='font-nanum'>
          게시글을 관리하고 수정, 삭제, 상태 변경을 할 수 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent>PostsManage</CardContent>
    </Card>
  )
}
