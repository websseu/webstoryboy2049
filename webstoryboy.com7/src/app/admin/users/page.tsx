import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '회원 목록',
}

export default function AdminUsersPage() {
  return (
    <section>
      <h1 className='text-xl text-center font-nanum mb-4'>사용자 관리</h1>
    </section>
  )
}
