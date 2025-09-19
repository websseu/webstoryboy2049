'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ScrollText, BookOpenText } from 'lucide-react'
import { getPostsBySubCategory } from '@/lib/actions/post.action'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'

interface Lecture {
  title: string
  slug: string
}

interface PostListProps {
  subCategory: string
  currentSlug: string
}

export default function PostList({ subCategory, currentSlug }: PostListProps) {
  const [lectures, setLectures] = useState<Lecture[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchLectures() {
      const data = await getPostsBySubCategory(subCategory)

      // Check if the response is an error object
      if (data && 'success' in data && data.success === false) {
        setError(data.error || '강의를 불러오는 중 오류가 발생했습니다.')
        return
      }

      // If it's an array, it's the successful response
      if (Array.isArray(data)) {
        // Map the data to match the Lecture interface
        const formattedLectures: Lecture[] = data.map((post) => ({
          title: post.title,
          slug: post.slug,
        }))
        setLectures(formattedLectures)
      }
    }

    if (subCategory) {
      fetchLectures()
    }
  }, [subCategory])

  if (!subCategory) return null

  return (
    <Sheet>
      <SheetTrigger className='w-full flex items-center justify-center p-2 rounded gap-2 text-sm border text-zinc-700 hover:bg-zinc-50 cursor-pointer'>
        <ScrollText className='w-5 h-5' />
        강의 목록 보기
      </SheetTrigger>
      <SheetContent side='right' className='w-[300px] p-6'>
        <SheetTitle className='flex items-center gap-2 mb-1'>
          <BookOpenText />
          강의 목록
        </SheetTitle>
        <ScrollArea className='h-[calc(100vh-90px)]'>
          <div className='flex flex-col gap-3'>
            {error ? (
              <p className='text-sm text-red-500'>{error}</p>
            ) : lectures.length > 0 ? (
              lectures.map((lecture) => (
                <Link
                  key={lecture.slug}
                  href={`/post/${lecture.slug}`}
                  className={`text-sm underline-offset-4 ${
                    lecture.slug === currentSlug
                      ? 'text-primary font-semibold underline'
                      : 'text-zinc-700 hover:underline'
                  }`}
                >
                  {lecture.title.replace('웹디자인개발기능사', '').trim()}
                </Link>
              ))
            ) : (
              <p className='text-sm text-zinc-500'>등록된 강의가 없습니다.</p>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
