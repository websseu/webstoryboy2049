'use client'

import { useEffect, useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import PostTable from '@/components/post/post-table'
import PostCard from '@/components/post/post-card'

interface Post {
  _id: string
  title: string
  category: string
  subCategory: string
  images: string
  slug: string
  numViews: number
  numLikes: number
  youtubeId: string
  createdAt: string
}

export default function PostTab({ posts }: { posts: Post[] }) {
  const [tab, setTab] = useState('card')

  // 컴포넌트 마운트 시 로컬스토리지에서 저장된 탭 상태 불러오기
  useEffect(() => {
    const savedTab = localStorage.getItem('webdesign2025-tab')
    if (savedTab === 'card' || savedTab === 'table') {
      setTab(savedTab)
    }
  }, [])

  // 탭 변경 시 로컬스토리지에 저장
  const handleTabChange = (value: string) => {
    setTab(value)
    localStorage.setItem('webdesign2025-tab', value)
  }

  return (
    <Tabs value={tab} onValueChange={handleTabChange} className='mt-6'>
      <TabsList className='mx-auto mb-2'>
        <TabsTrigger value='card' className='px-4'>
          이미지
        </TabsTrigger>
        <TabsTrigger value='table' className='px-4'>
          테이블
        </TabsTrigger>
      </TabsList>

      <TabsContent value='card'>
        <PostCard posts={posts} />
      </TabsContent>

      <TabsContent value='table'>
        <PostTable posts={posts} />
      </TabsContent>
    </Tabs>
  )
}
