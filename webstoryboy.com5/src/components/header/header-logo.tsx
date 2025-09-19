import React from 'react'
import Link from 'next/link'
import { MdStars } from 'react-icons/md'

export default function HeaderLogo() {
  return (
    <div className='bg-background my-1 sm:my-2 md:my-3'>
      <Link
        href={'/'}
        className='flex items-center text-6xl sm:text-7xl md:text-8xl font-poppins uppercase font-black h-[50px] sm:h-[60px] md:h-[80px]'
      >
        <span className='mr-[-0.5vw]'>st</span>
        <MdStars className='text-red-500 text-[56px] sm:text-[66px] md:text-[88px]' />
        <span className='ml-[-0.5vw]'>ry</span>
      </Link>
    </div>
  )
}
