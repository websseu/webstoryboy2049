'use client'

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AdminContacts from '@/components/admin/admin-contacts'
import AdminUsers from '@/components/admin/admin-users'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('users')

  return (
    <section>
      <div>
        <h1 className='text-xl text-center font-nanum mb-6 mt-4'>관리자</h1>
      </div>

      <Tabs defaultValue='users' value={activeTab} onValueChange={setActiveTab}>
        <TabsList className='mx-auto mb-2'>
          <TabsTrigger className='px-6' value='users'>
            회원 관리
          </TabsTrigger>
          <TabsTrigger className='px-6' value='contacts'>
            문의 관리
          </TabsTrigger>
        </TabsList>

        <TabsContent value='users'>
          <AdminUsers />
        </TabsContent>

        <TabsContent value='contacts'>
          <AdminContacts />
        </TabsContent>
      </Tabs>
    </section>
  )
}
