'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { getInitials } from '@/lib/utils'
import {
  Heart,
  Bookmark,
  MessageCircle,
  User,
  Calendar,
  Crown,
  Coffee,
} from 'lucide-react'
import MyPageProfile from './my-page-profile'
import MyPageLikes from './my-page-likes'
import MyPageBookmarks from './my-page-bookmarks'
import MyPageComments from './my-page-comments'

interface SessionData {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
    id?: string
    role?: string
    visitCount?: number
  }
  expires?: string
}

interface MyPageContentProps {
  session: SessionData
}

export default function MyPageContent({ session }: MyPageContentProps) {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className='space-y-6'>
      {/* 프로필 헤더 */}
      <Card className='border-starbucks-green-pale bg-white py-10'>
        <CardContent>
          <div className='flex items-center gap-6'>
            <Avatar className='h-20 w-20'>
              <AvatarImage
                src={session.user?.image || ''}
                alt={session.user?.name || ''}
              />
              <AvatarFallback className='bg-starbucks-green text-white font-bold text-xl'>
                {session.user?.name ? getInitials(session.user.name) : 'U'}
              </AvatarFallback>
            </Avatar>
            <div className='flex-1'>
              <div className='flex items-center gap-3 mb-2'>
                <h1 className='font-gmarket text-2xl font-bold text-starbucks-green'>
                  {session.user?.name || '사용자'}
                </h1>
                {session.user?.role === 'admin' && (
                  <Badge className='bg-yellow-100 text-yellow-800 border-yellow-300'>
                    <Crown className='w-3 h-3 mr-1' />
                    관리자
                  </Badge>
                )}
              </div>
              <p className='font-nanum text-gray-600 mb-2'>
                {session.user?.email}
              </p>
              <div className='flex items-center gap-4 text-sm text-gray-500'>
                <div className='flex items-center gap-1'>
                  <Calendar className='w-4 h-4' />
                  <span className='font-nanum'>방문 2회</span>
                </div>
                <div className='flex items-center gap-1'>
                  <Coffee className='w-4 h-4' />
                  <span className='font-nanum'>좋아요 2개</span>
                </div>
                <div className='flex items-center gap-1'>
                  <Bookmark className='w-4 h-4' />
                  <span className='font-nanum'>즐겨찾기 2개</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 탭 네비게이션 */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className='space-y-4'
      >
        <TabsList className='grid w-full grid-cols-4 bg-white border border-starbucks-green-pale'>
          <TabsTrigger
            value='profile'
            className='data-[state=active]:bg-starbucks-green data-[state=active]:text-white'
          >
            <User className='w-4 h-4' />
            프로필
          </TabsTrigger>
          <TabsTrigger
            value='likes'
            className='data-[state=active]:bg-starbucks-green data-[state=active]:text-white'
          >
            <Heart className='w-4 h-4' />
            좋아요
          </TabsTrigger>
          <TabsTrigger
            value='bookmarks'
            className='data-[state=active]:bg-starbucks-green data-[state=active]:text-white'
          >
            <Bookmark className='w-4 h-4' />
            즐겨찾기
          </TabsTrigger>
          <TabsTrigger
            value='comments'
            className='data-[state=active]:bg-starbucks-green data-[state=active]:text-white'
          >
            <MessageCircle className='w-4 h-4' />
            댓글
          </TabsTrigger>
        </TabsList>

        {/* 프로필 탭 */}
        <TabsContent value='profile' className='space-y-4'>
          <MyPageProfile session={session} />
        </TabsContent>

        {/* 좋아요 탭 */}
        <TabsContent value='likes' className='space-y-4'>
          <MyPageLikes />
        </TabsContent>

        {/* 즐겨찾기 탭 */}
        <TabsContent value='bookmarks' className='space-y-4'>
          <MyPageBookmarks />
        </TabsContent>

        {/* 댓글 탭 */}
        <TabsContent value='comments' className='space-y-4'>
          <MyPageComments />
        </TabsContent>
      </Tabs>
    </div>
  )
}
