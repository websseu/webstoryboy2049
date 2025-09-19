'use client'

import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react'
import { ContactData, getContacts } from '@/lib/actions/contact.action'

export default function ContactTable() {
  const [contacts, setContacts] = useState<ContactData[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1) // 내부 상태로 관리

  const limit = 5
  const totalPages = Math.ceil(totalCount / limit)

  const fetchContacts = async () => {
    setLoading(true)
    try {
      const { success, contacts, totalCount } = await getContacts({
        page: currentPage,
        limit,
      })

      if (success) {
        setContacts(contacts)
        setTotalCount(totalCount)
      } else {
        setContacts([])
        setTotalCount(0)
        console.error('문의사항 조회 실패')
      }
    } catch (error) {
      console.error('문의사항 조회 오류:', error)
      setContacts([])
      setTotalCount(0)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchContacts()
  }, [currentPage])

  // 페이지 변경 핸들러 (순수 클라이언트 사이드)
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  if (loading) {
    return (
      <div className='flex justify-center py-8'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto'></div>
          <p className='mt-2 text-sm text-muted-foreground'>로딩 중...</p>
        </div>
      </div>
    )
  }

  return (
    <div className='space-y-4'>
      {/* 통계 정보 */}
      <div className='flex items-center justify-between text-sm text-muted-foreground'>
        <span>총 {totalCount}개의 문의사항</span>
        <span>
          {currentPage} / {totalPages} 페이지
        </span>
      </div>

      {/* 테이블 */}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[60px] text-center'>번호</TableHead>
            <TableHead>이메일</TableHead>
            <TableHead>제목</TableHead>
            <TableHead>메시지</TableHead>
            <TableHead className='w-[120px] text-center'>등록일</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className='text-center py-8 text-muted-foreground'>
                문의사항이 없습니다.
              </TableCell>
            </TableRow>
          ) : (
            contacts.map((contact, idx) => (
              <TableRow key={contact._id}>
                <TableCell className='text-center'>{(currentPage - 1) * limit + idx + 1}</TableCell>
                <TableCell>
                  <a
                    href={`mailto:${contact.email}`}
                    className='flex items-center gap-2 text-blue-600 hover:text-blue-800 underline underline-offset-4'
                  >
                    <Mail className='w-4 h-4' />
                    {contact.email}
                  </a>
                </TableCell>
                <TableCell>
                  <div className='max-w-[300px] truncate' title={contact.title}>
                    {contact.title}
                  </div>
                </TableCell>
                <TableCell>
                  <div className='max-w-[400px] truncate' title={contact.message}>
                    {contact.message}
                  </div>
                </TableCell>
                <TableCell className='text-center text-sm'>
                  {format(new Date(contact.createdAt), 'MM.dd HH:mm', { locale: ko })}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* SPA 방식 페이지네이션 */}
      {totalPages > 1 && (
        <div className='flex items-center justify-center gap-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className='h-4 w-4' />
            이전
          </Button>

          <div className='flex items-center gap-1'>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum
              if (totalPages <= 5) {
                pageNum = i + 1
              } else if (currentPage <= 3) {
                pageNum = i + 1
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i
              } else {
                pageNum = currentPage - 2 + i
              }

              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => handlePageChange(pageNum)}
                  className='w-8 h-8 p-0'
                >
                  {pageNum}
                </Button>
              )
            })}
          </div>

          <Button
            variant='outline'
            size='sm'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            다음
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      )}

      {/* 페이지 정보 */}
      <div className='text-center text-xs text-muted-foreground'>
        {currentPage} / {totalPages} 페이지 (총 {totalCount}개)
      </div>
    </div>
  )
}
