'use client'

import React from 'react'
import Image from 'next/image'
import { CirclePlay } from 'lucide-react'
import { useMusicPlayer } from '@/context/music-context'
import { getSimpleRankChange } from '@/lib/utils'
import { MusicData } from '@/lib/type'

interface MusicListProps {
  chartData: MusicData[]
}

export default function MusicList({ chartData }: MusicListProps) {
  const { addToTopList, currentSong } = useMusicPlayer()

  const handleMusicClick = (item: MusicData) => {
    if (item.youtubeID) {
      addToTopList({
        title: item.title,
        artist: item.artist,
        image: item.image,
        youtubeID: item.youtubeID,
      })
    }
  }

  if (!chartData || chartData.length === 0) {
    return (
      <div className='text-center border-t pt-34 text-muted-foreground font-nanum'>
        해당 날짜에는 뮤직 데이터가 없습니다. 😂
        <br />
        다른 날짜를 선택해주세요!
      </div>
    )
  }

  return (
    <ul className='border-t'>
      {chartData.map((item) => {
        const rankChange = getSimpleRankChange(item)
        const isCurrentPlaying = item.youtubeID === currentSong?.youtubeID

        return (
          <li
            key={item.youtubeID}
            className='music__list group cursor-pointer hover:bg-gray-50 transition-colors duration-200'
            onClick={() => handleMusicClick(item)}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleMusicClick(item)
              }
            }}
            aria-label={`${item.title} by ${item.artist} 재생`}
          >
            <div className='music__image'>
              <Image
                src={item.image || '/placeholder.svg'}
                width={80}
                height={80}
                alt={`${item.title} 앨범 커버`}
                className='rounded-md'
                loading='lazy'
              />
              <div
                className={`bg group-hover:opacity-100 ${
                  isCurrentPlaying ? 'opacity-100 bg-red-500/70' : ''
                }`}
              >
                <CirclePlay />
              </div>
            </div>

            <div className='music__ranking'>
              <span>{item.ranking}</span>
              <span className={`text-xs ${rankChange.color}`}>
                {rankChange.label}
              </span>
            </div>

            <div className='music__title'>
              <p>{item.title}</p>
              <p>{item.artist}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
