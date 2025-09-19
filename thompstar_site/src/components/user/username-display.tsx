'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

interface UsernameDisplayProps {
  username: string
  name: string
  role?: 'user' | 'admin'
  showRole?: boolean
  clickable?: boolean
}

export default function UsernameDisplay({
  username,
  name,
  role = 'user',
  showRole = false,
  clickable = true,
}: UsernameDisplayProps) {
  const content = (
    <span
      className={`font-medium ${
        clickable ? 'hover:underline cursor-pointer' : ''
      }`}
    >
      @{username}
    </span>
  )

  return (
    <div className='flex items-center gap-2'>
      {clickable ? <Link href={`/@${username}`}>{content}</Link> : content}
      {showRole && (
        <Badge
          variant={role === 'admin' ? 'default' : 'secondary'}
          className='text-xs'
        >
          {role === 'admin' ? '관리자' : '사용자'}
        </Badge>
      )}
    </div>
  )
}
