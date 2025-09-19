'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Search,
  Trash2,
  Eye,
  Mail,
  Clock,
  CheckCircle,
  MessageSquare,
} from 'lucide-react'
import {
  getAllContactsPage,
  deleteContact,
  updateContactStatus,
} from '@/lib/actions/contact.action'
import DialogContactDetail from '../dialog/dialog-contact-detail'
import DialogContactDel from '../dialog/dialog-contact-del'

interface ContactData {
  _id: string
  email: string
  message: string
  status: '대기중' | '확인완료' | '답장완료'
  createdAt: string
  updatedAt: string
}

export default function AdminContact() {
  const [contacts, setContacts] = useState<ContactData[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteEmail, setDeleteEmail] = useState('')
  const [selectedContact, setSelectedContact] = useState<ContactData | null>(
    null
  )

  // 문의사항 데이터 가져오기
  const fetchContacts = useCallback(async (page = 1, keyword = '') => {
    try {
      setLoading(true)
      const result = await getAllContactsPage(page, 10, keyword)

      if (result.success) {
        setContacts(result.contacts as ContactData[])
        setTotalPages(result.pagination?.totalPages || 1)
      } else {
        toast.error('문의사항 데이터를 불러오는데 실패했습니다.')
      }
    } catch (error) {
      console.error('문의사항 데이터 가져오기 오류:', error)
      toast.error('문의사항 데이터를 불러오는데 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }, [])

  // 문의사항 삭제
  const handleDelete = async (id: string) => {
    try {
      setIsDeleting(true)
      const result = await deleteContact(id)

      if (result.success) {
        toast.success('문의사항이 삭제되었습니다.')
        // 프론트 상태에서만 삭제
        setContacts((prev) => prev.filter((contact) => contact._id !== id))
        setIsDeleteOpen(false)
        setSelectedContact(null)
      } else {
        toast.error(result.error || '삭제에 실패했습니다.')
      }
    } catch (error) {
      console.error('문의사항 삭제 오류:', error)
      toast.error('삭제 중 오류가 발생했습니다.')
    } finally {
      setIsDeleting(false)
    }
  }

  // 문의사항 상태 변경
  const handleStatusChange = async (
    contactId: string,
    newStatus: '대기중' | '확인완료' | '답장완료'
  ) => {
    try {
      const result = await updateContactStatus(contactId, newStatus)

      if (result.success) {
        toast.success(result.message)
        // 프론트 상태만 직접 갱신
        setContacts((prev) =>
          prev.map((contact) =>
            contact._id === contactId
              ? { ...contact, status: newStatus }
              : contact
          )
        )
      } else {
        toast.error(result.error || '상태 변경에 실패했습니다.')
      }
    } catch (error) {
      console.error('문의사항 상태 변경 오류:', error)
      toast.error('상태 변경 중 오류가 발생했습니다.')
    }
  }

  // 검색 필터링
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.status.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // 검색어, 페이지 변경 시 fetch
  useEffect(() => {
    fetchContacts(currentPage, searchTerm)
  }, [currentPage, searchTerm, fetchContacts])

  // 검색어 입력 시 페이지를 1로 초기화
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  // 페이지 변경
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // 상세정보 버튼 클릭 시
  const handleDetailClick = (contact: ContactData) => {
    setSelectedContact(contact)
    setIsDetailOpen(true)
  }

  // 삭제 버튼 클릭 시
  const handleDeleteClick = (contact: ContactData) => {
    setSelectedContact(contact)
    setDeleteEmail(contact.email)
    setIsDeleteOpen(true)
  }

  // 삭제 확인 시
  const handleDeleteConfirm = () => {
    if (selectedContact) {
      handleDelete(selectedContact._id)
    }
  }

  // 상태 뱃지 렌더링
  const renderStatusBadge = (status: string) => {
    const statusConfig = {
      대기중: {
        icon: <Clock className='w-3 h-3' />,
        className: 'bg-yellow-100 text-yellow-800 border-yellow-300',
        text: '대기중',
      },
      확인완료: {
        icon: <CheckCircle className='w-3 h-3' />,
        className: 'bg-blue-100 text-blue-800 border-blue-300',
        text: '확인완료',
      },
      답장완료: {
        icon: <MessageSquare className='w-3 h-3' />,
        className: 'bg-green-100 text-green-800 border-green-300',
        text: '답장완료',
      },
    }

    const config =
      statusConfig[status as keyof typeof statusConfig] ||
      statusConfig['대기중']

    return (
      <Badge className={config.className}>
        {config.icon}
        {config.text}
      </Badge>
    )
  }

  if (loading) {
    return (
      <div className='flex items-center justify-center py-8'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto'></div>
          <p className='mt-2 text-sm text-gray-600'>데이터를 불러오는 중...</p>
        </div>
      </div>
    )
  }

  return (
    <Card className='border-starbucks-green-pale bg-white'>
      <CardHeader>
        <CardTitle className='font-gmarket text-starbucks-green text-xl'>
          문의 관리
        </CardTitle>
        <CardDescription className='font-nanum'>
          문의를 검토하고 관리할 수 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {/* 검색 */}
          <div className='flex items-center justify-between'>
            <div className='relative w-64'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
              <Input
                placeholder='문의사항 검색...'
                value={searchTerm}
                onChange={handleSearchChange}
                className='pl-9'
              />
            </div>
          </div>

          {/* 문의사항 목록 테이블 */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center justify-between'>
                문의사항 목록
                <Badge variant='secondary'>총 {contacts.length}개</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>이메일</TableHead>
                    <TableHead>문의 내용</TableHead>
                    <TableHead className='text-center'>상태</TableHead>
                    <TableHead className='text-center'>접수일</TableHead>
                    <TableHead className='text-center'>관리</TableHead>
                    <TableHead className='text-center'>변경</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContacts.map((contact) => (
                    <TableRow key={contact._id}>
                      <TableCell className='font-medium'>
                        <div className='flex items-center gap-2'>
                          <Mail className='h-4 w-4 text-gray-400' />
                          <span className='text-sm text-gray-600 truncate max-w-[200px]'>
                            {contact.email}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className='max-w-[300px]'>
                        <div className='truncate text-sm text-gray-900'>
                          {contact.message}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className='flex justify-center'>
                          {renderStatusBadge(contact.status)}
                        </div>
                      </TableCell>
                      <TableCell className='text-center text-sm'>
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </TableCell>
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

                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant='ghost'
                                size='sm'
                                title='삭제하기'
                                onClick={() => handleDeleteClick(contact)}
                              >
                                <Trash2 className='h-4 w-4' />
                              </Button>
                            </AlertDialogTrigger>
                          </AlertDialog>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Select
                          value={contact.status}
                          onValueChange={(
                            value: '대기중' | '확인완료' | '답장완료'
                          ) => handleStatusChange(contact._id, value)}
                        >
                          <SelectTrigger className='w-32 h-8 mx-auto'>
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
                  ))}
                </TableBody>
              </Table>

              {/* 페이지네이션 */}
              {totalPages > 1 && (
                <div className='flex items-center justify-center gap-2 mt-4'>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    이전
                  </Button>
                  <span className='text-sm'>
                    {currentPage} / {totalPages}
                  </span>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    다음
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 문의사항 상세정보 Dialog */}
          <DialogContactDetail
            open={isDetailOpen}
            onOpenChange={setIsDetailOpen}
            contact={selectedContact}
          />

          {/* 문의사항 삭제 Dialog */}
          <DialogContactDel
            open={isDeleteOpen}
            onOpenChange={setIsDeleteOpen}
            email={deleteEmail}
            onDeleteConfirm={handleDeleteConfirm}
            isDeleting={isDeleting}
          />
        </div>
      </CardContent>
    </Card>
  )
}
