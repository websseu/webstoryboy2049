import Link from 'next/link'
import { notFound } from 'next/navigation'
import { formatPostDate } from '@/lib/utils'
import { Eye } from 'lucide-react'
import { getPostBySlug } from '@/lib/actions/post.action'

import dynamic from 'next/dynamic'
import ReactMarkdown from 'react-markdown'
import PostViews from '@/components/post/post-view'
import PostLike from '@/components/post/post-like'
import PostSidebar from '@/components/post/post-sidebar'

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

        <PostSidebar subCategory={post.subCategory} currentSlug={post.slug} />
      </div>
    </section>
  )
}
