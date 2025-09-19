'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface PaginationProps {
  currentPage: number
  totalPages: number
  limit: number
  baseUrl: string
}

export default function PageIndex({
  currentPage,
  totalPages,
  limit,
  baseUrl,
}: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // 페이지 변경 시 URL 파라미터를 업데이트하고 라우팅 처리
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    params.set('limit', limit.toString())
    router.push(`${baseUrl}?${params.toString()}`, { scroll: false })
  }

  // 페이지네이션에 표시할 페이지 번호를 동적으로 계산
  const generatePageNumbers = () => {
    const pages = []
    let startPage = Math.max(1, currentPage - 2)
    let endPage = Math.min(totalPages, currentPage + 2)

    // 현재 페이지가 처음 몇 페이지에 있을 때 처리
    if (currentPage <= 2) {
      endPage = Math.min(5, totalPages)
    }
    // 현재 페이지가 마지막 몇 페이지에 있을 때 처리
    else if (currentPage >= totalPages - 1) {
      startPage = Math.max(totalPages - 4, 1)
    }
    // 페이지 번호 배열 생성
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return { pages, endPage }
  }

  const { pages: pageNumbers, endPage } = generatePageNumbers()

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {/* 이전 페이지 버튼, 첫 페이지면 비활성화 */}
          <PaginationPrevious
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>

        {/* 페이지 번호 버튼 */}
        {pageNumbers.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              onClick={() => handlePageChange(pageNumber)}
              isActive={currentPage === pageNumber}
              className='font-poppins font-light w-8 h-8 cursor-pointer'
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* 추가 페이지가 있는 경우 생략 표시 */}
        {endPage < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          {/* 다음 페이지 버튼, 마지막 페이지면 비활성화 */}
          <PaginationNext
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, totalPages))
            }
            className={
              currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
