'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function PageInitializer() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const storedPage = localStorage.getItem('page')
    const storedLimit = localStorage.getItem('pageLimit')

    const hasPage = searchParams.has('page')
    const hasLimit = searchParams.has('limit')

    if (!hasPage && !hasLimit && storedPage && storedLimit) {
      router.replace(`/admin/posts?page=${storedPage}&limit=${storedLimit}`)
    }
  }, [router, searchParams])

  return null
}
