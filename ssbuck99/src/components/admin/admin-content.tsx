'use client'

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookHeart, BookImage, BookMarked, BookUser } from 'lucide-react'
import AdminPosts from '@/components/admin/admin-posts'
import AdminUsers from '@/components/admin/admin-users'
import AdminContact from '@/components/admin/admin-contact'
import AdminComments from '@/components/admin/admin-comments'

export default function AdminContent() {
  const [activeTab, setActiveTab] = useState('posts')

  return (
    <section>
      <Tabs
        defaultValue='posts'
        value={activeTab}
        onValueChange={setActiveTab}
        className='space-y-4 mt-6'
      >
        <TabsList className='grid w-full grid-cols-4 bg-white border border-starbucks-green-pale'>
          <TabsTrigger
            value='posts'
            className='data-[state=active]:bg-starbucks-green data-[state=active]:text-white'
          >
            <BookHeart className='w-4 h-4' />글 관리
          </TabsTrigger>
          <TabsTrigger
            value='users'
            className='data-[state=active]:bg-starbucks-green data-[state=active]:text-white'
          >
            <BookImage className='w-4 h-4' />
            회원 관리
          </TabsTrigger>
          <TabsTrigger
            value='contacts'
            className='data-[state=active]:bg-starbucks-green data-[state=active]:text-white'
          >
            <BookMarked className='w-4 h-4' />
            문의 관리
          </TabsTrigger>
          <TabsTrigger
            value='comments'
            className='data-[state=active]:bg-starbucks-green data-[state=active]:text-white'
          >
            <BookUser className='w-4 h-4' />
            댓글 관리
          </TabsTrigger>
        </TabsList>

        {/* 글관리 탭 */}
        <TabsContent value='posts' className='space-y-4'>
          <AdminPosts />
        </TabsContent>

        {/* 회원관리 탭 */}
        <TabsContent value='users' className='space-y-4'>
          <AdminUsers />
        </TabsContent>

        {/* 문의관리 탭 */}
        <TabsContent value='contacts' className='space-y-4'>
          <AdminContact />
        </TabsContent>

        {/* 댓글관리 탭 */}
        <TabsContent value='comments' className='space-y-4'>
          <AdminComments />
        </TabsContent>
      </Tabs>
    </section>
  )
}
