'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Search, Trash2, User, Crown, Shield, Eye, Ban } from 'lucide-react'
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
  getAllUsersPage,
  deleteUser,
  toggleUserStatus,
  toggleUserRole,
} from '@/lib/actions/user.action'
import DialogUserDetail from '../dialog/dialog-user-detail'
import DialogUserDel from '../dialog/dialog-user-del'

interface UserData {
  _id: string
  name: string
  email: string
  role: 'user' | 'admin'
  image: string
  visitCount: number
  isActive: boolean
  emailVerified: boolean
  createdAt: string
  updatedAt: string
}

export default function AdminUsers() {
  const [users, setUsers] = useState<UserData[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteName, setDeleteName] = useState('')

  // 사용자 데이터 가져오기
  const fetchUsers = useCallback(async (page = 1, keyword = '') => {
    try {
      setLoading(true)
      const result = await getAllUsersPage(page, 10, keyword)
      if (result.success) {
        setUsers(result.users as UserData[])
        setTotalPages(result.pagination?.totalPages || 1)
      } else {
        toast.error('사용자 데이터를 불러오는데 실패했습니다.')
      }
    } catch (error) {
      console.error('사용자 데이터 가져오기 오류:', error)
      toast.error('사용자 데이터를 불러오는데 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }, [])

  // 사용자 삭제
  const handleDelete = async (id: string) => {
    try {
      setIsDeleting(true)
      const result = await deleteUser(id)

      if (result.success) {
        toast.success('사용자가 삭제되었습니다.')
        // 프론트 상태에서만 삭제
        setUsers((prev) => prev.filter((user) => user._id !== id))
        setIsDeleteOpen(false)
        setSelectedUser(null)
      } else {
        toast.error(result.error || '삭제에 실패했습니다.')
      }
    } catch (error) {
      console.error('사용자 삭제 오류:', error)
      toast.error('삭제 중 오류가 발생했습니다.')
    } finally {
      setIsDeleting(false)
    }
  }

  // 사용자 상태 토글
  const handleToggleStatus = async (userId: string) => {
    try {
      const result = await toggleUserStatus(userId)

      if (result.success) {
        toast.success(result.message)
        // 프론트 상태만 직접 갱신
        setUsers((prev) =>
          prev.map((user) =>
            user._id === userId ? { ...user, isActive: !user.isActive } : user
          )
        )
      } else {
        toast.error(result.error || '상태 변경에 실패했습니다.')
      }
    } catch (error) {
      console.error('사용자 상태 변경 오류:', error)
      toast.error('상태 변경 중 오류가 발생했습니다.')
    }
  }

  // 사용자 역할 토글
  const handleToggleRole = async (userId: string) => {
    try {
      const result = await toggleUserRole(userId)

      if (result.success) {
        toast.success(result.message)
        // 프론트 상태만 직접 갱신
        setUsers((prev) =>
          prev.map((user) =>
            user._id === userId
              ? { ...user, role: user.role === 'admin' ? 'user' : 'admin' }
              : user
          )
        )
      } else {
        toast.error(result.error || '역할 변경에 실패했습니다.')
      }
    } catch (error) {
      console.error('사용자 역할 변경 오류:', error)
      toast.error('역할 변경 중 오류가 발생했습니다.')
    }
  }

  // 검색 필터링
  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // 페이지 변경
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    fetchUsers(page, searchTerm)
  }

  // 상세정보 버튼 클릭 시
  const handleDetailClick = (user: UserData) => {
    setSelectedUser(user)
    setIsDetailOpen(true)
  }

  // 삭제 버튼 클릭 시
  const handleDeleteClick = (user: UserData) => {
    setSelectedUser(user)
    setDeleteName(user.name || user.email)
    setIsDeleteOpen(true)
  }

  // 삭제 확인 시
  const handleDeleteConfirm = () => {
    if (selectedUser) {
      handleDelete(selectedUser._id)
    }
  }

  // 검색어 입력 시 페이지를 1로 초기화
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  useEffect(() => {
    fetchUsers(currentPage, searchTerm)
  }, [currentPage, searchTerm, fetchUsers])

  if (loading) {
    return (
      <div className='flex items-center justify-center py-8'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto'></div>
          <p className='mt-2 text-sm text-gray-600'>데이터를 불러오는 중...</p>
        </div>
      </div>
    )
  }

  return (
    <Card className='border-starbucks-green-pale bg-white'>
      <CardHeader>
        <CardTitle className='font-gmarket text-starbucks-green text-xl'>
          회원 관리
        </CardTitle>
        <CardDescription className='font-nanum'>
          사용자 계정을 관리하고 권한을 설정할 수 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {/* 검색 */}
          <div className='flex items-center justify-between'>
            <div className='relative w-64'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
              <Input
                placeholder='사용자 검색...'
                value={searchTerm}
                onChange={handleSearchChange}
                className='pl-10'
              />
            </div>
          </div>

          {/* 사용자 목록 테이블 */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center justify-between'>
                사용자 목록
                <Badge variant='secondary'>총 {users.length}명</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>사용자</TableHead>
                    <TableHead>이메일</TableHead>
                    <TableHead className='text-center'>역할</TableHead>
                    <TableHead className='text-center'>상태</TableHead>
                    <TableHead className='text-center'>방문수</TableHead>
                    <TableHead className='text-center'>가입일</TableHead>
                    <TableHead>관리</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user._id}>
                      <TableCell className='font-medium'>
                        <div className='flex items-center gap-2'>
                          <div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold'>
                            {user.name
                              ? user.name.charAt(0).toUpperCase()
                              : 'U'}
                          </div>
                          <span className='truncate max-w-[120px]'>
                            {user.name || '이름 없음'}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className='text-sm text-gray-600 truncate max-w-[200px]'>
                        {user.email}
                      </TableCell>
                      <TableCell>
                        <div className='flex justify-center'>
                          <Badge
                            variant={
                              user.role === 'admin' ? 'default' : 'secondary'
                            }
                            className={`${
                              user.role === 'admin'
                                ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
                                : 'bg-gray-100 text-gray-800 border-gray-300'
                            }`}
                          >
                            {user.role === 'admin' ? (
                              <>
                                <Crown className='w-3 h-3' />
                                관리자
                              </>
                            ) : (
                              <>
                                <User className='w-3 h-3' />
                                사용자
                              </>
                            )}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className='flex justify-center'>
                          <Badge
                            variant={user.isActive ? 'default' : 'destructive'}
                            className={`${
                              user.isActive
                                ? 'bg-green-100 text-green-800 border-green-300'
                                : 'bg-red-100 text-red-800 border-red-300'
                            }`}
                          >
                            {user.isActive ? (
                              <>
                                <Shield className='w-3 h-3' />
                                활성
                              </>
                            ) : (
                              <>
                                <Ban className='w-3 h-3' />
                                비활성
                              </>
                            )}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className='text-center'>
                        <span className='text-sm font-medium'>
                          {user.visitCount}
                        </span>
                      </TableCell>
                      <TableCell className='text-center text-sm'>
                        {new Date(user.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <div className='flex items-center'>
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
                            title={user.isActive ? '비활성화' : '활성화'}
                            onClick={() => handleToggleStatus(user._id)}
                          >
                            {user.isActive ? (
                              <Ban className='h-4 w-4' />
                            ) : (
                              <Shield className='h-4 w-4' />
                            )}
                          </Button>

                          <Button
                            variant='ghost'
                            size='sm'
                            title={
                              user.role === 'admin'
                                ? '일반 사용자로 변경'
                                : '관리자로 변경'
                            }
                            onClick={() => handleToggleRole(user._id)}
                          >
                            {user.role === 'admin' ? (
                              <User className='h-4 w-4' />
                            ) : (
                              <Crown className='h-4 w-4' />
                            )}
                          </Button>

                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant='ghost'
                                size='sm'
                                title='삭제하기'
                                onClick={() => handleDeleteClick(user)}
                              >
                                <Trash2 className='h-4 w-4' />
                              </Button>
                            </AlertDialogTrigger>
                          </AlertDialog>
                        </div>
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

          {/* 사용자 상세정보 Dialog */}
          <DialogUserDetail
            open={isDetailOpen}
            onOpenChange={setIsDetailOpen}
            user={selectedUser}
          />

          {/* 사용자 삭제 Dialog */}
          <DialogUserDel
            open={isDeleteOpen}
            onOpenChange={setIsDeleteOpen}
            name={deleteName}
            onDeleteConfirm={handleDeleteConfirm}
            isDeleting={isDeleting}
          />
        </div>
      </CardContent>
    </Card>
  )
}
