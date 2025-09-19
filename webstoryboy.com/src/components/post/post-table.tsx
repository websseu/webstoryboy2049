'use client'

import Link from 'next/link'
import { formatSimpleDate } from '@/lib/utils'
import { Binoculars, MonitorPlay } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface Post {
  _id: string
  title: string
  slug: string
  numViews: number
  numLikes: number
  youtubeId: string
  createdAt: string
}

export default function PostTable({ posts }: { posts: Post[] }) {
  return (
    <div className='overflow-x-auto'>
      <Table className='border-b text-sm'>
        <TableHeader>
          <TableRow>
            <TableHead>번호</TableHead>
            <TableHead>제목</TableHead>
            <TableHead>페이지</TableHead>
            <TableHead>유튜브</TableHead>
            <TableHead>봤어요!</TableHead>
            <TableHead>좋아요!</TableHead>
            <TableHead>작성일</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post, index) => (
            <TableRow key={post._id}>
              <TableCell className='text-center py-3'>{index + 1}</TableCell>
              <TableCell className='text-center'>{post.title}</TableCell>
              <TableCell className='text-center'>
                <Link
                  href={`/post/${post.slug}`}
                  className='flex items-center justify-center gap-2 hover:underline underline-offset-4'
                >
                  <Binoculars className='w-4 h-4' /> 글 보기
                </Link>
              </TableCell>
              <TableCell className='text-center'>
                {post.youtubeId ? (
                  <a
                    href={`https://www.youtube.com/watch?v=${post.youtubeId}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center gap-2 hover:underline underline-offset-4'
                  >
                    <MonitorPlay className='w-4 h-4' /> 유튜브 보기
                  </a>
                ) : (
                  '-'
                )}
              </TableCell>
              <TableCell className='text-center'>{post.numViews}</TableCell>
              <TableCell className='text-center'>{post.numLikes}</TableCell>
              <TableCell className='text-center'>
                {formatSimpleDate(post.createdAt)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
