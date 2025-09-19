/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { connectToDatabase } from '../db'
import Playlist from '../db/models/playlist.model'
import { ISong } from '../db/models/playlist.model'
import {
  IPlaylistInput,
  IPlaylistResponse,
  IPlaylistUpdateInput,
  ISongAddInput,
  ISongInput,
  ISongRemoveInput,
} from '../type'
import { PlaylistCreateSchema } from '../validator'

// 1. getPlaylist : 플레이리스트 가져오기
// 2. createPlaylist : 플레이리스트 생성
// 3. updatePlaylist : 플레이리스트 정보 업데이트
// 4. addSongToTop : 곡을 맨 위에 추가
// 5. addSongToBottom : 곡을 맨 아래에 추가
// 6. removeSong : 곡 제거
// 7. clearPlaylist : 플레이리스트 비우기
// 8. setCurrentSong : 현재 재생 곡 설정
// 9. togglePlayingState : 재생 상태 토글
// 10. deletePlaylist : 플레이리스트 삭제
// 11. saveCurrentPlaylistAs : 현재 재생목록을 새로운 플레이리스트로 저장
// 12. getUserPlaylists : 사용자의 모든 플레이리스트 가져오기
// 13. addCurrentSongsToPlaylist : 현재 재생목록을 기존 플레이리스트에 추가

// 플레이리스트 가져오기
export async function getPlaylist(userId: string): Promise<IPlaylistResponse> {
  try {
    // zod 유효성 검사
    const UserIdSchema = z.object({
      userId: z.string().min(1, '사용자 ID는 필수입니다.'),
    })
    const { userId: validUserId } = await UserIdSchema.parseAsync({ userId })

    // DB 접속
    await connectToDatabase()

    // 플레이리스트 찾기
    const playlist = await Playlist.findOne({
      userId: validUserId,
      isActive: true,
    })

    if (!playlist) {
      // 플레이리스트가 없으면 기본 플레이리스트 생성
      const newPlaylist = await Playlist.create({
        userId: validUserId,
        name: 'My Playlist',
        songs: [],
        currentIndex: -1,
        isPlaying: false,
        isActive: true,
      })

      return {
        success: true,
        message: '새 플레이리스트가 생성되었습니다.',
        playlist: JSON.parse(JSON.stringify(newPlaylist)),
      }
    }

    return {
      success: true,
      playlist: JSON.parse(JSON.stringify(playlist)),
    }
  } catch (error) {
    console.error('플레이리스트 조회 오류:', error)
    return {
      success: false,
      error: '플레이리스트를 불러오는 중 오류가 발생했습니다.',
    }
  }
}

// 플레이리스트 생성 (기존 createPlaylist 함수 개선)
export async function createPlaylist(
  formData: IPlaylistInput
): Promise<IPlaylistResponse> {
  try {
    // DB 접속
    await connectToDatabase()

    // zod 유효성 검사
    const { userId, name } = await PlaylistCreateSchema.parseAsync(formData)

    // 동일한 이름의 플레이리스트가 있는지 확인
    const existingPlaylist = await Playlist.findOne({
      userId,
      name,
      isActive: true,
    })

    if (existingPlaylist) {
      return {
        success: false,
        error: '이미 같은 이름의 플레이리스트가 존재합니다.',
      }
    }

    // 새 플레이리스트 생성
    const newPlaylist = await Playlist.create({
      userId,
      name,
      songs: [],
      currentIndex: -1,
      isPlaying: false,
      isActive: true,
    })

    // 캐시 갱신
    revalidatePath('/myplay')

    return {
      success: true,
      message: `"${name}" 플레이리스트가 성공적으로 생성되었습니다.`,
      playlist: JSON.parse(JSON.stringify(newPlaylist)),
    }
  } catch (error) {
    console.error('플레이리스트 생성 오류:', error)
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : '플레이리스트 생성 중 오류가 발생했습니다.',
    }
  }
}

