'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { toast } from 'sonner'
import { likePost } from '@/lib/actions/post.action'

export default function PostLike({
  postId,
  initialLikes,
}: {
  postId: string
  initialLikes?: number
}) {
  const [likes, setLikes] = useState(initialLikes ?? 0)
  const [loading, setLoading] = useState(false)

  // 1~10까지 각각 다른 메시지
  const wittyMessages = [
    '첫 사랑 고백 같네요! 💕',
    '두 번째에도 변함없는 애정! 😘',
    '세 번 눌렀으면 이제 친구죠? 😉',
    '포근한 4번째 좋아요 감사합니다! ☁️',
    '하프 하트 5번째, 사랑이 반짝! ✨',
    '6번째도 꾸준히! 대단해요! 💪',
    '7번째라니… 멋진 끈기! 👏',
    '8번째! 거의 10걸음 전진! 🚀',
    '9번째, 막바지 힘내세요! 🔥',
    '드디어 10번째! 최고 팬 인증! 🏆',
  ]

  const handleLike = async () => {
    if (loading) return

    // 10회 제한
    if (likes >= 10) {
      toast('와우! 이미 10번까지 눌렀어요. 더는 못 눌러요! 😉')
      return
    }

    setLoading(true)
    const res = await likePost(postId)

    if (res.success) {
      // 서버에서 numLikes 세팅이 없다면 로컬 +1
      const newLikes = res.numLikes ?? likes + 1
      setLikes(newLikes)

      // 1~10번째에 맞는 메시지 꺼내기 (인덱스 0~9)
      const msg =
        wittyMessages[Math.min(newLikes, 10) - 1] || '좋아요 감사합니다!'

      toast.success(msg)
    } else {
      toast.error(res.message || '좋아요 처리에 실패했습니다.')
    }

    setLoading(false)
  }

  return (
    <button
      onClick={handleLike}
      disabled={loading}
      className='flex items-center gap-1 bg-red-100 px-3 py-1 rounded-2xl text-red-500 hover:text-red-600 text-sm font-poppins cursor-pointer'
    >
      <Heart className='w-4 h-4' />
      <span>{likes}</span>
    </button>
  )
}
