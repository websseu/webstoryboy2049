'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { IPostUpdate } from '@/lib/types'
import { LayoutGrid, List } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'

interface PostCardProps {
  posts?: IPostUpdate[] // undefined일 때 로딩 상태
  isLoading?: boolean
}

export default function PostCard({
  posts = [],
  isLoading = false,
}: PostCardProps) {
  const [viewMode, setViewMode] = useState<'card' | 'table'>('card')

  useEffect(() => {
    const savedMode = localStorage.getItem('pageCardViewMode')
    if (savedMode === 'card' || savedMode === 'table') {
      setViewMode(savedMode)
    }
  }, [])

  const handleChangeViewMode = (mode: 'card' | 'table') => {
    setViewMode(mode)
    localStorage.setItem('pageCardViewMode', mode)
  }

  // 로딩 중일 때 Skeleton 렌더
  if (isLoading) {
    return (
      <div className='card__wrap'>
        <div className='relative mb-4 mt-6'>
          <div className='absolute top-[-50px] right-0 flex gap-1'>
            <Button
              size='sm'
              variant={viewMode === 'card' ? 'default' : 'outline'}
              className='w-7 h-7'
            >
              <LayoutGrid />
            </Button>
            <Button
              size='sm'
              variant={viewMode === 'table' ? 'default' : 'outline'}
              className='w-7 h-7'
            >
              <List />
            </Button>
          </div>
        </div>

        {viewMode === 'card' ? (
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className='card'>
                <Skeleton className='h-40 w-full rounded-lg' />
              </div>
            ))}
          </div>
        ) : (
          <div className='overflow-x-auto'>
            <Table className='border-b text-sm'>
              <TableHeader>
                <TableRow>
                  <TableHead>번호</TableHead>
                  <TableHead>제목</TableHead>
                  <TableHead>카테고리</TableHead>
                  <TableHead>태그</TableHead>
                  <TableHead>작성일</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Skeleton className='h-4 w-4' />
                    </TableCell>
                    <TableCell>
                      <Skeleton className='h-4 w-24' />
                    </TableCell>
                    <TableCell>
                      <Skeleton className='h-4 w-16' />
                    </TableCell>
                    <TableCell>
                      <Skeleton className='h-4 w-20' />
                    </TableCell>
                    <TableCell>
                      <Skeleton className='h-4 w-12' />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className='card__wrap'>
      <div className='relative mb-4 mt-6'>
        <div className='absolute top-[-50px] right-0 flex gap-1'>
          <Button
            size='sm'
            onClick={() => handleChangeViewMode('card')}
            variant={viewMode === 'card' ? 'default' : 'outline'}
            className='w-7 h-7'
          >
            <LayoutGrid />
          </Button>
          <Button
            size='sm'
            onClick={() => handleChangeViewMode('table')}
            variant={viewMode === 'table' ? 'default' : 'outline'}
            className='w-7 h-7'
          >
            <List />
          </Button>
        </div>
      </div>

      {viewMode === 'card' && (
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post._id} className='card'>
                <div className='card__images group relative overflow-hidden'>
                  <Image
                    src={`/${post.category}/${post.subCategory}/${post.images}`}
                    alt={`${post.title} 이미지`}
                    width={500}
                    height={400}
                    className='group-hover:brightness-75 transition-all'
                  />
                  <div className='link group-hover:opacity-100'>
                    <Link href={`/post/${post.slug}`}>
                      <LuFileSpreadsheet />
                    </Link>
                  </div>
                  <div
                    className='absolute bottom-0 left-0 w-full bg-black/70 text-white text-center text-sm p-3 
                      opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'
                  >
                    {post.title}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='noData'>등록된 게시물이 없습니다.🙅🏽</p>
          )}
        </div>
      )}

      {viewMode === 'table' && (
        <div className='overflow-x-auto'>
          <Table className='border-b text-sm'>
            <TableHeader>
              <TableRow>
                <TableHead>번호</TableHead>
                <TableHead>제목</TableHead>
                <TableHead>카테고리</TableHead>
                <TableHead>태그</TableHead>
                <TableHead>작성일</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.length > 0 ? (
                posts.map((post, index) => (
                  <TableRow key={post._id}>
                    <TableCell className='w-[60px] text-center py-3'>
                      {index + 1}
                    </TableCell>
                    <TableCell className='text-center'>
                      <Link href={`/post/${post.slug}`}>{post.title}</Link>
                    </TableCell>
                    <TableCell className='text-center'>
                      {post.category || '-'}
                    </TableCell>
                    <TableCell className='text-center'>
                      {post.tags?.length ? post.tags.join(', ') : '-'}
                    </TableCell>
                    <TableCell className='text-center'>
                      {post.createdAt
                        ? new Date(post.createdAt).toLocaleDateString('ko-KR')
                        : '-'}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className='text-center py-4'>
                    등록된 강의가 없습니다. 🙅🏽
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}
