import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Eye, Heart, Fan } from 'lucide-react'
import { getDomesticPosts } from '@/lib/actions/post.action'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface StoreData {
  _id: string
  name: string
  address: string
  location: string
  parking: string
  since: string
  phone?: string
  tags: string[]
  images: string[]
}

interface PostData {
  _id: string
  title: string
  slug: string
  category: string
  description?: string
  contents?: string
  image?: string
  tags: string[]
  author?: string
  numViews: number
  numLikes: number
  createdAt: string | Date
  storeId: StoreData // populate된 Store 객체
}

export const metadata: Metadata = {
  title: '국내 스타벅스 매장 탐방 | 전국 특별한 스타벅스 매장들',
  description:
    '전국 각지의 특별한 스타벅스 매장들을 만나보세요! 부산, 서울, 대구 등 전국의 독특하고 아름다운 스타벅스 매장 정보와 후기를 확인하세요.',
  keywords: '스타벅스, 국내 스타벅스, 스타벅스 매장, 카페, 커피, 부산 스타벅스, 서울 스타벅스',
  openGraph: {
    title: '국내 스타벅스 매장 탐방',
    description: '전국 각지의 특별한 스타벅스 매장들을 만나보세요!',
    type: 'website',
    locale: 'ko_KR',
  },
  alternates: {
    canonical: '/starbucks/domestic',
  },
}

export default async function DomesticPage() {
  const result = await getDomesticPosts()
  const posts = result.posts || []

  if (!result.success) {
    return (
      <section className='text-center py-16'>
        <h1 className='text-2xl mb-4 font-human'>국내 스타벅스</h1>
        <p className='text-muted-foreground'>데이터를 불러오는 중 오류가 발생했습니다.</p>
      </section>
    )
  }

  return (
    <section>
      <div className='text-center mb-8'>
        <h1 className='text-2xl mb-2 font-human'>국내 스타벅스</h1>
        <p className='text-sm font-nanum text-muted-foreground'>
          전국 각지의 특별한 스타벅스 매장들을 만나보세요! <br />
          독특한 인테리어와 아름다운 경관을 자랑하는 매장들의 이야기를 들려드립니다.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className='text-center py-12'>
          <p className='text-muted-foreground'>아직 등록된 매장이 없습니다.</p>
        </div>
      ) : (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map((post: PostData) => {
            const displayImage =
              post.image ||
              (post.storeId?.images && post.storeId.images.length > 0
                ? post.storeId.images[0]
                : null) ||
              '/placeholder.svg?height=240&width=400'

            return (
              <article key={post._id}>
                <Link href={`/starbucks/domestic/${post.slug}`} className='block group'>
                  <Card className='overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 h-full'>
                    <div className='relative overflow-hidden'>
                      <Image
                        src={displayImage}
                        alt={`${post.title} 스타벅스 매장 내부 모습`}
                        width={400}
                        height={300}
                        className='w-full h-60 object-cover'
                        priority={posts.indexOf(post) < 6}
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />

                      {post.title.includes('DT') && (
                        <Badge
                          className='absolute top-3 right-3 backdrop-blur-sm bg-green-500/90 text-white shadow-sm'
                          variant='secondary'
                        >
                          Drive Thru
                        </Badge>
                      )}
                    </div>

                    <CardHeader>
                      <CardTitle className='text-xl line-clamp-1 group-hover:text-primary transition-colors font-nanum'>
                        {post.title}
                      </CardTitle>
                      <CardDescription className='leading-6 line-clamp-2'>
                        {post.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className='flex flex-wrap gap-1'>
                        {post.storeId.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant='outline'
                            className='text-xs hover:bg-primary/10 transition-colors'
                          >
                            #{tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant='outline' className='text-xs'>
                            +{post.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter className='pb-6'>
                      <div className='flex items-center justify-between w-full text-sm text-muted-foreground'>
                        <div className='flex items-center gap-4'>
                          <div className='flex items-center gap-1'>
                            <Eye className='w-4 h-4' />
                            <span className='text-xs font-medium'>
                              {post.numViews?.toLocaleString() || 0}
                            </span>
                          </div>
                          <div className='flex items-center gap-1'>
                            <Heart className='w-4 h-4' />
                            <span className='text-xs font-medium'>{post.numLikes || 0}</span>
                          </div>
                        </div>
                        <div className='flex items-center gap-1'>
                          <Fan className='w-4 h-4' />
                          <span className='text-xs font-medium'>{post.author}</span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </article>
            )
          })}
        </section>
      )}
    </section>
  )
}
