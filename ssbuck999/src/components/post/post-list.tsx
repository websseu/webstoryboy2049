'use client'

import { useEffect, useState } from 'react'
import { getAllPostsPage } from '@/lib/actions/post.action'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Eye, Heart } from 'lucide-react'
import Link from 'next/link'
import PostPage from './post-page'

interface Post {
  _id: string
  title: string
  slug: string
  category?: string
  description?: string
  isPublished: boolean
  storeId?: string
  numViews: number
  numLikes: number
  createdAt: string
}

interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalCount: number
  limit: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(30)
  const [pagination, setPagination] = useState<PaginationInfo | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        const result = await getAllPostsPage(currentPage, pageSize)
        if (result.success) {
          setPosts(result.posts.filter((p: Post) => p.isPublished))
          setPagination(result.pagination!)
          setError(null)
        } else {
          setError(result.error || '데이터를 불러오는데 실패했습니다.')
        }
      } catch (err) {
        console.log(err)
        setError('데이터를 불러오는 중 오류가 발생했습니다.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [currentPage, pageSize])

  // 페이지 크기 변경
  const handlePageSizeChange = (newPageSize: string) => {
    setPageSize(Number(newPageSize))
    setCurrentPage(1)
  }

  // 페이지 이동
  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  if (isLoading) {
    return (
      <div className='flex justify-center items-center py-12 text-muted-foreground min-h-screen'>
        <span className='animate-spin mr-2'>⏳</span> 게시글을 불러오는 중...
      </div>
    )
  }

  if (error) {
    return (
      <div className='text-center text-destructive py-8'>
        <p className='font-semibold'>{error}</p>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className='text-center text-muted-foreground py-12'>
        등록된 게시글이 없습니다.
      </div>
    )
  }

  return (
    <div className='min-h-1/6'>
      {/* 페이지 크기 설정 */}
      <div className='flex justify-end mb-6'>
        <Select
          value={pageSize.toString()}
          onValueChange={handlePageSizeChange}
        >
          <SelectTrigger className='w-24'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='12'>12개</SelectItem>
            <SelectItem value='20'>20개</SelectItem>
            <SelectItem value='30'>30개</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 게시글 목록 */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12'>
        {posts.map((post) => (
          <Card
            key={post._id}
            className='hover:shadow-lg transition-shadow py-0'
          >
            <CardContent className='p-5 flex flex-col gap-2'>
              <Link href={`/starbucks/${post.slug}`} className='group'>
                <h2 className='text-lg font-bold text-green-800 group-hover:underline underline-offset-4 line-clamp-2'>
                  {post.title}
                </h2>
              </Link>
              {post.description && (
                <p className='text-sm text-muted-foreground line-clamp-2 min-h-[2.5em]'>
                  {post.description}
                </p>
              )}
              <div className='flex items-center gap-3 mt-2 text-xs text-gray-500'>
                <span className='flex items-center gap-1'>
                  <Eye className='w-4 h-4' /> {post.numViews}
                </span>
                <span className='flex items-center gap-1'>
                  <Heart className='w-4 h-4' /> {post.numLikes}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 페이지네이션 */}
      {pagination && (
        <PostPage pagination={pagination} onPageChange={goToPage} />
      )}
    </div>
  )
}
