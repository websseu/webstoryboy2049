import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostById } from '@/lib/actions/post.action'
import PostUpdate from '@/components/post/post-update'

export const metadata: Metadata = {
  title: '글 수정하기',
}

type UpdatePostProps = {
  params: Promise<{
    id: string
  }>
}

export default async function UpdatePostPage(props: UpdatePostProps) {
  const params = await props.params
  const { id } = params
  const { success, post } = await getPostById(id)

  if (!success || !post) {
    notFound()
  }

  const plainPost = JSON.parse(JSON.stringify(post))

  return (
    <section className='max-w-6xl mx-auto'>
      <h2 className='text-xl text-center font-nexon mb-12'>글 수정하기</h2>
      <PostUpdate post={plainPost} postId={plainPost._id} />
    </section>
  )
}
