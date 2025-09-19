'use client'

import React, { useState } from 'react'
import YouTube from 'react-youtube'
import { useMusicPlayer } from '@/context/music-context'
import { useRouter } from 'next/navigation'
import {
  StepBack,
  StepForward,
  CirclePlay,
  CirclePause,
  ListMusic,
  CopyMinus,
  CopyPlus,
} from 'lucide-react'

const normalOpts = {
  width: '500',
  height: '281',
  playerVars: {
    autoplay: 1,
    controls: 0,
    modestbranding: 1,
    rel: 0,
  },
}

const smallOpts = {
  width: '124',
  height: '70',
  playerVars: {
    autoplay: 1,
    controls: 0,
    modestbranding: 1,
    rel: 0,
  },
}

export default function MusicPlayer() {
  const {
    currentSong,
    nextSong,
    prevSong,
    isPlaying,
    togglePlay,
    setInstance,
  } = useMusicPlayer()
  const router = useRouter()
  const [isSmall, setIsSmall] = useState(false)

  if (!currentSong) return null

  return (
    <div className={`music__player${isSmall ? ' small' : ''}`}>
      {/* 유튜브 플레이어 */}
      <div className='music__youtube group'>
        <YouTube
          videoId={currentSong.youtubeID}
          opts={isSmall ? smallOpts : normalOpts}
          onReady={(event) => setInstance(event.target)}
          onEnd={nextSong}
        />
        {!isSmall ? (
          <CopyMinus
            className='w-5 h-5 absolute right-1 top-1 text-white cursor-pointer opacity-0 group-hover:opacity-100'
            onClick={() => setIsSmall(true)}
          />
        ) : (
          <CopyPlus
            className='w-5 h-5 absolute right-1 top-1 text-white cursor-pointer opacity-0 group-hover:opacity-100'
            onClick={() => setIsSmall(false)}
          />
        )}
      </div>

      {/* 뮤직 컨트롤 */}
      <div className='music__control'>
        <div className='left'>
          <p>{currentSong.title}</p>
          <p>{currentSong.artist}</p>
        </div>
        <div className='center'>
          <button onClick={prevSong} className='btn' aria-label='이전 곡'>
            <StepBack className='w-6 h-6' />
          </button>
          <button
            className='btn'
            onClick={togglePlay}
            aria-label={isPlaying ? '일시정지' : '재생'}
          >
            {isPlaying ? (
              <CirclePause className='w-7 h-7' />
            ) : (
              <CirclePlay className='w-7 h-7' />
            )}
          </button>
          <button onClick={nextSong} className='btn' aria-label='다음 곡'>
            <StepForward className='w-6 h-6' />
          </button>
        </div>
        <div className='right'>
          <button
            className='bg-accent p-2 rounded-full cursor-pointer'
            aria-label='재생목록 보기'
            onClick={() => router.push('/myplay')}
          >
            <ListMusic className='w-5 h-5' />
          </button>
        </div>
      </div>
    </div>
  )
}
