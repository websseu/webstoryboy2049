import React from 'react'
import Link from 'next/link'
import { BookMarked, ArrowRight } from 'lucide-react'
import { nav } from '@/lib/menu'

export default function HomePage() {
  return (
    <section>
      <div className='main__title'>
        <h1>
          읽지 말고 경험하세요. <br />
          개발의 진짜 재미를 느껴보세요.
        </h1>
        <p className='uline'>단순한 코드 그 이상의 경험, 당신의 개발 이야기를 완성하세요!</p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 sm:gap-4 gap-2 mb-12'>
        {nav.flatMap((section) =>
          section.items
            .filter((item) => item.featured)
            .map((item) => (
              <div key={item.href} className='border rounded p-4 hover:border-amber-500'>
                <BookMarked className='w-4 h-4' />
                <h2 className='mt-2 font-nanum font-medium text-xl mb-2'>{item.title}</h2>
                <p className='mb-4 text-muted-foreground font-nanum text-sm'>{item.description}</p>
                <Link
                  href={item.href}
                  className='inline-flex gap-1 font-poppins text-sm items-center border px-2.5 py-1 rounded hover:bg-accent'
                >
                  Learn <ArrowRight className='w-4 h-4' />
                </Link>
              </div>
            ))
        )}
      </div>
    </section>
  )
}
