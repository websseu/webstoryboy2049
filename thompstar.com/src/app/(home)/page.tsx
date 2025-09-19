import React from 'react'
import { fetchYoutubeData } from '@/lib/fetch'
import MusicList from '@/components/music/music-list'

export default async function HomePage() {
  const chartData = await fetchYoutubeData('global', '2025-07-15')

  return (
    <>
      <div className='text-center'>
        <h1 className='text-2xl font-gmarket my-12'>글로벌 뮤직 순위</h1>
      </div>

      {/* 뮤직 순위 */}
      <MusicList chartData={chartData} />
    </>
  )
}
