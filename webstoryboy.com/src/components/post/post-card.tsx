import Link from 'next/link'
import Image from 'next/image'

interface Post {
  _id: string
  title: string
  category: string
  subCategory: string
  images: string
  slug: string
  numViews: number
  numLikes: number
  youtubeId: string
  createdAt: string
}

export default function PostCard({ posts }: { posts: Post[] }) {
  return (
    <div className='grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4'>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className='card bg-black/10 rounded-xl'>
            <div className='card__images group relative overflow-hidden'>
              <Link href={`/post/${post.slug}`}>
                <Image
                  src={`/${post.category}/${post.subCategory}/${post.images}`}
                  alt={`${post.title} 이미지`}
                  width={500}
                  height={400}
                  className='group-hover:brightness-75 transition-all'
                />
                <div
                  className='absolute bottom-0 left-0 w-full bg-black/70 text-white text-center text-sm p-3 
                      opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'
                >
                  {post.title}
                </div>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className='noData'>등록된 게시물이 없습니다.🙅🏽</p>
      )}
    </div>
  )
}