// 플레이리스트 정보 업데이트
export async function updatePlaylist(
  data: IPlaylistUpdateInput
): Promise<IPlaylistResponse> {
  try {
    // zod 유효성 검사
    const PlaylistUpdateSchema = z.object({
      userId: z.string().min(1, '사용자 ID는 필수입니다.'),
      name: z
        .string()
        .min(1, '플레이리스트 이름은 필수입니다.')
        .max(100, '플레이리스트 이름이 너무 깁니다.')
        .optional(),
      currentIndex: z.number().min(-1, '잘못된 곡 인덱스입니다.').optional(),
      isPlaying: z.boolean().optional(),
    })
    const validData = await PlaylistUpdateSchema.parseAsync(data)

    // DB 접속
    await connectToDatabase()

    // 플레이리스트 찾기 및 업데이트
    const playlist = await Playlist.findOne({
      userId: validData.userId,
      isActive: true,
    })
    if (!playlist) {
      return {
        success: false,
        error: '플레이리스트를 찾을 수 없습니다.',
      }
    }

    // 업데이트할 필드들 설정
    if (validData.name !== undefined) playlist.name = validData.name
    if (validData.currentIndex !== undefined)
      playlist.currentIndex = validData.currentIndex
    if (validData.isPlaying !== undefined)
      playlist.isPlaying = validData.isPlaying

    await playlist.save()

    // 캐시 갱신
    revalidatePath('/')

    return {
      success: true,
      message: '플레이리스트가 성공적으로 업데이트되었습니다.',
      playlist: JSON.parse(JSON.stringify(playlist)),
    }
  } catch (error) {
    console.error('플레이리스트 업데이트 오류:', error)
    return {
      success: false,
      error: '플레이리스트 업데이트 중 오류가 발생했습니다.',
    }
  }
}

// 곡을 맨 위에 추가
export async function addSongToTop(
  data: ISongAddInput
): Promise<IPlaylistResponse> {
  try {
    // zod 유효성 검사
    const SongAddSchema = z.object({
      userId: z.string().min(1, '사용자 ID는 필수입니다.'),
      song: z.object({
        title: z.string().min(1, '곡 제목은 필수입니다.'),
        artist: z.string().min(1, '아티스트명은 필수입니다.'),
        image: z.string().url('올바른 이미지 URL이 아닙니다.'),
        youtubeID: z.string().min(1, 'YouTube ID는 필수입니다.'),
      }),
    })
    const { userId, song } = await SongAddSchema.parseAsync({
      ...data,
      position: 'top',
    })

    // DB 접속
    await connectToDatabase()

    // 플레이리스트 찾기
    const playlist = await Playlist.findOne({ userId, isActive: true })
    if (!playlist) {
      return {
        success: false,
        error: '플레이리스트를 찾을 수 없습니다.',
      }
    }

    // 중복 곡 확인
    const isDuplicate = playlist.songs.some(
      (existingSong: ISong) => existingSong.youtubeID === song.youtubeID
    )
    if (isDuplicate) {
      return {
        success: false,
        error: '이미 플레이리스트에 있는 곡입니다.',
      }
    }

    // 곡을 맨 위에 추가
    const songWithDate = { ...song, addedAt: new Date() }
    playlist.songs.unshift(songWithDate)
    playlist.currentIndex = 0 // 맨 위에 추가된 곡을 현재 곡으로 설정

    await playlist.save()

    // 캐시 갱신
    revalidatePath('/')

    return {
      success: true,
      message: `"${song.title}"이(가) 플레이리스트 맨 위에 추가되었습니다.`,
      playlist: JSON.parse(JSON.stringify(playlist)),
    }
  } catch (error) {
    console.error('곡 추가 오류:', error)
    return {
      success: false,
      error: '곡을 추가하는 중 오류가 발생했습니다.',
    }
  }
}

// 곡을 맨 아래에 추가
export async function addSongToBottom(
  data: ISongAddInput
): Promise<IPlaylistResponse> {
  try {
    // zod 유효성 검사
    const SongAddSchema = z.object({
      userId: z.string().min(1, '사용자 ID는 필수입니다.'),
      song: z.object({
        title: z.string().min(1, '곡 제목은 필수입니다.'),
        artist: z.string().min(1, '아티스트명은 필수입니다.'),
        image: z.string().url('올바른 이미지 URL이 아닙니다.'),
        youtubeID: z.string().min(1, 'YouTube ID는 필수입니다.'),
      }),
    })
    const { userId, song } = await SongAddSchema.parseAsync({
      ...data,
      position: 'bottom',
    })

    // DB 접속
    await connectToDatabase()

    // 플레이리스트 찾기
    const playlist = await Playlist.findOne({ userId, isActive: true })
    if (!playlist) {
      return {
        success: false,
        error: '플레이리스트를 찾을 수 없습니다.',
      }
    }

    // 중복 곡 확인
    const isDuplicate = playlist.songs.some(
      (existingSong: ISong) => existingSong.youtubeID === song.youtubeID
    )
    if (isDuplicate) {
      return {
        success: false,
        error: '이미 플레이리스트에 있는 곡입니다.',
      }
    }

    // 곡을 맨 아래에 추가
    const songWithDate = { ...song, addedAt: new Date() }
    playlist.songs.push(songWithDate)

    // 재생 중인 곡이 없으면 첫 번째 곡으로 설정
    if (playlist.currentIndex < 0 && playlist.songs.length === 1) {
      playlist.currentIndex = 0
    }

    await playlist.save()

    // 캐시 갱신
    revalidatePath('/')

    return {
      success: true,
      message: `"${song.title}"이(가) 플레이리스트에 추가되었습니다.`,
      playlist: JSON.parse(JSON.stringify(playlist)),
    }
  } catch (error) {
    console.error('곡 추가 오류:', error)
    return {
      success: false,
      error: '곡을 추가하는 중 오류가 발생했습니다.',
    }
  }
}

