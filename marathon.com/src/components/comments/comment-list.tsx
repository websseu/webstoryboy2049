'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { User, MoreHorizontal, Edit, Trash2 } from 'lucide-react'

import { getComments, deleteComment } from '@/lib/actions/comment.action'
import { toast } from 'sonner'
import CommentEditForm from './comment-edit'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

interface Comment {
  _id: string
  content: string
  isEdited: boolean
  createdAt: string
  userId: {
    _id: string
    name: string
    image: string
  }
}

interface CommentListProps {
  marathonId: string
  currentUserId?: string
  refreshTrigger?: number
}

export default function CommentList({
  marathonId,
  currentUserId,
  refreshTrigger,
}: CommentListProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)

  const loadComments = async (pageNum = 1, append = false) => {
    try {
      const result = await getComments(marathonId, pageNum, 10)
      if (result.success) {
        if (append) {
          setComments((prev) => [...prev, ...result.comments])
        } else {
          setComments(result.comments)
        }
        setHasMore(result.pagination?.hasNextPage || false)
      }
    } catch (error) {
      toast.error('댓글을 불러오는데 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadComments()
  }, [marathonId, refreshTrigger])

  const handleDelete = async (commentId: string) => {
    if (!confirm('댓글을 삭제하시겠습니까?')) return

    const result = await deleteComment(commentId, currentUserId!)
    if (result.success) {
      toast.success(result.message)
      setComments((prev) => prev.filter((comment) => comment._id !== commentId))
    } else {
      toast.error(result.error || '댓글 삭제에 실패했습니다.')
    }
  }

  const handleLoadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    loadComments(nextPage, true)
  }

  if (loading) {
    return (
      <div className='space-y-4'>
        {[...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardContent className='p-4'>
              <div className='animate-pulse flex gap-3'>
                <div className='w-10 h-10 bg-gray-200 rounded-full'></div>
                <div className='flex-1 space-y-2'>
                  <div className='h-4 bg-gray-200 rounded w-1/4'></div>
                  <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (comments.length === 0) {
    return (
      <Card>
        <CardContent className='p-8 text-center'>
          <p className='text-gray-500'>아직 댓글이 없습니다.</p>
          <p className='text-sm text-gray-400 mt-2'>첫 번째 댓글을 작성해보세요!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className='space-y-4'>
      {comments.map((comment) => (
        <Card key={comment._id}>
          <CardContent className='p-4'>
            {editingCommentId === comment._id ? (
              <CommentEditForm
                comment={comment}
                onCancel={() => setEditingCommentId(null)}
                onSuccess={() => {
                  setEditingCommentId(null)
                  loadComments()
                }}
              />
            ) : (
              <div className='flex gap-3'>
                <Avatar className='w-10 h-10'>
                  <AvatarImage
                    src={comment.userId.image || '/placeholder.svg'}
                    alt={comment.userId.name}
                  />
                  <AvatarFallback>
                    <User className='h-5 w-5' />
                  </AvatarFallback>
                </Avatar>
                <div className='flex-1'>
                  <div className='flex items-center justify-between mb-2'>
                    <div className='flex items-center gap-2'>
                      <span className='font-medium'>{comment.userId.name}</span>
                      {comment.isEdited && <Badge variant='secondary'>수정됨</Badge>}
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='text-sm text-gray-500'>
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                      {currentUserId === comment.userId._id && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant='ghost' size='sm'>
                              <MoreHorizontal className='h-4 w-4' />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align='end'>
                            <DropdownMenuItem onClick={() => setEditingCommentId(comment._id)}>
                              <Edit className='h-4 w-4 mr-2' />
                              수정
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleDelete(comment._id)}
                              className='text-red-600'
                            >
                              <Trash2 className='h-4 w-4 mr-2' />
                              삭제
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </div>
                  </div>
                  <p className='text-gray-900 whitespace-pre-wrap'>{comment.content}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      {hasMore && (
        <div className='text-center'>
          <Button variant='outline' onClick={handleLoadMore}>
            더 보기
          </Button>
        </div>
      )}
    </div>
  )
}
