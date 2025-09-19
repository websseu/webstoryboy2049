import type { Metadata } from 'next'
import Image from 'next/image'
import { getPostBySlug, incrementViews } from '@/lib/actions/post.action'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Eye, Heart } from 'lucide-react'

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
  updatedAt?: string | Date
  storeId: StoreData
}

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const result = await getPostBySlug(params.slug)

  if (!result.success || !result.post) {
    return {
      title: '페이지를 찾을 수 없습니다',
    }
  }

  const post = result.post as PostData

  return {
    title: `${post.title} | 국내 스타벅스 매장 탐방`,
    description: post.description || `${post.title}`,
    keywords: `${post.title}, 스타벅스, ${post.storeId?.location}, 카페, 커피`,
  }
}

export default async function DomesticDetailPage({ params }: PageProps) {
  const result = await getPostBySlug(params.slug)

  if (!result.success || !result.post) {
    notFound()
  }

  const post = result.post as PostData

  // 조회수 증가
  await incrementViews(params.slug)

  // 이미지 우선순위
  const displayImage =
    post.image ||
    (post.storeId?.images && post.storeId.images.length > 0 ? post.storeId.images[0] : null) ||
    '/placeholder.svg?height=400&width=800'

  return (
    <section>
      <div className='detail__layout'>
        <div className='detail__content'>
          <div className='lg:col-span-2 space-y-6'>
            {/* 헤더 이미지 */}
            <div className='relative w-full h-96 rounded-lg overflow-hidden'>
              <Image
                src={displayImage || '/placeholder.svg'}
                alt={`${post.title} 매장 이미지`}
                fill
                sizes='(max-width: 1024px) 100vw, 66vw'
                className='object-cover'
                priority
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
              <div className='absolute bottom-4 left-4 right-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <Badge variant='secondary' className='bg-white/90 text-foreground'>
                    {post.category === 'domestic' ? '국내' : post.category}
                  </Badge>
                  {(post.tags.includes('DT') || post.storeId?.tags?.includes('DT')) && (
                    <Badge className='bg-green-500/90 text-white'>Drive Thru</Badge>
                  )}
                </div>
                <h1 className='text-3xl font-bold text-white mb-2'>{post.title}</h1>
                <div className='flex items-center gap-4 text-white/90 text-sm'>
                  <div className='flex items-center gap-1'>
                    <Eye className='w-4 h-4' />
                    <span>{post.numViews?.toLocaleString() || 0}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Heart className='w-4 h-4' />
                    <span>{post.numLikes || 0}</span>
                  </div>
                  <span>by {post.author}</span>
                </div>
              </div>
            </div>

            {/* 매장 설명 */}
            {post.description && (
              <Card>
                <CardHeader>
                  <CardTitle className='text-xl'>매장 소개</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground leading-relaxed'>{post.description}</p>
                </CardContent>
              </Card>
            )}

            {/* 상세 내용 */}
            {post.contents && post.contents !== post.description && (
              <Card>
                <CardHeader>
                  <CardTitle className='text-xl'>상세 정보</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='prose prose-sm max-w-none'>
                    <p className='whitespace-pre-wrap leading-relaxed'>{post.contents}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 매장 이미지 갤러리 */}
            {post.storeId?.images && post.storeId.images.length > 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className='text-xl'>매장 갤러리</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {post.storeId.images.slice(1).map((image, index) => (
                      <div
                        key={index}
                        className='relative aspect-square rounded-lg overflow-hidden'
                      >
                        <Image
                          src={image || '/placeholder.svg'}
                          alt={`${post.title} 매장 이미지 ${index + 2}`}
                          fill
                          sizes='(max-width: 768px) 50vw, 33vw'
                          className='object-cover hover:scale-105 transition-transform duration-300'
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 태그 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>태그</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2'>
                  {[...post.tags, ...(post.storeId?.tags || [])].map((tag, index) => (
                    <Badge key={`${tag}-${index}`} variant='outline'>
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='detail__side'>detail__side</div>
      </div>
    </section>
  )
}
