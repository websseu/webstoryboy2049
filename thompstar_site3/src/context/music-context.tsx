'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { YouTubePlayer } from 'react-youtube'

// Song 타입 정의 (플레이리스트에 담길 곡 정보)
export interface Song {
  title: string
  artist: string
  image: string
  youtubeID: string
}

interface MusicPlayerContextProps {
  playlist: Song[] // 재생 목록
  currentIndex: number // 현재 재생 중인 곡의 인덱스
  currentSong?: Song // 현재 재생 중인 곡 정보
  addToTopList: (song: Song) => void // 곡을 맨 위에 추가
  addToBottomList: (song: Song) => void // 곡을 맨 아래에 추가
  nextSong: () => void // 다음 곡 재생
  prevSong: () => void // 이전 곡 재생
  setCurrentSongIndex: (index: number) => void // 특정 곡을 바로 재생
  isPlaying: boolean // 현재 재생 여부 (true = 재생 중, false = 정지)
  togglePlay: () => void // 플레이/정지 토글
  setInstance: (player: YouTubePlayer) => void // YouTube 플레이어 인스턴스 저장
}

const MusicPlayerContext = createContext<MusicPlayerContextProps | undefined>(
  undefined
)

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const [playlist, setPlaylist] = useState<Song[]>([])
  const [currentIndex, setCurrentIndex] = useState<number>(-1)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [instance, setInstance] = useState<YouTubePlayer | null>(null)

  // 현재 재생 중인 곡 정보
  const currentSong =
    currentIndex >= 0 && currentIndex < playlist.length
      ? playlist[currentIndex]
      : undefined

  // 곡을 맨 위에 추가
  const addToTopList = (song: Song) => {
    setPlaylist((prev) => [song, ...prev])
    setCurrentIndex(0)
  }

  // 곡을 맨 아래에 추가
  const addToBottomList = (song: Song) => {
    setPlaylist((prev) => {
      const newList = [...prev, song]
      // 재생 중인 곡이 없으면 바로 재생 시작
      if (currentIndex < 0) setCurrentIndex(0)
      return newList
    })
  }

  // 다음 곡 재생
  const nextSong = () => {
    setCurrentIndex((prev) => (prev < playlist.length - 1 ? prev + 1 : prev))
  }

  // 이전 곡 재생
  const prevSong = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  // 특정 곡을 바로 재생
  const setCurrentSongIndex = (index: number) => {
    if (index >= 0 && index < playlist.length) {
      setCurrentIndex(index)
    }
  }

  // 플레이/정지 토글 기능
  const togglePlay = () => {
    setIsPlaying((prev) => {
      const next = !prev
      if (instance) {
        if (next) {
          instance.playVideo() // YouTube 플레이어 재생
        } else {
          instance.pauseVideo() // YouTube 플레이어 정지
        }
      }
      return next
    })
  }

  return (
    <MusicPlayerContext.Provider
      value={{
        playlist,
        currentIndex,
        currentSong,
        addToTopList,
        addToBottomList,
        nextSong,
        prevSong,
        setCurrentSongIndex,
        isPlaying,
        togglePlay,
        setInstance,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  )
}

export function useMusicPlayer() {
  const context = useContext(MusicPlayerContext)
  if (!context)
    throw new Error('useMusicPlayer must be used within MusicPlayerProvider')
  return context
}
