import React from 'react'
import Image from 'next/image'
import { useMusicPlayer } from '@/context/music-context'
import { CirclePlay } from 'lucide-react'

export default function MusicMylist() {
  const { playlist, setCurrentSongIndex, currentSong } = useMusicPlayer()

  return (
    <ul className='border-t'>
      {playlist.map((item, index) => {
        const isCurrentPlaying = item.youtubeID === currentSong?.youtubeID

        return (
          <li
            key={index}
            className='music__list group cursor-pointer'
            onClick={() => setCurrentSongIndex(index)}
          >
            <div className='music__image'>
              <Image src={item.image} width={80} height={80} alt={item.title} />
              <div
                className={`bg group-hover:opacity-100 ${
                  isCurrentPlaying ? 'opacity-100 bg-red-500/70' : ''
                }`}
              >
                <CirclePlay />
              </div>
            </div>
            <div className='music__ranking'>
              <span>{index + 1}</span>
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
