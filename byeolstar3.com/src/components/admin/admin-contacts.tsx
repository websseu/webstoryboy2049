import React, { useCallback, useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { toast } from 'sonner'
import { Contact, Pagination } from '@/lib/type'
import { formatDateTime, getStatusBadge } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Baby, Eye, Loader2, Search, Trash2 } from 'lucide-react'
import {
  deleteContact,
  getAllContactsPage,
  updateContactStatus,
} from '@/lib/actions/contact.action'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import DialogContactDetail from '../dialog/dialog-contact-detail'
import DialogContactDelete from '../dialog/dialog-contact-delete'
import AdminPagination from './admin-pagination'

export default function AdminContacts() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 상세보기
  const [detailOpen, setDetailOpen] = useState(false)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  // 삭제하기
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [toDeleteId, setToDeleteId] = useState<string | null>(null)

  // 검색 및 페이지네이션
  const [searchTerm, setSearchTerm] = useState('')
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [pagination, setPagination] = useState<Pagination | null>(null)

  // 데이터 가져오기
  // const fetchContacts = useCallback(async () => {
  //   setIsLoading(true)
  //   setError(null)

  //   try {
  //     const res = await getAllContacts()
  //     console.log(res)

  //     if (res.success) {
  //       setContacts(res.contacts)
  //     } else {
  //       setError(res.error || '문의사항 목록을 불러오지 못했습니다.')
  //     }
  //   } catch (error) {
  //     console.error(error)
  //     setError('서버 요청 중 오류가 발생했습니다.')
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }, [])

  // 데이터 가져오기(페이지, 검색)
  const fetchContacts = useCallback(async () => {
    setIsLoading(true)

    try {
      const result = await getAllContactsPage(currentPage, pageSize, query || undefined)

      if (result.success) {
        setContacts(result.contacts)
        setPagination(result.pagination!)
        setError(null)
      } else {
        setError(result.error || '문의사항 목록을 불러오지 못했습니다.')
      }
    } catch (error) {
      console.error(error)
      setError('서버 요청 중 오류가 발생했습니다.')
    } finally {
      setIsLoading(false)
    }
  }, [currentPage, pageSize, query])

  useEffect(() => {
    fetchContacts()
  }, [fetchContacts])

  // 상태별 통계 계산
  const getStatusCounts = () => {
    return {
      waiting: contacts.filter((c) => c.status === '대기중').length,
      confirmed: contacts.filter((c) => c.status === '확인완료').length,
      replied: contacts.filter((c) => c.status === '답장완료').length,
    }
  }
  const statusCounts = getStatusCounts()

  // 상태 변경
  const statusChange = async (contact: Contact, newStatus: '대기중' | '확인완료' | '답장완료') => {
    try {
      const result = await updateContactStatus(contact._id, newStatus)

      if (result.success) {
        toast.success('상태 변경 완료', {
          description: result.message,
        })

        setContacts((prevContacts) =>
          prevContacts.map((c) => (c._id === contact._id ? { ...c, status: result.status! } : c))
        )
      } else {
        toast.error('상태 변경 실패', {
          description: result.error,
        })
      }
    } catch (error) {
      console.error('상태 변경 중 오류:', error)
      toast.error('상태 변경 실패', {
        description: '문의사항 상태 변경 중 오류가 발생했습니다.',
      })
    }
  }

  // 삭제하기
  const confirmDelete = async () => {
    if (!toDeleteId) return

    try {
      const result = await deleteContact(toDeleteId)

      if (result.success) {
        toast.success(result.message)
        // 화면에서 항목 제거
        setContacts((prev) => prev.filter((c) => c._id !== toDeleteId))
        // 전체 개수도 감소시키기
        if (pagination) {
          setPagination({
            ...pagination,
            totalCount: pagination.totalCount - 1,
          })
        }
      } else {
        toast.error(result.error || '삭제에 실패했습니다.')
      }
    } catch {
      toast.error('서버 요청 중 오류가 발생했습니다.')
    } finally {
      setDeleteOpen(false)
      setToDeleteId(null)
    }
  }

  // 상세 정보 핸들러
  const handleDetailClick = (contact: Contact) => {
    setSelectedContact(contact)
    setDetailOpen(true)
  }

  // 삭제 핸들러
  const handleDeleteClick = (id: string) => {
    setToDeleteId(id)
    setDeleteOpen(true)
  }

  // 페이지 이동
  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  // 페이지 사이즈
  const pageSizeChange = (newPageSize: string) => {
    setPageSize(Number(newPageSize))
    setCurrentPage(1)
  }

  return (
    <>
      <Card className='mb-20'>
        <CardHeader>
          <CardTitle className='text-xl font-gmarket text-green-700 flex items-center gap-2'>
            문의 관리({pagination?.totalCount ?? 0})
          </CardTitle>
          <CardDescription>문의를 관리하고 삭제 및 상태 변경을 할 수 있습니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex gap-1 md:gap-3 flex-col md:flex-row justify-between items-end'>
              {/* 검색영역 */}
              <div className='relative w-full sm:w-80 flex gap-2'>
                <Search className='absolute left-3 top-3.5 h-4 w-4 text-muted-foreground' />
                <Input
                  placeholder='사용자, 이메일 검색'
                  className='pl-9 h-[42px]'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setCurrentPage(1)
                      setQuery(searchTerm)
                    }
                  }}
                />

                {(pagination?.totalCount ?? 0) >= 11 && (
                  <Select value={pageSize.toString()} onValueChange={pageSizeChange}>
                    <SelectTrigger className='w-24 py-5 text-muted-foreground'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='10'>10개</SelectItem>
                      <SelectItem value='20'>20개</SelectItem>
                      <SelectItem value='50'>50개</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
              {/* 상태 뱃지 영역 */}
              <div className='flex items-center gap-2 justify-end mt-2'>
                <Badge variant='outline' className='text-orange-600 border-orange-600 h-6'>
                  대기중: {statusCounts.waiting}
                </Badge>
                <Badge variant='outline' className='text-blue-600 border-blue-600 h-6'>
                  확인완료: {statusCounts.confirmed}
                </Badge>
                <Badge variant='outline' className='text-green-600 border-green-600 h-6'>
                  답장완료: {statusCounts.replied}
                </Badge>
              </div>
            </div>

            {isLoading ? (
              <div className='flex justify-center items-center py-20 mt-8'>
                <Loader2 className='h-8 w-8 animate-spin text-primary' />
                <span className='ml-2'>데이터를 불러오는 중...</span>
              </div>
            ) : error ? (
              <div className='p-4 text-center py-20 mt-8'>
                <Baby className='w-16 h-16 mx-auto text-gray-400 mb-4' />
                <h1 className='text-3xl font-bold mb-2 text-gray-800'>에러가 발생했어요</h1>
                <p className='text-red-600 mb-6 text-center font-nanum'>{error}</p>
                <Button variant='outline' className='mt-2'>
                  다시 시도
                </Button>
              </div>
            ) : (
              <>
                <div className='rounded border'>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className='text-center'>번호</TableHead>
                        <TableHead>이메일</TableHead>
                        <TableHead>내용</TableHead>
                        <TableHead>상태</TableHead>
                        <TableHead>접수일</TableHead>
                        <TableHead className='text-center'>관리</TableHead>
                        <TableHead className='text-center'>변경</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contacts.length > 0 ? (
                        contacts.map((contact, index) => {
                          const statusInfo = getStatusBadge(contact.status)
                          const StatusIcon = statusInfo.icon

                          return (
                            <TableRow key={contact._id} className='text-muted-foreground'>
                              <TableCell className='text-center'>
                                {(currentPage - 1) * pageSize + index + 1}
                              </TableCell>
                              <TableCell>
                                <a
                                  href={`mailto:${contact.email}`}
                                  className='hover:underline underline-offset-4'
                                  title={`${contact.email}로 이메일 보내기`}
                                >
                                  {contact.email}
                                </a>
                              </TableCell>
                              <TableCell className='max-w-[300px] truncate'>
                                {contact.message}
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant={statusInfo.variant}
                                  className={`${statusInfo.color}`}
                                >
                                  <StatusIcon className='h-3 w-3' />
                                  {contact.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{formatDateTime(contact.createdAt)}</TableCell>
                              <TableCell>
                                <div className='flex items-center justify-center gap-1'>
                                  <Button
                                    variant='ghost'
                                    size='sm'
                                    title='상세정보'
                                    onClick={() => handleDetailClick(contact)}
                                  >
                                    <Eye className='h-4 w-4' />
                                  </Button>
                                  <Button
                                    variant='ghost'
                                    size='sm'
                                    title='삭제하기'
                                    onClick={() => handleDeleteClick(contact._id)}
                                  >
                                    <Trash2 className='h-4 w-4' />
                                  </Button>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Select
                                  value={contact.status}
                                  onValueChange={(value: '대기중' | '확인완료' | '답장완료') =>
                                    statusChange(contact, value)
                                  }
                                >
                                  <SelectTrigger className='w-28 h-6 mx-auto text-sm'>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value='대기중'>대기중</SelectItem>
                                    <SelectItem value='확인완료'>확인완료</SelectItem>
                                    <SelectItem value='답장완료'>답장완료</SelectItem>
                                  </SelectContent>
                                </Select>
                              </TableCell>
                            </TableRow>
                          )
                        })
                      ) : (
                        <TableRow>
                          <TableCell colSpan={7} className='text-center py-6 text-muted-foreground'>
                            등록된 문의사항이 없습니다.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>

                {/* 페이지네이션 */}
                <AdminPagination
                  pagination={pagination}
                  currentPage={currentPage}
                  onPageChange={goToPage}
                />
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 문의 상세 다이얼로그 */}
      <DialogContactDetail
        open={detailOpen}
        onOpenChange={setDetailOpen}
        contact={selectedContact}
      />

      {/* 문의 삭제 다이얼로그 */}
      <DialogContactDelete
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        onConfirm={confirmDelete}
      />
    </>
  )
}
