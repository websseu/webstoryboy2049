/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { getRunningStats } from '@/lib/actions/running-record.action'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Activity, Plus, Calendar, Target, Clock, TrendingUp, MapPin, Zap } from 'lucide-react'

export default async function RecordsPage() {
  const session = await auth()

  if (!session?.user?.id) {
    redirect('/auth/signin')
  }

  const userId = session.user.id
  const statsResult = await getRunningStats(userId)
  const stats = statsResult.success ? statsResult.stats : null
  const recentRecords = statsResult.success ? statsResult.recentRecords : []
  const monthlyStats = statsResult.success ? statsResult.monthlyStats : []

  const formatTime = (timeStr: string) => {
    const [hours, minutes, seconds] = timeStr.split(':')
    if (hours === '0' || hours === '00') {
      return `${minutes}:${seconds}`
    }
    return timeStr
  }

  const getDifficultyColor = (difficulty: number) => {
    const colors = {
      1: 'bg-green-100 text-green-800',
      2: 'bg-blue-100 text-blue-800',
      3: 'bg-yellow-100 text-yellow-800',
      4: 'bg-orange-100 text-orange-800',
      5: 'bg-red-100 text-red-800',
    }
    return colors[difficulty as keyof typeof colors] || colors[3]
  }

  const getFeelingEmoji = (feeling: number) => {
    const emojis = { 1: '😫', 2: '😕', 3: '😐', 4: '😊', 5: '🤩' }
    return emojis[feeling as keyof typeof emojis] || '😐'
  }

  return (
    <div className='container mx-auto px-4 py-8 max-w-6xl'>
      {/* 헤더 */}
      <div className='flex justify-between items-center mb-8'>
        <div>
          <h1 className='text-3xl font-bold mb-2'>🏃‍♂️ 나의 달리기 기록</h1>
          <p className='text-gray-600'>달리기 기록을 관리하고 성장을 확인하세요</p>
        </div>
        <Button asChild>
          <Link href='/records/new'>
            <Plus className='h-4 w-4 mr-2' />새 기록 작성
          </Link>
        </Button>
      </div>

      {/* 통계 카드 */}
      {stats && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-gray-600'>총 기록 수</p>
                  <p className='text-2xl font-bold'>{stats.totalRecords}</p>
                </div>
                <Activity className='h-8 w-8 text-blue-600' />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-gray-600'>총 거리</p>
                  <p className='text-2xl font-bold'>{stats.totalDistance.toFixed(1)}km</p>
                </div>
                <Target className='h-8 w-8 text-green-600' />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-gray-600'>평균 거리</p>
                  <p className='text-2xl font-bold'>{stats.avgDistance.toFixed(1)}km</p>
                </div>
                <TrendingUp className='h-8 w-8 text-purple-600' />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-gray-600'>평균 만족도</p>
                  <p className='text-2xl font-bold'>
                    {getFeelingEmoji(Math.round(stats.avgFeeling))}
                  </p>
                </div>
                <Zap className='h-8 w-8 text-yellow-600' />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* 최근 기록 */}
        <div className='lg:col-span-2'>
          <Card>
            <CardHeader>
              <div className='flex justify-between items-center'>
                <CardTitle className='flex items-center gap-2'>
                  <Clock className='h-5 w-5' />
                  최근 기록
                </CardTitle>
                <Button variant='outline' size='sm' asChild>
                  <Link href='/records/list'>전체보기</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {recentRecords.length > 0 ? (
                <div className='space-y-4'>
                  {recentRecords.map((record: any) => (
                    <Link key={record._id} href={`/records/${record._id}`}>
                      <div className='p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer'>
                        <div className='flex justify-between items-start mb-2'>
                          <h3 className='font-semibold'>{record.title}</h3>
                          <div className='flex items-center gap-2'>
                            <Badge className={getDifficultyColor(record.difficulty)}>
                              난이도 {record.difficulty}
                            </Badge>
                            <span className='text-2xl'>{getFeelingEmoji(record.feeling)}</span>
                          </div>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600'>
                          <div className='flex items-center gap-1'>
                            <Calendar className='h-4 w-4' />
                            {new Date(record.date).toLocaleDateString()}
                          </div>
                          <div className='flex items-center gap-1'>
                            <Target className='h-4 w-4' />
                            {record.targetDistance}km
                          </div>
                          <div className='flex items-center gap-1'>
                            <Clock className='h-4 w-4' />
                            {formatTime(record.actualTime)}
                          </div>
                          {record.location && (
                            <div className='flex items-center gap-1'>
                              <MapPin className='h-4 w-4' />
                              {record.location}
                            </div>
                          )}
                        </div>
                        {record.pace && (
                          <div className='mt-2'>
                            <Badge variant='outline'>페이스: {record.pace}/km</Badge>
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className='text-center py-8'>
                  <Activity className='h-12 w-12 text-gray-300 mx-auto mb-4' />
                  <p className='text-gray-500 mb-4'>아직 기록이 없습니다.</p>
                  <Button asChild>
                    <Link href='/records/new'>첫 기록 작성하기</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* 월별 통계 */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <TrendingUp className='h-5 w-5' />
                월별 통계
              </CardTitle>
            </CardHeader>
            <CardContent>
              {monthlyStats.length > 0 ? (
                <div className='space-y-3'>
                  {monthlyStats.map((stat: any) => (
                    <div
                      key={`${stat._id.year}-${stat._id.month}`}
                      className='flex justify-between items-center'
                    >
                      <span className='text-sm font-medium'>
                        {stat._id.year}년 {stat._id.month}월
                      </span>
                      <div className='text-right'>
                        <div className='text-sm font-semibold'>{stat.count}회</div>
                        <div className='text-xs text-gray-500'>
                          {stat.totalDistance.toFixed(1)}km
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className='text-gray-500 text-center py-4'>통계 데이터가 없습니다.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
