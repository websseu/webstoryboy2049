import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '글 목록',
}

export default function AdminPostsPage() {
  return (
    <section>
      <h1 className='text-xl text-center font-nanum mb-4'>글 관리</h1>
    </section>
  )
}
