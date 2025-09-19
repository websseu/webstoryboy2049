import React from 'react'
import { fetchWorldData } from '@/hook/fetch-music'
import MusicList from '@/components/music/music-list'

export default async function HomePage() {
  const chartData = await fetchWorldData('youtube', 'global', '2025-07-15')

  return (
    <div className='text-center mb-8'>
      <h1 className='font-gmarket text-2xl font-bold text-gray-900 my-2 mt-8'>
        글로벌 뮤직 챠트
      </h1>
      <p className='text-muted-foreground font-nanum text-sm mb-6'>
        전세계 뮤직 챠트 100을 발견하다.
      </p>

      {/* 뮤직 순위 */}
      <MusicList chartData={chartData} />
    </div>
  )
}