// 곡 제거
export async function removeSong(
  data: ISongRemoveInput
): Promise<IPlaylistResponse> {
  try {
    // zod 유효성 검사
    const SongRemoveSchema = z.object({
      userId: z.string().min(1, '사용자 ID는 필수입니다.'),
      songIndex: z.number().min(0, '잘못된 곡 인덱스입니다.'),
    })
    const { userId, songIndex } = await SongRemoveSchema.parseAsync(data)

    // DB 접속
    await connectToDatabase()

    // 플레이리스트 찾기
    const playlist = await Playlist.findOne({ userId, isActive: true })
    if (!playlist) {
      return {
        success: false,
        error: '플레이리스트를 찾을 수 없습니다.',
      }
    }

    // 인덱스 유효성 확인
    if (songIndex >= playlist.songs.length) {
      return {
        success: false,
        error: '잘못된 곡 인덱스입니다.',
      }
    }

    // 제거할 곡 정보 저장
    const removedSong = playlist.songs[songIndex]

    // 곡 제거
    playlist.songs.splice(songIndex, 1)

    // currentIndex 조정
    if (songIndex < playlist.currentIndex) {
      playlist.currentIndex = playlist.currentIndex - 1
    } else if (songIndex === playlist.currentIndex) {
      // 현재 재생 중인 곡이 제거된 경우
      if (playlist.songs.length === 0) {
        playlist.currentIndex = -1
        playlist.isPlaying = false
      } else {
        playlist.currentIndex = Math.min(
          playlist.currentIndex,
          playlist.songs.length - 1
        )
      }
    }

    await playlist.save()

    // 캐시 갱신
    revalidatePath('/')

    return {
      success: true,
      message: `"${removedSong.title}"이(가) 플레이리스트에서 제거되었습니다.`,
      playlist: JSON.parse(JSON.stringify(playlist)),
    }
  } catch (error) {
    console.error('곡 제거 오류:', error)
    return {
      success: false,
      error: '곡을 제거하는 중 오류가 발생했습니다.',
    }
  }
}

// 플레이리스트 비우기
export async function clearPlaylist(
  userId: string
): Promise<IPlaylistResponse> {
  try {
    // zod 유효성 검사
    const UserIdSchema = z.object({
      userId: z.string().min(1, '사용자 ID는 필수입니다.'),
    })
    const { userId: validUserId } = await UserIdSchema.parseAsync({ userId })

    // DB 접속
    await connectToDatabase()

    // 플레이리스트 찾기 및 비우기
    const playlist = await Playlist.findOne({
      userId: validUserId,
      isActive: true,
    })
    if (!playlist) {
      return {
        success: false,
        error: '플레이리스트를 찾을 수 없습니다.',
      }
    }

    playlist.songs = []
    playlist.currentIndex = -1
    playlist.isPlaying = false

    await playlist.save()

    // 캐시 갱신
    revalidatePath('/')

    return {
      success: true,
      message: '플레이리스트가 비워졌습니다.',
      playlist: JSON.parse(JSON.stringify(playlist)),
    }
  } catch (error) {
    console.error('플레이리스트 비우기 오류:', error)
    return {
      success: false,
      error: '플레이리스트를 비우는 중 오류가 발생했습니다.',
    }
  }
}

// 현재 재생 곡 설정
export async function setCurrentSong(
  userId: string,
  songIndex: number
): Promise<IPlaylistResponse> {
  try {
    // zod 유효성 검사
    const UserIdSchema = z.object({
      userId: z.string().min(1, '사용자 ID는 필수입니다.'),
    })
    const { userId: validUserId } = await UserIdSchema.parseAsync({ userId })

    // DB 접속
    await connectToDatabase()

    // 플레이리스트 찾기
    const playlist = await Playlist.findOne({
      userId: validUserId,
      isActive: true,
    })
    if (!playlist) {
      return {
        success: false,
        error: '플레이리스트를 찾을 수 없습니다.',
      }
    }

    // 인덱스 유효성 확인
    if (songIndex < 0 || songIndex >= playlist.songs.length) {
      return {
        success: false,
        error: '잘못된 곡 인덱스입니다.',
      }
    }

    playlist.currentIndex = songIndex

    await playlist.save()

    // 캐시 갱신
    revalidatePath('/')

    return {
      success: true,
      message: `"${playlist.songs[songIndex].title}"이(가) 현재 재생 곡으로 설정되었습니다.`,
      playlist: JSON.parse(JSON.stringify(playlist)),
    }
  } catch (error) {
    console.error('현재 곡 설정 오류:', error)
    return {
      success: false,
      error: '현재 곡을 설정하는 중 오류가 발생했습니다.',
    }
  }
}

