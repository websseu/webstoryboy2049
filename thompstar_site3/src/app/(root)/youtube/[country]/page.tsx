import React from 'react'
import { fetchWorldData } from '@/lib/fetch'
import { getDayFormatted } from '@/lib/utils'
import { youtubeCountry } from '@/lib/menu'
import MusicList from '@/components/music/music-list'
import MusicCountry from '@/components/music/music-country'
import MusicCalendar from '@/components/music/music-calendar'

export async function generateMetadata(props: {
  params: Promise<{ country: string }>
}) {
  const { country } = await props.params
  const countryInfo = youtubeCountry.find((c) => c.name === country)
  const countryKorean = countryInfo ? countryInfo.nameKorean : country
  return {
    title: `유튜브 ${countryKorean} 차트 Top 100`,
    description: `${countryKorean}의 유튜브 인기 음악 순위 Top 100을 실시간으로 확인하세요. 최신 트렌드와 인기곡을 한눈에!`,
  }
}

export default async function YoutubeChart(props: {
  params: Promise<{ country: string }>
  searchParams: Promise<{ date?: string }>
}) {
  const { country } = await props.params
  const { date } = await props.searchParams
  const day = date || getDayFormatted()
  const chartData = await fetchWorldData('youtube', country, day)
  const countryKorean =
    youtubeCountry.find((c) => c.name === country)?.nameKorean ?? country

  return (
    <>
      <div className='text-center'>
        <h1 className='text-2xl font-gmarket my-12'>
          유튜브 {countryKorean} 뮤직 순위
        </h1>
      </div>
      <div className='flex gap-2'>
        {/* 나라별 셀렉트 */}
        <MusicCountry country={country} />
        {/* 날짜별 셀렉트 */}
        <MusicCalendar country={country} date={day} />
      </div>
      {/* 뮤직 리스트 */}
      <MusicList chartData={chartData} />
    </>
  )
}
