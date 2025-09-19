'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Search,
  MoreVertical,
  Trash2,
  Eye,
  Loader2,
  MessageCircle,
  User,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  CheckCircle,
  XCircle,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import { formatDateTime } from '@/lib/utils'
import { getCommentsPaginated } from '@/lib/actions/comment.action'

interface CommentPost {
  _id: string
  title: string
  slug: string
}

interface Comment {
  _id: string
  postId: string
  author: string
  content: string
  email?: string
  isDeleted: boolean
  createdAt: string
  updatedAt: string
  // 포스트 정보 (populate된 경우)
  post?: CommentPost
}

interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalCount: number
  limit: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

type StatusFilter = 'all' | 'active' | 'deleted'

export default function CommentsManage() {
  const [comments, setComments] = useState<Comment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')

  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [pagination, setPagination] = useState<PaginationInfo | null>(null)

  const [isDeleting, setIsDeleting] = useState(false)

  // 검색어 디바운싱
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
      setCurrentPage(1) // 검색 시 첫 페이지로 이동
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm])

  // 데이터 가져오기
  const fetchComments = useCallback(async () => {
    try {
      setIsLoading(true)
      const result = await getCommentsPaginated(
        currentPage,
        pageSize,
        debouncedSearchTerm || undefined,
        statusFilter
      )

      if (result.success) {
        setComments(result.comments || [])
        setPagination(result.pagination || null)
        setError(null)
      } else {
        setError(result.error || '데이터를 불러오는데 실패했습니다.')
      }
    } catch (err) {
      setError('데이터를 불러오는 중 오류가 발생했습니다.')
      console.error('댓글 데이터 로딩 오류:', err)
    } finally {
      setIsLoading(false)
    }
  }, [currentPage, pageSize, debouncedSearchTerm, statusFilter])

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  // 페이지 크기 변경
  const handlePageSizeChange = (newPageSize: string) => {
    setPageSize(Number(newPageSize))
    setCurrentPage(1)
  }

  // 상태 필터 변경
  const handleStatusFilterChange = (value: StatusFilter) => {
    setStatusFilter(value)
    setCurrentPage(1)
  }

  // 페이지 이동
  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  // 댓글 삭제 (소프트 삭제)
  const handleDeleteComment = async (comment: Comment) => {
    try {
      setIsDeleting(true)
      const result = await deleteComment(comment._id)

      if (result.success) {
        toast.success('댓글이 삭제되었습니다', {
          description: result.message,
        })

        // 목록에서 삭제된 댓글 상태 업데이트
        setComments((prevComments) =>
          prevComments.map((c) => (c._id === comment._id ? { ...c, isDeleted: true } : c))
        )
      } else {
        toast.error('삭제 실패', {
          description: result.message,
        })
      }
    } catch (error) {
      console.error('댓글 삭제 중 오류:', error)
      toast.error('삭제 실패', {
        description: '댓글 삭제 중 오류가 발생했습니다.',
      })
    } finally {
      setIsDeleting(false)
    }
  }

  // 댓글 복원
  const handleRestoreComment = async (comment: Comment) => {
    try {
      setIsDeleting(true)
      const result = await restoreComment(comment._id)

      if (result.success) {
        toast.success('댓글이 복원되었습니다', {
          description: result.message,
        })

        // 목록에서 복원된 댓글 상태 업데이트
        setComments((prevComments) =>
          prevComments.map((c) => (c._id === comment._id ? { ...c, isDeleted: false } : c))
        )
      } else {
        toast.error('복원 실패', {
          description: result.message,
        })
      }
    } catch (error) {
      console.error('댓글 복원 중 오류:', error)
      toast.error('복원 실패', {
        description: '댓글 복원 중 오류가 발생했습니다.',
      })
    } finally {
      setIsDeleting(false)
    }
  }

  // 페이지네이션 버튼 생성
  const renderPaginationButtons = () => {
    if (!pagination) return null

    const buttons = []
    const { currentPage, totalPages } = pagination

    const startPage = Math.max(1, currentPage - 2)
    const endPage = Math.min(totalPages, currentPage + 2)

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          variant={i === currentPage ? 'default' : 'outline'}
          size='sm'
          onClick={() => goToPage(i)}
          className='w-8 h-8 p-0'
        >
          {i}
        </Button>
      )
    }

    return buttons
  }

  // 상태별 통계 계산
  const getStatusCounts = () => {
    return {
      total: comments.length,
      active: comments.filter((c) => !c.isDeleted).length,
      deleted: comments.filter((c) => c.isDeleted).length,
    }
  }

  const statusCounts = getStatusCounts()

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <div className='relative w-64'>
            <Search className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
            <Input
              placeholder='작성자, 댓글 내용 검색'
              className='pl-9'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Select value={statusFilter} onValueChange={handleStatusFilterChange}>
            <SelectTrigger className='w-32'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>전체</SelectItem>
              <SelectItem value='active'>활성</SelectItem>
              <SelectItem value='deleted'>삭제됨</SelectItem>
            </SelectContent>
          </Select>

          <Select value={pageSize.toString()} onValueChange={handlePageSizeChange}>
            <SelectTrigger className='w-24'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='10'>10개</SelectItem>
              <SelectItem value='20'>20개</SelectItem>
              <SelectItem value='50'>50개</SelectItem>
            </SelectContent>
          </Select>

          {pagination && (
            <div className='text-sm text-muted-foreground'>
              총 <span className='font-semibold text-foreground'>{pagination.totalCount}</span>개
              댓글
              {pagination.totalCount > 0 && (
                <span className='ml-2'>
                  ({(currentPage - 1) * pageSize + 1}-
                  {Math.min(currentPage * pageSize, pagination.totalCount)})
                </span>
              )}
            </div>
          )}
        </div>

        <div className='flex items-center gap-2'>
          <Badge variant='outline' className='text-blue-600 h-6'>
            활성: {statusCounts.active}
          </Badge>
          <Badge variant='outline' className='text-red-600 h-6'>
            삭제됨: {statusCounts.deleted}
          </Badge>
        </div>
      </div>

      {isLoading ? (
        <div className='flex justify-center items-center py-8'>
          <Loader2 className='h-8 w-8 animate-spin text-primary' />
          <span className='ml-2'>데이터를 불러오는 중...</span>
        </div>
      ) : error ? (
        <div className='bg-destructive/10 p-4 rounded-md text-destructive text-center'>
          <p className='font-medium'>{error}</p>
          <Button onClick={fetchComments} variant='outline' className='mt-2'>
            다시 시도
          </Button>
        </div>
      ) : (
        <>
          <div className='rounded border'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[60px]'>번호</TableHead>
                  <TableHead>댓글 내용</TableHead>
                  <TableHead>작성자</TableHead>
                  <TableHead>게시글</TableHead>
                  <TableHead>상태</TableHead>
                  <TableHead>작성일</TableHead>
                  <TableHead>관리</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comments.length > 0 ? (
                  comments.map((comment, index) => (
                    <TableRow key={comment._id} className={comment.isDeleted ? 'opacity-50' : ''}>
                      <TableCell className='text-center'>
                        {(currentPage - 1) * pageSize + index + 1}
                      </TableCell>
                      <TableCell className='max-w-[400px]'>
                        <div className='space-y-1'>
                          <div className='flex items-start gap-2'>
                            <MessageCircle className='h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0' />
                            <p className='text-sm line-clamp-3' title={comment.content}>
                              {comment.content}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className='flex items-center gap-2'>
                          <User className='h-4 w-4 text-muted-foreground' />
                          <div>
                            <div className='font-medium'>{comment.author}</div>
                            {comment.email && (
                              <div className='text-xs text-muted-foreground'>{comment.email}</div>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {comment.post ? (
                          <Link
                            href={`/posts/${comment.post.slug}`}
                            target='_blank'
                            className='hover:underline underline-offset-4'
                          >
                            <div className='max-w-[200px] truncate' title={comment.post.title}>
                              {comment.post.title}
                            </div>
                          </Link>
                        ) : (
                          <span className='text-muted-foreground'>게시글 정보 없음</span>
                        )}
                      </TableCell>
                      <TableCell className='text-center'>
                        <Badge variant={comment.isDeleted ? 'destructive' : 'default'}>
                          {comment.isDeleted ? (
                            <>
                              <XCircle className='h-3 w-3 mr-1' />
                              삭제됨
                            </>
                          ) : (
                            <>
                              <CheckCircle className='h-3 w-3 mr-1' />
                              활성
                            </>
                          )}
                        </Badge>
                      </TableCell>
                      <TableCell className='text-center'>
                        <div className='flex items-center gap-1 justify-center'>
                          <Calendar className='h-3 w-3 text-muted-foreground' />
                          <span className='text-sm'>{formatDateTime(comment.createdAt)}</span>
                        </div>
                      </TableCell>
                      <TableCell className='text-center'>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant='ghost' size='icon' disabled={isDeleting}>
                              <MoreVertical className='h-4 w-4' />
                              <span className='sr-only'>메뉴 열기</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align='end'>
                            {comment.post && (
                              <Link href={`/posts/${comment.post.slug}`} target='_blank'>
                                <DropdownMenuItem>
                                  <Eye className='h-4 w-4 mr-2' />
                                  게시글 보기
                                </DropdownMenuItem>
                              </Link>
                            )}
                            {comment.isDeleted ? (
                              <DropdownMenuItem
                                className='text-green-600'
                                onClick={() => handleRestoreComment(comment)}
                                disabled={isDeleting}
                              >
                                <CheckCircle className='h-4 w-4 mr-2' />
                                복원
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem
                                className='text-destructive'
                                onClick={() => handleDeleteComment(comment)}
                                disabled={isDeleting}
                              >
                                <Trash2 className='h-4 w-4 mr-2 text-red-500' />
                                삭제
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className='text-center py-6 text-muted-foreground'>
                      {searchTerm ? '검색 결과가 없습니다.' : '등록된 댓글이 없습니다.'}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* 페이지네이션 */}
          {pagination && pagination.totalPages > 1 && (
            <div className='flex items-center justify-between'>
              <div className='text-sm text-muted-foreground'>
                페이지 {pagination.currentPage} / {pagination.totalPages}
              </div>

              <div className='flex items-center gap-2'>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => goToPage(1)}
                  disabled={!pagination.hasPrevPage}
                  className='w-8 h-8 p-0'
                >
                  <ChevronsLeft className='h-4 w-4' />
                </Button>

                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={!pagination.hasPrevPage}
                  className='w-8 h-8 p-0'
                >
                  <ChevronLeft className='h-4 w-4' />
                </Button>

                <div className='flex gap-1'>{renderPaginationButtons()}</div>

                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={!pagination.hasNextPage}
                  className='w-8 h-8 p-0'
                >
                  <ChevronRight className='h-4 w-4' />
                </Button>

                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => goToPage(pagination.totalPages)}
                  disabled={!pagination.hasNextPage}
                  className='w-8 h-8 p-0'
                >
                  <ChevronsRight className='h-4 w-4' />
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
