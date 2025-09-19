'use client'

import { useEffect, useRef } from 'react'
import { increasePostViews } from '@/lib/actions/post.action'

export default function PostViews({ postId }: { postId: string }) {
  const hasCounted = useRef(false)

  useEffect(() => {
    if (!postId || hasCounted.current) return

    increasePostViews(postId)
    hasCounted.current = true
  }, [postId])

  return null
}
