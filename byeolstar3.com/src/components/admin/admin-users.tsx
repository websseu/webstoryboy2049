import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Pagination, User } from '@/lib/type'
import { toast } from 'sonner'
import { formatDateTime } from '@/lib/utils'
import { deleteUser, getAllUsersPage } from '@/lib/actions/user.action'
import {
  Baby,
  CheckCircle,
  Eye,
  Loader2,
  Search,
  Trash2,
  XCircle,
  Save,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import DialogUserDetail from '../dialog/dialog-user-detail'
import DialogUserDelete from '../dialog/dialog-user-delete'
import DialogUserEdit from '../dialog/dialog-user-edit'
import AdminPagination from './admin-pagination'

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 상세보기
  const [detailOpen, setDetailOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  // 삭제하기
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [toDeleteId, setToDeleteId] = useState<string | null>(null)

  // 수정하기
  const [editOpen, setEditOpen] = useState(false)
  const [toEditedUser, setToEditedUser] = useState<User | null>(null)

  // 검색 및 페이지네이션
  const [searchTerm, setSearchTerm] = useState('')
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [pagination, setPagination] = useState<Pagination | null>(null)

  // 데이터 가져오기
  // const fetchUsers = useCallback(async () => {
  //   setIsLoading(true)
  //   setError(null)

  //   try {
  //     const result = await getAllUsers()
  //     console.log(result)
  //     if (result.success) {
  //       setUsers(result.users)
  //     } else {
  //       setError(result.error || '사용자 목록을 불러오지 못했습니다.')
  //     }
  //   } catch (error) {
  //     console.error(error)
  //     setError('서버 요청 중 오류가 발생했습니다.')
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }, [])

  // 데이터 가져오기(페이지, 검색)
  const fetchUsers = useCallback(async () => {
    setIsLoading(true)

    try {
      const result = await getAllUsersPage(
        currentPage,
        pageSize,
        query || undefined
      )
      console.log(result)

      if (result.success) {
        setUsers(result.users)
        setPagination(result.pagination!)
        setError(null)
      } else {
        setError(result.error || '사용자 목록을 불러오지 못했습니다.')
      }
    } catch (error) {
      console.error(error)
      setError('서버 요청 중 오류가 발생했습니다.')
    } finally {
      setIsLoading(false)
    }
  }, [currentPage, pageSize, query])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  // 삭제하기
  const confirmDelete = async () => {
    if (!toDeleteId) return

    try {
      const result = await deleteUser(toDeleteId)

      if (result.success) {
        toast.success(result.message)
        setUsers((prev) => prev.filter((u) => u._id !== toDeleteId))
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

  // 수정하기
  const userUpdate = (updatedUser: User) => {
    setUsers((prev) =>
      prev.map((user) => (user._id === updatedUser._id ? updatedUser : user))
    )
  }

  // 상세 정보 핸들러
  const handleDetailClick = (user: User) => {
    setSelectedUser(user)
    setDetailOpen(true)
  }

  // 수정 핸들러
  const handleEditClick = (user: User) => {
    setToEditedUser(user)
    setEditOpen(true)
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
      <Card>
        <CardHeader>
          <CardTitle className='text-xl font-gmarket text-green-700 flex items-center gap-2'>
            회원 관리({pagination?.totalCount ?? 0})
          </CardTitle>
          <CardDescription>
            회원을 관리하고 삭제 및 상태 변경을 할 수 있습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex gap-3 flex-row justify-between items-end'>
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
                  <Select
                    value={pageSize.toString()}
                    onValueChange={pageSizeChange}
                  >
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
            </div>

            {isLoading ? (
              <div className='flex justify-center items-center py-20 mt-8'>
                <Loader2 className='h-8 w-8 animate-spin text-primary' />
                <span className='ml-2'>데이터를 불러오는 중...</span>
              </div>
            ) : error ? (
              <div className='p-4 text-center py-20 mt-8'>
                <Baby className='w-16 h-16 mx-auto text-gray-400 mb-4' />
                <h1 className='text-3xl font-bold mb-2 text-gray-800'>
                  에러가 발생했어요
                </h1>
                <p className='text-red-600 mb-6 text-center font-nanum'>
                  {error}
                </p>
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
                        <TableHead>이름</TableHead>
                        <TableHead>사용자 이름</TableHead>
                        <TableHead>이메일</TableHead>
                        <TableHead className='text-center'>
                          이메일 인증
                        </TableHead>
                        <TableHead className='text-center'>가입 경로</TableHead>
                        <TableHead className='text-center'>역할</TableHead>
                        <TableHead className='text-center'>상태</TableHead>
                        <TableHead className='text-center'>방문수</TableHead>
                        <TableHead className='text-center'>가입일</TableHead>
                        <TableHead className='text-center'>관리</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.length > 0 ? (
                        users.map((user, index) => (
                          <TableRow
                            key={user._id}
                            className='text-muted-foreground'
                          >
                            <TableCell className='text-center'>
                              {index + 1}
                            </TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>
                              <Link
                                href={`/@${user.username}`}
                                className='hover:underline underline-offset-4'
                                title={`@${user.username}님 페이지로 이동`}
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                @{user.username}
                              </Link>
                            </TableCell>
                            <TableCell>
                              <a
                                href={`mailto:${user.email}`}
                                className='hover:underline underline-offset-4'
                                title={`${user.email}로 이메일 보내기`}
                              >
                                {user.email}
                              </a>
                            </TableCell>
                            <TableCell>
                              {user.emailVerified ? (
                                <span
                                  title='이메일 인증 완료'
                                  className='flex items-center justify-center gap-1'
                                >
                                  인증확인
                                  <CheckCircle className='h-4 w-4 text-green-500' />
                                </span>
                              ) : (
                                <span
                                  title='이메일 인증 필요'
                                  className='flex items-center justify-center gap-1'
                                >
                                  인증안됨
                                  <XCircle className='h-4 w-4 text-red-500' />
                                </span>
                              )}
                            </TableCell>
                            <TableCell className='text-center'>
                              {user.provider}
                            </TableCell>
                            <TableCell className='text-center'>
                              {user.role === 'admin' ? (
                                <Badge variant='destructive'>관리자</Badge>
                              ) : (
                                <Badge variant='outline'>사용자</Badge>
                              )}
                            </TableCell>
                            <TableCell className='text-center'>
                              {user.isActive ? (
                                <Badge variant='outline'>활성</Badge>
                              ) : (
                                <Badge variant='destructive'>비활성</Badge>
                              )}
                            </TableCell>
                            <TableCell className='text-center'>
                              {user.visitCount}
                            </TableCell>
                            <TableCell className='text-center'>
                              {formatDateTime(user.createdAt)}
                            </TableCell>
                            <TableCell>
                              <div className='flex items-center justify-center gap-1'>
                                <Button
                                  variant='ghost'
                                  size='sm'
                                  title='상세정보'
                                  onClick={() => handleDetailClick(user)}
                                >
                                  <Eye className='h-4 w-4' />
                                </Button>
                                <Button
                                  variant='ghost'
                                  size='sm'
                                  title='수정하기'
                                  onClick={() => handleEditClick(user)}
                                >
                                  <Save className='h-4 w-4' />
                                </Button>
                                <Button
                                  variant='ghost'
                                  size='sm'
                                  title='삭제하기'
                                  onClick={() => handleDeleteClick(user._id)}
                                >
                                  <Trash2 className='h-4 w-4' />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell
                            colSpan={11}
                            className='text-center py-6 text-muted-foreground'
                          >
                            등록된 회원이 없습니다.
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

      {/* 사용자 상세 다이얼로그 */}
      <DialogUserDetail
        open={detailOpen}
        onOpenChange={setDetailOpen}
        user={selectedUser}
      />

      {/* 사용자 삭제 다이얼로그 */}
      <DialogUserDelete
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        onConfirm={confirmDelete}
      />

      {/* 사용자 수정 다이얼로그 */}
      <DialogUserEdit
        open={editOpen}
        onOpenChange={setEditOpen}
        user={toEditedUser}
        onUserUpdate={userUpdate}
      />
    </>
  )
}
