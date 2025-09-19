'use client'

import React from 'react'
import { usePlayer } from '@/context/player-context'
import YouTube from 'react-youtube'

export default function MusicPlayer() {
  const { currentSong } = usePlayer()

  if (!currentSong) return null

  return (
    <div className='fixed left-0 bottom-0'>
      <YouTube key={currentSong.youtubeId} videoId={currentSong.youtubeId} />
    </div>
  )
}
