'use client'

import { useState } from 'react'
import MusicMylist from '@/components/music/music-mylist'

import { Button } from '@/components/ui/button'
import DialogPlayTitle from '@/components/dialog/dialog-play-title'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
import { createPlaylist } from '@/lib/actions/playlist.action'
import SavedPlaylists from '@/components/music/saved-playlist'

export default function MyplayPage() {
  const [open, setOpen] = useState(false)
  const [isCreating, setIsCreating] = useState(false)
  const { data: session } = useSession()
  const userId = session?.user?.id

  const handleCreate = async (title: string) => {
    if (!userId) {
      toast.error('로그인 후 이용해주세요.')
      return
    }

    setIsCreating(true)

    try {
      const result = await createPlaylist({
        userId,
        name: title,
      })

      if (result.success) {
        toast.success(result.message || '플레이리스트가 생성되었습니다!')
        setOpen(false)
      } else {
        toast.error(result.error || '플레이리스트 생성에 실패했습니다.')
      }
    } catch (error) {
      console.log(error)
      toast.error('플레이리스트 생성 중 오류가 발생했습니다.')
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <>
      <div className='text-center'>
        <h1 className='text-2xl font-gmarket my-4'>나의 음악 리스트</h1>
        <Button
          variant='secondary'
          className='rounded-full bg-orange-600 text-white px-6 mb-4 hover:bg-orange-500'
          onClick={() => setOpen(true)}
          disabled={!userId}
        >
          + 재생목록 만들기
        </Button>
        {!userId && (
          <p className='text-sm text-gray-500 mt-2'>
            로그인 후 플레이리스트를 만들 수 있습니다.
          </p>
        )}
      </div>

      <div className='max-w-4xl mx-auto space-y-6 px-4'>
        {/* 재생목록 제목 다이얼로그 */}
        <DialogPlayTitle
          open={open}
          onOpenChange={setOpen}
          onSubmit={handleCreate}
        />

        {/* 나의 재생목록 */}
        <MusicMylist />

        {/* 저장된 플레이리스트 목록 */}
        <SavedPlaylists />
      </div>
    </>
  )
}
