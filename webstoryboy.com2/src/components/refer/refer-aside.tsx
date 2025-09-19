import React from 'react'
import Link from 'next/link'
import data from '@/lib/data'

export default function ReferAside() {
  return (
    <div className='no-scrollbar h-full overflow-auto py-10'>
      <div className='flex flex-col gap-1'>
        <h4 className='font-nanum px-2 text-base mb-1 font-bold'>태그</h4>
        <div className='grid grid-flow-row auto-rows-max gap-0.5 text-sm font-sans'>
          {data.HtmlDocs.map(({ slug, title }) => (
            <Link
              key={slug}
              scroll={false}
              href={`/reference/html/${slug}`}
              className='rounded font-nanum hover:bg-zinc-100 px-2 py-1.5 text-zinc-600'
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
