/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Music, Play, Trash2, Calendar, Plus } from 'lucide-react'

import { useMusicPlayer } from '@/context/music-context'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { useSession } from 'next-auth/react'
import {
  addCurrentSongsToPlaylist,
  deletePlaylist,
  getUserPlaylists,
} from '@/lib/actions/playlist.action'
import { toast } from 'sonner'

interface SavedPlaylist {
  _id: string
  name: string
  songs: any[]
  createdAt: string
  updatedAt: string
}

export default function SavedPlaylists() {
  const [playlists, setPlaylists] = useState<SavedPlaylist[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [addingToPlaylist, setAddingToPlaylist] = useState<string | null>(null)
  const { playlist: currentPlaylist } = useMusicPlayer()
  const { data: session } = useSession()
  const userId = session?.user?.id

  const loadPlaylists = async () => {
    if (!userId) return

    try {
      const result = await getUserPlaylists(userId)
      if (result.success && result.playlists) {
        setPlaylists(result.playlists)
      }
    } catch (error) {
      toast.error('플레이리스트를 불러오는 중 오류가 발생했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeletePlaylist = async (
    playlistId: string,
    playlistName: string
  ) => {
    if (!userId) return
    if (!confirm(`"${playlistName}" 플레이리스트를 삭제하시겠습니까?`)) {
      return
    }

    try {
      const result = await deletePlaylist(userId, playlistId)
      if (result.success) {
        toast.success(result.message)
        loadPlaylists() // 목록 새로고침
      } else {
        toast.error(result.error || '플레이리스트 삭제에 실패했습니다.')
      }
    } catch (error) {
      toast.error('플레이리스트 삭제 중 오류가 발생했습니다.')
    }
  }

  const handleAddCurrentSongs = async (playlistName: string) => {
    if (!userId) return

    if (currentPlaylist.length === 0) {
      toast.error('현재 재생목록이 비어있습니다.')
      return
    }

    setAddingToPlaylist(playlistName)

    try {
      const result = await addCurrentSongsToPlaylist(
        userId,
        playlistName,
        currentPlaylist
      )
      if (result.success) {
        toast.success(result.message)
        loadPlaylists() // 목록 새로고침
      } else {
        toast.error(result.error || '곡 추가에 실패했습니다.')
      }
    } catch (error) {
      toast.error('곡 추가 중 오류가 발생했습니다.')
    } finally {
      setAddingToPlaylist(null)
    }
  }

  useEffect(() => {
    if (userId) {
      loadPlaylists()
    }
  }, [userId])

  if (!userId) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>저장된 플레이리스트</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-center text-gray-500 py-8'>
            <Music className='w-12 h-12 mx-auto mb-2 opacity-50' />
            <p>로그인 후 이용해주세요.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>저장된 플레이리스트</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-3'>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className='animate-pulse'>
                <div className='h-16 bg-gray-200 rounded-lg'></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (playlists.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>저장된 플레이리스트</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-center text-gray-500 py-8'>
            <Music className='w-12 h-12 mx-auto mb-2 opacity-50' />
            <p>저장된 플레이리스트가 없습니다.</p>
            <p className='text-sm'>새로운 플레이리스트를 만들어보세요!</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Music className='w-5 h-5' />
          저장된 플레이리스트 ({playlists.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-3'>
          {playlists.map((playlist) => (
            <div
              key={playlist._id}
              className='border rounded-lg p-4 hover:bg-gray-50 transition-colors'
            >
              <div className='flex items-center justify-between'>
                <div className='flex-1'>
                  <h3 className='font-semibold text-lg'>{playlist.name}</h3>
                  <div className='flex items-center gap-4 text-sm text-gray-600 mt-1'>
                    <span className='flex items-center gap-1'>
                      <Music className='w-3 h-3' />
                      {playlist.songs.length}곡
                    </span>
                    <span className='flex items-center gap-1'>
                      <Calendar className='w-3 h-3' />
                      {format(new Date(playlist.createdAt), 'yyyy.MM.dd', {
                        locale: ko,
                      })}
                    </span>
                  </div>
                </div>

                <div className='flex items-center gap-2'>
                  <Badge variant='secondary'>{playlist.songs.length}곡</Badge>
                  <Button
                    size='sm'
                    variant='outline'
                    onClick={() => handleAddCurrentSongs(playlist.name)}
                    disabled={
                      addingToPlaylist === playlist.name ||
                      currentPlaylist.length === 0
                    }
                    title='현재 재생목록의 곡들을 이 플레이리스트에 추가'
                  >
                    {addingToPlaylist === playlist.name ? (
                      <div className='w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin' />
                    ) : (
                      <Plus className='w-4 h-4' />
                    )}
                  </Button>
                  <Button size='sm' variant='outline'>
                    <Play className='w-4 h-4 mr-1' />
                    재생
                  </Button>
                  <Button
                    size='sm'
                    variant='outline'
                    onClick={() =>
                      handleDeletePlaylist(playlist._id, playlist.name)
                    }
                  >
                    <Trash2 className='w-4 h-4' />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
