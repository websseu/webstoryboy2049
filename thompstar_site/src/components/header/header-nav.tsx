import Link from 'next/link'
import React from 'react'

const navItems = [
  {
    href: '/youtube/global',
    label: 'youtube',
  },
  {
    href: '/blog',
    label: 'blog',
  },
]

export default function HeaderNav() {
  return (
    <nav className='mt-4'>
      <ul className='flex gap-1'>
        {navItems.map((item, index) => (
          <li key={index} className='text-orange-600 uppercase'>
            <Link
              href={item.href}
              className='border border-orange-600 text-xs px-4 py-1 rounded-full hover:bg-orange-600 hover:text-white'
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
