import React from 'react'
import HeaderLeft from './header-left'
import HeaderRight from './header-right'
import { auth } from '@/auth'
import Link from 'next/link'

export default async function Header() {
  const session = await auth()
  // console.log(session)

  return (
    <header className='header__container'>
      <div className='flex items-center justify-between border-b border-gray-300/20 py-4'>
        <HeaderLeft />
        <HeaderRight session={session} />
      </div>
      <nav className='mt-4'>
        <ul>
          <li className='text-orange-600 uppercase'>
            <Link
              href='/youtube/global'
              className='border border-orange-600 px-4 py-1 rounded-full hover:bg-orange-600 hover:text-white'
            >
              youtube
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
