import Image from 'next/image'
import { getPostBySlug, incrementViews } from '@/lib/actions/post.action'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Eye, Heart, MapPin, Car, Calendar, Phone, Building, Images } from 'lucide-react'
import { CommentForm } from '@/components/comment/comment-form'
import { auth } from '@/auth'

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const result = await getPostBySlug(params.slug)

  if (!result.success || !result.post) {
    return {
      title: '페이지를 찾을 수 없습니다',
    }
  }

  const post = result.post

  return {
    title: `${post.title} | 국내 스타벅스 매장 탐방`,
    description: post.description || `${post.title}`,
    keywords: `${post.title}, 스타벅스, ${post.storeId?.location}, 카페, 커피`,
  }
}

export default async function DomesticDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const result = await getPostBySlug(params.slug)
  const session = await auth()

  if (!result.success || !result.post) {
    notFound()
  }

  const post = result.post

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

            {/* 매장 정보 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl flex items-center gap-2'>
                  <Building className='w-5 h-5' />
                  매장 정보
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                {/* 매장 설명 */}
                {post.description && (
                  <div className='flex items-baseline gap-2'>
                    <h3 className='font-semibold text-lg mb-2'>{post.title}</h3>
                    <p className='text-muted-foreground leading-relaxed'>{post.description}</p>
                  </div>
                )}

                {/* 매장 상세 정보 */}
                <div className='grid gap-4 md:grid-cols-2'>
                  {/* 주소 */}
                  {post.storeId?.address && (
                    <div className='flex items-start gap-3 p-3 rounded-lg bg-muted/50'>
                      <MapPin className='w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0' />
                      <div>
                        <h4 className='font-medium text-sm text-muted-foreground mb-1'>주소</h4>
                        <p className='text-sm'>{post.storeId.address}</p>
                      </div>
                    </div>
                  )}

                  {/* 위치 */}
                  {post.storeId?.location && (
                    <div className='flex items-start gap-3 p-3 rounded-lg bg-muted/50'>
                      <MapPin className='w-5 h-5 text-green-600 mt-0.5 flex-shrink-0' />
                      <div>
                        <h4 className='font-medium text-sm text-muted-foreground mb-1'>위치</h4>
                        <p className='text-sm'>{post.storeId.location}</p>
                      </div>
                    </div>
                  )}

                  {/* 오픈일 */}
                  {post.storeId?.since && (
                    <div className='flex items-start gap-3 p-3 rounded-lg bg-muted/50'>
                      <Calendar className='w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0' />
                      <div>
                        <h4 className='font-medium text-sm text-muted-foreground mb-1'>오픈일</h4>
                        <p className='text-sm'>{post.storeId.since}</p>
                      </div>
                    </div>
                  )}

                  {/* 연락처 */}
                  {post.storeId?.phone && (
                    <div className='flex items-start gap-3 p-3 rounded-lg bg-muted/50'>
                      <Phone className='w-5 h-5 text-red-600 mt-0.5 flex-shrink-0' />
                      <div>
                        <h4 className='font-medium text-sm text-muted-foreground mb-1'>연락처</h4>
                        <p className='text-sm'>{post.storeId.phone}</p>
                      </div>
                    </div>
                  )}

                  {/* 주차 정보 */}
                  {post.storeId?.parking && (
                    <div className='flex items-start gap-3 p-3 rounded-lg bg-muted/50 md:col-span-2'>
                      <Car className='w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0' />
                      <div>
                        <h4 className='font-medium text-sm text-muted-foreground mb-1'>주차</h4>
                        <p className='text-sm'>{post.storeId.parking}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

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
                <CardHeader className='text-xl flex items-center gap-2'>
                  <Images className='w-5 h-5' />
                  <CardTitle className='text-xl'>매장 갤러리</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {post.storeId.images.slice(1).map((image: string, index: number) => (
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

            {/* 포스트 태그 */}
            {post.tags && post.tags.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className='text-xl'>태그</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-wrap gap-2'>
                    {post.tags.map((tag: string, index: number) => (
                      <Badge key={`post-${tag}-${index}`} variant='outline'>
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 댓글 작성 */}
            <CommentForm postId={post._id} session={session} />
          </div>
        </div>
        <div className='detail__side'>
          <div className='h-[300px] bg-amber-100 rounded-2xl'></div>
        </div>
      </div>
    </section>
  )
}
