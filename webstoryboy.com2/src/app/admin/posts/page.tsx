import Link from 'next/link'
import { Metadata } from 'next'
import { X } from 'lucide-react'
import { IPost } from '@/lib/db/model/post.model'
import { Button } from '@/components/ui/button'
import { getAllPostsPages } from '@/lib/actions/post.action'
import PageIndex from '@/components/page/page-index'
import PageSelector from '@/components/page/page-selector'
import PostDelete from '@/components/post/post-delete'
import PageInitializer from '@/components/page/page-initializer'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const metadata: Metadata = {
  title: '글 목록',
}

export default async function PostsPage(props: {
  searchParams: Promise<{ page?: string; limit?: string }>
}) {
  const searchParams = await props.searchParams
  const page = searchParams.page ? Number.parseInt(searchParams.page) : 1
  const limit = searchParams.limit ? Number.parseInt(searchParams.limit) : 10
  const res = await getAllPostsPages({ page, limit })

  if (!res.success) {
    console.error('회원 목록 불러오기 오류:', res.error)
    return null
  }

  const posts = res.posts || []
  const totalPosts = res.totalPosts || 0
  const totalPages = res.totalPages || 1
  const currentPage = res.currentPage || 1

  return (
    <section>
      <PageInitializer />
      <div className='relative'>
        <Table className='border-b text-sm'>
          <TableCaption className='caption-top text-zinc-800 text-xl font-nexon mb-4 mt-0'>
            글 목록 <span className='text-[10px] text-zinc-500'>{totalPosts}</span>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>번호</TableHead>
              <TableHead>타이틀</TableHead>
              <TableHead>슬러그</TableHead>
              <TableHead>컴퍼넌트</TableHead>
              <TableHead>유튜브</TableHead>
              <TableHead>뷰</TableHead>
              <TableHead>좋아요</TableHead>
              <TableHead className='w-[100px]'>관리</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.length > 0 ? (
              posts.map((post: IPost, index: number) => (
                <TableRow key={post._id}>
                  <TableCell className='w-[60px] text-center'>
                    {(page - 1) * 10 + index + 1}
                  </TableCell>
                  <TableCell className='text-center'>
                    <Link
                      href={`/post/${post.slug}`}
                      className='hover:underline underline-offset-4'
                    >
                      {post.title}
                    </Link>
                  </TableCell>
                  <TableCell className='text-center'>{post.slug}</TableCell>
                  <TableCell className='text-center'>
                    {post.components?.trim() ? post.components : <X className='w-5 h-5 mx-auto' />}
                  </TableCell>
                  <TableCell className='text-center'>
                    {post.youtubeId ? (
                      <a
                        href={`https://www.youtube.com/watch?v=${post.youtubeId}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:underline underline-offset-4'
                      >
                        보기
                      </a>
                    ) : (
                      '-'
                    )}
                  </TableCell>

                  <TableCell className='text-center'>{post.numViews}</TableCell>
                  <TableCell className='text-center'>{post.numLikes}</TableCell>
                  <TableCell className='flex gap-1'>
                    <Button asChild size='sm'>
                      <Link
                        href={`/admin/posts/${post._id.toString()}?page=${currentPage}&limit=${limit}`}
                      >
                        수정
                      </Link>
                    </Button>
                    <PostDelete postId={post._id.toString()} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} className='text-center py-4'>
                  등록된 글이 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className='mt-4'>
          <PageIndex
            currentPage={currentPage}
            totalPages={totalPages}
            limit={limit}
            baseUrl='/admin/posts'
          />
        </div>
        <div className='absolute right-0 top-2'>
          <PageSelector currentLimit={limit} baseUrl='/admin/posts' currentPage={currentPage} />
        </div>
      </div>
    </section>
  )
}
