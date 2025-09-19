'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface Song {
  youtubeId: string
  title: string
  artist: string
}

interface MusicContextProps {
  playlist: Song[] // 재생 목록 (플레이리스트)
  currentSong?: Song // 현재 재생 중인 곡 정보
  addToTopList: (song: Song) => void // 노래를 플레이리스트 맨 위에 추가
}

const MusicContext = createContext<MusicContextProps | undefined>(undefined)

export function MusicProvider({ children }: { children: ReactNode }) {
  const [playlist, setPlaylist] = useState<Song[]>([])

  const currentSong = playlist[0]

  // 플레이리스트 맨 위에 곡 추가 후 재생
  const addToTopList = (song: Song) => {
    setPlaylist((prev) => [song, ...prev]) // 새 곡을 리스트 맨 위에 추가
  }

  return (
    <MusicContext.Provider
      value={{
        playlist,
        currentSong,
        addToTopList,
      }}
    >
      {children}
    </MusicContext.Provider>
  )
}

export function usePlayer() {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider')
  }
  return context
}
