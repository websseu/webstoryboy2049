'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

interface PageSelectorProps {
  currentLimit: number
  baseUrl: string
  currentPage: number
}

export default function PageSelector({ currentLimit, baseUrl, currentPage }: PageSelectorProps) {
  const router = useRouter()
  const pageSizes = [10, 15, 20, 50]

  const handlePageSizeChange = (limit: number) => {
    const firstItemIndex = (currentPage - 1) * currentLimit
    const newPage = Math.floor(firstItemIndex / limit) + 1

    // 로컬 스토리지에 저장
    localStorage.setItem('pageLimit', String(limit))
    localStorage.setItem('page', String(newPage))

    router.push(`${baseUrl}?page=${newPage}&limit=${limit}`)
  }

  return (
    <div className='hidden sm:flex items-center gap-2 text-sm '>
      <div className='flex gap-1'>
        {pageSizes.map((size) => (
          <Button
            key={size}
            variant={currentLimit === size ? 'default' : 'outline'}
            size='sm'
            className='text-[10px] p-1 w-6 h-6 cursor-pointer'
            onClick={() => handlePageSizeChange(size)}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  )
}
