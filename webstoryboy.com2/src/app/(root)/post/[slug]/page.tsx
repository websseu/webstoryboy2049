import Link from 'next/link'
import { notFound } from 'next/navigation'
import { formatPostDate } from '@/lib/utils'
import { Binoculars, MessageCircleCode, Palette, Eye } from 'lucide-react'
import { getPostBySlug } from '@/lib/actions/post.action'

import dynamic from 'next/dynamic'
import ReactMarkdown from 'react-markdown'
import PostViews from '@/components/post/post-view'
import PostLike from '@/components/post/post-like'
import PostList from '@/components/post/post-list'
import PostPdf from '@/components/post/post-pdf'
import PostComments from '@/components/post/post-comments'

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const res = await getPostBySlug(params.slug)

  if (!res.success || !res.post) {
    return { title: '해당 글을 찾을 수 없습니다.' }
  }

  const post = res.post

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function PostDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const res = await getPostBySlug(params.slug)

  if (!res.success || !res.post) {
    notFound()
  }

  const post = res.post

  let PostComponent = null

  if (!post.contents || post.contents.trim() === '') {
    if (post.components) {
      try {
        const DynamicComponent = dynamic(
          () => import(`@/blog/${post.category}/${post.subCategory}/${post.components}`),
          {
            loading: () => <p>컴포넌트 로딩 중...</p>,
            ssr: true,
          }
        )
        PostComponent = <DynamicComponent />
      } catch (error) {
        console.error('컴포넌트 로드 실패:', error)
        PostComponent = <p>컴포넌트를 찾을 수 없습니다.</p>
      }
    }
  }

  return (
    <section className='post__title'>
      <PostViews postId={post._id.toString()} />
      <h2>{post.title}</h2>
      <div className='info'>
        {formatPostDate(post.createdAt)} by {post.author}
      </div>

      <div className='flex items-center justify-center gap-1'>
        <div className='tag'>
          {post.tags?.length ? (
            post.tags.map((tag: string) => (
              <Link key={tag} href={`/tags/${tag}`} className='font-nanum'>
                {tag}
              </Link>
            ))
          ) : (
            <span className='text-gray-400'></span>
          )}
        </div>
        <div className='view'>
          <Eye className='w-4 h-4' />
          {post.numViews}
        </div>
        <div className='like'>
          <PostLike postId={post._id.toString()} initialLikes={post.numLikes} />
        </div>
      </div>

      <div className='post__layout'>
        <div className='post__contents'>
          {post.contents && post.contents.trim() !== '' ? (
            <ReactMarkdown>{post.contents}</ReactMarkdown>
          ) : (
            PostComponent
          )}
        </div>

        <aside className='post__sidebar '>
          <div className='ad w-[300px] h-[200px] bg-amber-100 rounded mx-auto mb-4'></div>

          {post.subCategory && <PostList subCategory={post.subCategory} currentSlug={post.slug} />}

          <div className='flex justify-between gap-2'>
            <div className='w-1/2'>
              <PostPdf />
            </div>
            <div className='flex flex-col gap-3 w-1/2'>
              <Link
                href={
                  'https://www.figma.com/design/dw6Hz3ecyWLgQ95Nl6aVu4/%EC%9B%B9%EB%94%94%EC%9E%90%EC%9D%B8%EA%B0%9C%EB%B0%9C%EA%B8%B0%EB%8A%A5%EC%82%AC-2025-%7C-webstoryboy?node-id=0-1&t=OUdv6hNZU7sPbImg-1'
                }
                target='_blank'
                className='w-full flex items-center justify-center p-2 rounded gap-2 text-sm border text-zinc-700 hover:bg-zinc-50 mt-2'
              >
                <Palette className='w-5 h-5' />
                디자인 보기
              </Link>
            </div>
          </div>

          <div className='flex justify-between gap-2'>
            <div className='flex flex-col gap-3 w-1/2'>
              <Link
                href={'https://webstoryboy.github.io/webdesign/'}
                target='_blank'
                className='w-full flex items-center justify-center p-2 rounded gap-2 text-sm border text-zinc-700 hover:bg-zinc-50 mt-2'
              >
                <Binoculars className='w-5 h-5' />
                미리보기
              </Link>
            </div>
            <div className='flex flex-col gap-3 w-1/2'>
              <Link
                href={'https://github.com/webstoryboy/webdesign/tree/main/code'}
                target='_blank'
                className='w-full flex items-center justify-center p-2 rounded gap-2 text-sm border text-zinc-700 hover:bg-zinc-50 mt-2'
              >
                <MessageCircleCode className='w-5 h-5' />
                코드보기
              </Link>
            </div>
          </div>
          <PostComments />
        </aside>
      </div>
    </section>
  )
}
