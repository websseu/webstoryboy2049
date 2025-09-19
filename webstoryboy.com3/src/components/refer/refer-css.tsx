'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ReferCssProps {
  titles: string[]
}

export default function ReferCss({ titles }: ReferCssProps) {
  const pathname = usePathname()

  return (
    <div className='no-scrollbar h-full overflow-auto py-10 pr-4'>
      <div className='flex flex-col gap-1'>
        <h4 className='font-nanum px-2 text-base mb-1 font-bold'>속성</h4>
        <div className='grid grid-flow-row auto-rows-max gap-0.5 text-sm font-sans'>
          {/* {data.CssDocs.map((prop) => (
            <Link
              key={prop}
              scroll={false}
              href={`/reference/css/${prop}`}
              className='rounded font-nanum hover:bg-zinc-100 px-2 py-1.5 text-zinc-600'
            >
              {prop}
            </Link>
          ))} */}
          {titles.map((title) => {
            const isActive = pathname === `/reference/css/${title}`
            return (
              <Link
                key={title}
                scroll={false}
                href={`/reference/css/${title}`}
                className={`rounded font-nanum px-2 py-1.5 text-zinc-600 hover:bg-zinc-100 ${
                  isActive ? 'bg-zinc-200 font-bold text-black' : ''
                }`}
              >
                {title}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
