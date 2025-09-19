'use client'

import Link from 'next/link'
import data from '@/lib/data'
import { Button } from '@/components/ui/button'
import {
  BookMarked,
  PencilRuler,
  BookUser,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

const iconMap = {
  BookMarked: <BookMarked />,
  BookUser: <BookUser />,
  PencilRuler: <PencilRuler />,
  Sparkles: <Sparkles />,
}

export default function HomePage() {
  return (
    <section>
      <h1 className='text-center font-black text-3xl leading-10 md:text-5xl md:leading-16 font-human mt-12'>
        읽지 말고 경험하세요. <br />
        개발의 진짜 재미를 느껴보세요.
      </h1>
      <p className='text-center mt-4 text-zinc-600 mb-14'>
        단순한 코드 그 이상의 경험, 당신의 개발 이야기를 완성하세요!
      </p>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
        {data.menuData.map((item) => (
          <div key={item.label} className='border rounded p-4'>
            {iconMap[item.card.icon as keyof typeof iconMap]}
            <h2 className='mt-2 font-poppins text-2xl font-bold mb-2'>
              {item.label}
            </h2>
            <p className='mb-4 text-zinc-600'>{item.card.description}</p>
            <Link href={item.card.href}>
              <Button
                variant='outline'
                size='sm'
                className='flex gap-1 font-poppins text-sm items-center'
              >
                {item.card.buttonText} <ArrowRight />
              </Button>
            </Link>
          </div>
        ))}
      </div>

      <div className=''>
        <h2 className='text-xl text-center'>웹디자인개발기능사</h2>
        <div></div>
      </div>
    </section>
  )
}
