'use client'

import React from 'react'
import Image from 'next/image'
import MusicPlayer from './music-player'
import { usePlayer } from '@/context/player-context'

interface MusicChartItem {
  ranking: string
  title: string
  artist: string
  image: string
  prev: string
  streak: string
  streams: string
  youtubeID?: string
}

interface MusicListProps {
  chartData: MusicChartItem[]
}

export default function MusicList({ chartData }: MusicListProps) {
  const { addToTopList } = usePlayer()

  const handleAddToTopList = (item: MusicChartItem) => {
    if (!item.youtubeID) return

    addToTopList({
      youtubeId: item.youtubeID,
      title: item.title,
      artist: item.artist,
    })
  }

  return (
    <>
      <div>
        <ul className='border-t'>
          {chartData.map((item) => (
            <li
              className='music__list cursor-pointer'
              key={item.ranking}
              onClick={() => handleAddToTopList(item)}
            >
              <div className='music__ranking'>{item.ranking}</div>
              <div className='music__image'>
                <Image
                  src={item.image}
                  width={80}
                  height={80}
                  alt={item.title}
                  className='rounded-md object-cover'
                />
              </div>
              <div className='music__title flex-1 min-w-0'>
                <p className='font-bold text-base truncate hover:text-blue-600 transition-colors duration-150'>
                  {item.title}
                </p>
                <p className='text-gray-500 text-xs mt-1 truncate'>
                  {item.artist}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
