import React from 'react'
import Link from 'next/link'
import { House, BookMarked, TvMinimalPlay, Refrigerator, Drill } from 'lucide-react'

export default function MobileNav() {
  return (
    <nav className='fixed bottom-0 w-full bg-zinc-300/50 backdrop-blur-sm mx-auto md:hidden flex items-center justify-evenly gap-1 rounded p-2 font-poppins '>
      <Link href={'/'} className='font-gmarket p-2 hover:bg-zinc-300/50 rounded'>
        <House className='w-6 h-6' />
      </Link>
      <Link href={'/'} className='font-gmarket p-2 hover:bg-zinc-300/50 rounded'>
        <BookMarked className='w-6 h-6' />
      </Link>
      <Link href={'/'} className='font-gmarket p-2 hover:bg-zinc-300/50 rounded'>
        <TvMinimalPlay className='w-6 h-6' />
      </Link>
      <Link href={'/'} className='font-gmarke p-2 hover:bg-zinc-300/50 rounded'>
        <Refrigerator className='w-6 h-6' />
      </Link>
      <Link href={'/'} className='font-gmarket p-2 hover:bg-zinc-300/50 rounded'>
        <Drill className='w-6 h-6' />
      </Link>
    </nav>
  )
}