// 재생 상태 토글
export async function togglePlayingState(
  userId: string
): Promise<IPlaylistResponse> {
  try {
    // zod 유효성 검사
    const UserIdSchema = z.object({
      userId: z.string().min(1, '사용자 ID는 필수입니다.'),
    })
    const { userId: validUserId } = await UserIdSchema.parseAsync({ userId })

    // DB 접속
    await connectToDatabase()

    // 플레이리스트 찾기
    const playlist = await Playlist.findOne({
      userId: validUserId,
      isActive: true,
    })
    if (!playlist) {
      return {
        success: false,
        error: '플레이리스트를 찾을 수 없습니다.',
      }
    }

    playlist.isPlaying = !playlist.isPlaying

    await playlist.save()

    return {
      success: true,
      message: `재생이 ${playlist.isPlaying ? '시작' : '정지'}되었습니다.`,
      playlist: JSON.parse(JSON.stringify(playlist)),
    }
  } catch (error) {
    console.error('재생 상태 토글 오류:', error)
    return {
      success: false,
      error: '재생 상태를 변경하는 중 오류가 발생했습니다.',
    }
  }
}

// 플레이리스트 삭제
export async function deletePlaylist(
  userId: string,
  playlistId: string
): Promise<IPlaylistResponse> {
  try {
    await connectToDatabase()

    const playlist = await Playlist.findOne({
      _id: playlistId,
      userId,
      isActive: true,
    })

    if (!playlist) {
      return {
        success: false,
        error: '플레이리스트를 찾을 수 없습니다.',
      }
    }

    // 소프트 삭제
    playlist.isActive = false
    await playlist.save()

    revalidatePath('/myplay')

    return {
      success: true,
      message: `"${playlist.name}" 플레이리스트가 삭제되었습니다.`,
    }
  } catch (error) {
    console.error('플레이리스트 삭제 오류:', error)
    return {
      success: false,
      error: '플레이리스트 삭제 중 오류가 발생했습니다.',
    }
  }
}

// 현재 재생목록을 기존 플레이리스트에 추가
export async function addCurrentSongsToPlaylist(
  userId: string,
  playlistName: string,
  currentSongs: ISongInput[]
): Promise<IPlaylistResponse> {
  try {
    await connectToDatabase()

    // 플레이리스트 찾기
    const playlist = await Playlist.findOne({
      userId,
      name: playlistName,
      isActive: true,
    })

    if (!playlist) {
      return {
        success: false,
        error: '플레이리스트를 찾을 수 없습니다.',
      }
    }

    if (currentSongs.length === 0) {
      return {
        success: false,
        error: '추가할 곡이 없습니다.',
      }
    }

    // 중복 곡 필터링
    const newSongs = currentSongs.filter(
      (newSong) =>
        !playlist.songs.some(
          (existingSong: ISong) => existingSong.youtubeID === newSong.youtubeID
        )
    )

    if (newSongs.length === 0) {
      return {
        success: false,
        error: '모든 곡이 이미 플레이리스트에 있습니다.',
      }
    }

    // 곡들에 addedAt 필드 추가
    const songsWithDate = newSongs.map((song) => ({
      ...song,
      addedAt: new Date(),
    }))

    // 플레이리스트에 곡 추가
    playlist.songs.push(...songsWithDate)

    // 현재 재생 곡이 없으면 첫 번째 곡으로 설정
    if (playlist.currentIndex < 0 && playlist.songs.length > 0) {
      playlist.currentIndex = 0
    }

    await playlist.save()

    revalidatePath('/myplay')

    return {
      success: true,
      message: `"${playlistName}"에 ${newSongs.length}곡이 추가되었습니다.`,
      playlist: JSON.parse(JSON.stringify(playlist)),
    }
  } catch (error) {
    console.error('곡 추가 오류:', error)
    return {
      success: false,
      error: '곡을 추가하는 중 오류가 발생했습니다.',
    }
  }
}

// 사용자의 모든 플레이리스트 가져오기
export async function getUserPlaylists(userId: string): Promise<{
  success: boolean
  playlists?: any[]
  error?: string
}> {
  try {
    await connectToDatabase()

    const playlists = await Playlist.find({
      userId,
      isActive: true,
    })
      .sort({ createdAt: -1 })
      .lean()

    return {
      success: true,
      playlists: JSON.parse(JSON.stringify(playlists)),
    }
  } catch (error) {
    console.error('플레이리스트 목록 조회 오류:', error)
    return {
      success: false,
      error: '플레이리스트 목록을 불러오는 중 오류가 발생했습니다.',
    }
  }
}
