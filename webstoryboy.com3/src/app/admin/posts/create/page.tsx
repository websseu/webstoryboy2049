import PostCreate from '@/components/post/post-create'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '글 쓰기',
}

export default function CreatePostPage() {
  return (
    <section className='max-w-6xl mx-auto'>
      <h2 className='text-xl text-center font-nexon mb-12'>글 작성하기</h2>
      <PostCreate />
    </section>
  )
}
