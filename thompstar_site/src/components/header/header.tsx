import React from 'react'
import { auth } from '@/auth'
import HeaderLeft from './header-left'
import HeaderRight from './header-right'
import HeaderNav from './header-nav'

export default async function Header() {
  const session = await auth()
  console.log(session)

  return (
    <header className='header__container'>
      <div className='flex items-center justify-between border-b border-gray-300/20 py-4'>
        <HeaderLeft />
        <HeaderRight session={session} />
      </div>
      <HeaderNav />
    </header>
  )
}
