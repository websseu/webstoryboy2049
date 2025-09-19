'use client'

import { FileText } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import Link from 'next/link'

const pdfList = [
  {
    title: '웹디자인개발기능사 A-1 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/A-1.pdf',
  },
  {
    title: '웹디자인개발기능사 A-2 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/A-2.pdf',
  },
  {
    title: '웹디자인개발기능사 A-3 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/A-3.pdf',
  },
  {
    title: '웹디자인개발기능사 A-4 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/A-4.pdf',
  },
  {
    title: '웹디자인개발기능사 B-1 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/B-1.pdf',
  },
  {
    title: '웹디자인개발기능사 B-2 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/B-2.pdf',
  },
  {
    title: '웹디자인개발기능사 B-3 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/B-3.pdf',
  },
  {
    title: '웹디자인개발기능사 B-4 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/B-4.pdf',
  },
  {
    title: '웹디자인개발기능사 C-1 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/C-1.pdf',
  },
  {
    title: '웹디자인개발기능사 C-2 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/C-2.pdf',
  },
  {
    title: '웹디자인개발기능사 C-3 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/C-3.pdf',
  },
  {
    title: '웹디자인개발기능사 C-4 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/C-4.pdf',
  },
  {
    title: '웹디자인개발기능사 D-1 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/D-1.pdf',
  },
  {
    title: '웹디자인개발기능사 D-2 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/D-2.pdf',
  },
  {
    title: '웹디자인개발기능사 D-3 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/D-3.pdf',
  },
  {
    title: '웹디자인개발기능사 D-4 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/D-4.pdf',
  },
  {
    title: '웹디자인개발기능사 E-1 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/E-1.pdf',
  },
  {
    title: '웹디자인개발기능사 E-2 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/E-2.pdf',
  },
  {
    title: '웹디자인개발기능사 E-3 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/E-3.pdf',
  },
  {
    title: '웹디자인개발기능사 E-4 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/E-4.pdf',
  },
  {
    title: '웹디자인개발기능사 F-1 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/F-1.pdf',
  },
  {
    title: '웹디자인개발기능사 F-2 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/F-2.pdf',
  },
  {
    title: '웹디자인개발기능사 F-3 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/F-3.pdf',
  },
  {
    title: '웹디자인개발기능사 F-4 유형',
    path: 'https://webstoryboy.github.io/webdesign/pdf/F-4.pdf',
  },
]

export default function PostPdf() {
  return (
    <Sheet>
      <SheetTrigger className='w-full flex items-center justify-center p-2 rounded gap-2 text-sm border text-zinc-700 hover:bg-zinc-50 mt-2 cursor-pointer'>
        <FileText className='w-5 h-5' />
        PDF 보기
      </SheetTrigger>
      <SheetContent side='right' className='w-[300px] p-6'>
        <SheetTitle className='flex items-center gap-2 mb-1'>
          <FileText />
          PDF 시험지 목록
        </SheetTitle>
        <ScrollArea className='h-[calc(100vh-90px)]'>
          <div className='flex flex-col gap-2'>
            {pdfList.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className='text-sm underline-offset-4 text-zinc-700 hover:underline cursor-pointer'
              >
                {item.title}
              </Link>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
