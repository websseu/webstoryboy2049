import React from 'react'
import Link from 'next/link'
import { getMarathonBySlug } from '@/lib/actions/marathon.action'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { notFound } from 'next/navigation'
import { auth } from '@/auth'
import { getFavoriteStatus } from '@/lib/actions/favorite.action'
import ShareDialog from '@/components/dialog/dialog-share'
import FavoriteButton from '@/components/ui/favorite-button'
import {
  ArrowLeft,
  Building,
  Calendar,
  Clock,
  Heart,
  MapPin,
  Route,
  Star,
  Trophy,
  Users,
} from 'lucide-react'
import CommentSection from '@/components/comments/comment-section'

interface MarathonDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function MarathonDetailPage({ params }: MarathonDetailPageProps) {
  const { slug } = await params
  const result = await getMarathonBySlug(slug)

  if (!result.success) {
    notFound()
  }

  const marathon = result.marathon

  // 현재 로그인한 사용자 정보 가져오기
  const session = await auth()
  const userId = session?.user?.id

  // 사용자의 즐겨찾기 상태 확인
  let favoriteStatus = { isFavorited: false }
  if (userId) {
    const favoriteResult = await getFavoriteStatus(userId, marathon._id)
    favoriteStatus = favoriteResult
  }

  return (
    <>
      {/* 헤더 */}
      <div className='border-b sticky top-0 z-10 bg-white/80 backdrop-blur-md'>
        <div className='text-center py-4'>
          <Link
            href='/'
            className='w-10 h-10 rounded flex items-center justify-center absolute left-0 top-2.5 hover:bg-accent/50'
          >
            <ArrowLeft className='h-5 w-5' />
          </Link>
          <h1 className='text-lg font-nanum font-bold truncate mx-4 ml-10'>{marathon.name}</h1>
          <div className='absolute right-0 top-2.5 flex gap-1'>
            <ShareDialog
              url={`${process.env.NEXT_PUBLIC_APP_URL}/marathons/${marathon.slug}`}
              title={marathon.name}
              triggerClassName='hover:bg-blue-100/50 bg-blue-50/40'
            />

            <FavoriteButton
              marathonId={marathon._id}
              userId={userId}
              initialFavorited={favoriteStatus.isFavorited}
            />
          </div>
        </div>
      </div>

      {/* 메인 이미지 */}
      <Card className='p-0 mt-6 border-none'>
        <CardContent className='px-0'>
          <div className='relative h-64 md:h-70 bg-gradient-to-r from-blue-500 to-purple-600 rounded'>
            <div className='absolute bottom-8 left-8 right-8 text-white'>
              <p className='opacity-90 text-sm'>{marathon.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 대회 정보 */}
      <Card className='gap-2 mt-4'>
        <CardHeader>
          <CardTitle className='font-gmarket text-blue-700 text-xl mb-4'>대회 정보</CardTitle>
        </CardHeader>
        <CardContent className='space-y-3'>
          {/* 대회명 */}
          <div className='flex items-center gap-2'>
            <Trophy className='h-4 w-4 text-yellow-600 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>대회명:</span>
              <span className='ml-2 text-gray-900 break-words'>{marathon.name}</span>
            </div>
          </div>

          <Separator />

          {/* 대회 시작일 */}
          <div className='flex items-center gap-2'>
            <Clock className='h-4 w-4 text-green-600 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>대회 시작일:</span>
              <span className='ml-2 text-gray-900'>{marathon.startDate}</span>
            </div>
          </div>

          <Separator />

          {/* 접수 기간 */}
          {marathon.regDate && (
            <>
              <div className='flex items-center gap-2'>
                <Calendar className='h-4 w-4 text-orange-600 flex-shrink-0' />
                <div className='min-w-0 flex-1'>
                  <span className='font-medium text-gray-700'>접수 기간:</span>
                  <span className='ml-2 text-gray-900 break-words'>{marathon.regDate}</span>
                </div>
              </div>
            </>
          )}

          <Separator />

          {/* 장소 */}
          <div className='flex items-center gap-2'>
            <MapPin className='h-4 w-4 text-red-600 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>장소:</span>
              <span className='ml-2 text-gray-900 break-words'>{marathon.location}</span>
            </div>
          </div>

          <Separator />

          {/* 규모 */}
          <div className='flex items-center gap-2'>
            <Users className='h-4 w-4 text-green-600 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>규모:</span>
              <span className='ml-2 text-gray-900'>{marathon.scale.toLocaleString()}명</span>
            </div>
          </div>

          <Separator />

          {/* 주최자 */}
          <div className='flex items-center gap-2'>
            <Building className='h-4 w-4 text-indigo-600 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>주최자:</span>
              <span className='ml-2 text-gray-900 break-words'>{marathon.organizer}</span>
            </div>
          </div>

          <Separator />

          {/* 스폰서 */}
          {marathon.sponsor && (
            <>
              <div className='flex items-center gap-2'>
                <Heart className='h-4 w-4 text-pink-600 flex-shrink-0' />
                <div className='min-w-0 flex-1'>
                  <span className='font-medium text-gray-700'>스폰서:</span>
                  <span className='ml-2 text-gray-900 break-words'>{marathon.sponsor}</span>
                </div>
              </div>
            </>
          )}

          <Separator />

          {/* 코스 */}
          <div className='flex items-start gap-2'>
            <Route className='h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0' />
            <div className='min-w-0 flex-1'>
              <span className='font-medium text-gray-700'>코스:</span>
              <span className='ml-2 text-gray-900 break-words'>{marathon.courses.join(', ')}</span>
            </div>
          </div>

          <Separator />

          {/* 주요 특징 */}
          {marathon.highlights && marathon.highlights.length > 0 && (
            <>
              <div className='flex items-start gap-2'>
                <Star className='h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0' />
                <div className='min-w-0 flex-1'>
                  <span className='font-medium text-gray-700'>주요 특징:</span>
                  <span className='ml-2 text-gray-900 break-words'>
                    {marathon.highlights.join(', ')}
                  </span>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* 댓글 */}
      <CommentSection
        marathonId={marathon._id}
        userId={session?.user?.id}
        userImage={session?.user?.image ?? undefined}
        userName={session?.user?.name ?? undefined}
        initialCommentCount={marathon.commentCount || 0}
      />
    </>
  )
}
