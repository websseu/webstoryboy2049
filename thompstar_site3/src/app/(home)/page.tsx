import React from 'react'
import MusicList from '@/components/music/music-list'
import { fetchWorldData } from '@/lib/fetch'

export default async function HomePage() {
  const chartData = await fetchWorldData('youtube', 'global', '2025-07-15')

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
