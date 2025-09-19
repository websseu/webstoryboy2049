import React, { useCallback, useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { getAllPostsPage } from '@/lib/actions/post.action'
import {
  Loader2,
  Search,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  Eye,
  Trash2,
  Pencil,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '../ui/badge'
import { formatDateTime } from '@/lib/utils'
import DialogPostDetail from '../dialog/dialog-post-detail'
import DialogPostDelete from '../dialog/dialog-post-delete'
import DialogPostAdd from '../dialog/dialog-post-add'
import DialogPostEdit from '../dialog/dialog-post-edit'
import { deletePost } from '@/lib/actions/post.action'
import { toast } from 'sonner'

interface Post {
  _id: string
  title: string
  slug: string
  category: string
  description?: string
  isPublished: boolean
  storeId?: string
  numViews: number
  numLikes: number
  createdAt: string
  updatedAt: string
}

interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalCount: number
  limit: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export default function AdminPosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [pagination, setPagination] = useState<PaginationInfo | null>(null)

  const [detailDialogOpen, setDetailDialogOpen] = useState(false)
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [postToDelete, setPostToDelete] = useState<Post | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const [addDialogOpen, setAddDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [postToEdit, setPostToEdit] = useState<Post | null>(null)

  // 데이터 가져오기
  const fetchPosts = useCallback(async () => {
    try {
      setIsLoading(true)

      const result = await getAllPostsPage(
        currentPage,
        pageSize,
        debouncedSearchTerm || undefined
      )

      if (result.success) {
        setPosts(result.posts)
        setPagination(result.pagination!)
        setError(null)
      } else {
        setError(result.error || '데이터를 불러오는데 실패했습니다.')
      }
    } catch (err) {
      setError('데이터를 불러오는 중 오류가 발생했습니다.')
      console.error('글목록 데이터 로딩 오류:', err)
    } finally {
      setIsLoading(false)
    }
  }, [currentPage, pageSize, debouncedSearchTerm])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  // 페이지 크기 변경
  const handlePageSizeChange = (newPageSize: string) => {
    setPageSize(Number(newPageSize))
    setCurrentPage(1)
  }

  // 페이지 이동
  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  // 페이지네이션 버튼 생성
  const renderPaginationButtons = () => {
    if (!pagination) return null

    const buttons = []
    const { currentPage, totalPages } = pagination

    // 이전 페이지들
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

  const handleDeleteConfirm = async () => {
    if (!postToDelete) return
    setIsDeleting(true)
    try {
      const result = await deletePost(postToDelete._id)
      if (result.success) {
        toast.success('글 삭제가 완료되었습니다.')
        setPosts((prev) => prev.filter((p) => p._id !== postToDelete._id))
        setDeleteDialogOpen(false)
        setPostToDelete(null)
      } else {
        toast.error('글 삭제 중 오류가 발생했습니다.', {
          description: result.error,
        })
      }
    } catch {
      toast.error('글 삭제 중 오류가 발생했습니다.', {
        description: '오류가 발생했습니다.',
      })
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl font-gmarket text-green-700 flex items-center gap-2'>
          글 관리({pagination?.totalCount || 0})
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
              <Search className='absolute left-3 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input
                placeholder='타이틀, 카테고리, 스토어ID, 태그'
                className='pl-9 h-9'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setDebouncedSearchTerm(searchTerm)
                    setCurrentPage(1)
                  }
                }}
              />
            </div>

            {/* 페이지 갯수 설정 */}
            <div className='flex items-center gap-2'>
              <Select
                value={pageSize.toString()}
                onValueChange={handlePageSizeChange}
              >
                <SelectTrigger className='w-24 py-4 text-muted-foreground'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='10'>10개</SelectItem>
                  <SelectItem value='20'>20개</SelectItem>
                  <SelectItem value='50'>50개</SelectItem>
                </SelectContent>
              </Select>

              {/* 글 추가하기 버튼 */}
              <Button
                onClick={() => setAddDialogOpen(true)}
                className='bg-green-700 hover:bg-green-800 h-9'
              >
                글 추가하기
              </Button>
            </div>
          </div>

          {isLoading ? (
            <div className='flex justify-center items-center py-8 mt-8'>
              <Loader2 className='h-8 w-8 animate-spin text-primary' />
              <span className='ml-2'>데이터를 불러오는 중...</span>
            </div>
          ) : error ? (
            <div className='bg-destructive/10 p-4 rounded-md text-destructive text-center'>
              <p className='font-medium'>{error}</p>
              <Button onClick={fetchPosts} variant='outline' className='mt-2'>
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
                      <TableHead>제목</TableHead>
                      <TableHead>슬러그</TableHead>
                      <TableHead className='text-center'>카테고리</TableHead>
                      <TableHead className='text-center'>스토어ID</TableHead>
                      <TableHead className='text-center'>공개여부</TableHead>
                      <TableHead className='text-center'>조회수</TableHead>
                      <TableHead className='text-center'>좋아요</TableHead>
                      <TableHead className='text-center'>생성일</TableHead>
                      <TableHead className='text-center'>관리</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {posts.length > 0 ? (
                      posts.map((post, index) => {
                        return (
                          <TableRow
                            key={post._id}
                            className='text-muted-foreground'
                          >
                            <TableCell className='text-center'>
                              {(currentPage - 1) * pageSize + index + 1}
                            </TableCell>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>{post.slug}</TableCell>
                            <TableCell className='text-center'>
                              {post.category}
                            </TableCell>

                            <TableCell className='text-center'>
                              <Badge variant='outline' className='text-xs'>
                                {post.storeId}
                              </Badge>
                            </TableCell>
                            <TableCell className='text-center'>
                              <Badge
                                variant={
                                  post.isPublished ? 'outline' : 'destructive'
                                }
                                className='cursor-pointer'
                              >
                                {post.isPublished ? '공개' : '비공개'}
                              </Badge>
                            </TableCell>
                            <TableCell className='text-center'>
                              {post.numViews}
                            </TableCell>
                            <TableCell className='text-center'>
                              {post.numLikes}
                            </TableCell>
                            <TableCell className='text-center'>
                              <Badge variant='outline'>
                                {formatDateTime(post.createdAt)}
                              </Badge>
                            </TableCell>
                            <TableCell className='text-center'>
                              <div className='flex items-center justify-center gap-1'>
                                <Button
                                  variant='ghost'
                                  size='sm'
                                  title='상세정보'
                                  onClick={() => {
                                    setSelectedPost(post)
                                    setDetailDialogOpen(true)
                                  }}
                                >
                                  <Eye className='h-4 w-4' />
                                </Button>
                                <Button
                                  variant='ghost'
                                  size='sm'
                                  title='수정하기'
                                  onClick={() => {
                                    setPostToEdit(post)
                                    setEditDialogOpen(true)
                                  }}
                                >
                                  <Pencil className='h-4 w-4' />
                                </Button>
                                <Button
                                  variant='ghost'
                                  size='sm'
                                  title='삭제하기'
                                  onClick={() => {
                                    setPostToDelete(post)
                                    setDeleteDialogOpen(true)
                                  }}
                                >
                                  <Trash2 className='h-4 w-4' />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        )
                      })
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={9}
                          className='text-center py-6 text-muted-foreground'
                        >
                          등록된 문의사항이 없습니다.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>

              <div className='flex justify-center items-center gap-2'>
                {/* 페이지네이션 */}
                {pagination && pagination.totalPages > 1 && (
                  <div className='flex items-center justify-between'>
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

                      <div className='flex gap-1'>
                        {renderPaginationButtons()}
                      </div>

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
              </div>
            </>
          )}
        </div>
      </CardContent>

      {/* 게시글 상세 다이얼로그 */}
      <DialogPostDetail
        open={detailDialogOpen}
        onOpenChange={setDetailDialogOpen}
        post={selectedPost}
      />

      {/* 게시글 삭제 다이얼로그 */}
      <DialogPostDelete
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        title={postToDelete?.title}
        onDeleteConfirm={handleDeleteConfirm}
        isDeleting={isDeleting}
      />

      {/* 게시글 추가 다이얼로그 */}
      <DialogPostAdd
        open={addDialogOpen}
        onOpenChange={setAddDialogOpen}
        onSuccess={fetchPosts}
      />

      {/* 게시글 수정 다이얼로그 */}
      <DialogPostEdit
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        post={postToEdit}
        onEditSuccess={fetchPosts}
      />
    </Card>
  )
}
