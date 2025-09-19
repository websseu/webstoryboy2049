'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { MessageCircle, Send, LogIn, User, UserPlus } from 'lucide-react'
import { CommentInputSchema } from '@/lib/validator'
import { createComment } from '@/lib/actions/comment.action'
import DialogSignin from '@/components/dialog/dialog-signin'
import DialogSignup from '@/components/dialog/dialog-signup'
import type { Session } from 'next-auth'

interface CommentFormProps {
  postId: string
  session: Session | null
}

// 클라이언트에서 입력받을 데이터 타입
interface CommentFormData {
  content: string
  author: string
  email?: string
}

export function CommentForm({ postId, session }: CommentFormProps) {
  // Dialog 상태 관리
  const [isSigninOpen, setIsSigninOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  const form = useForm<CommentFormData>({
    resolver: zodResolver(CommentInputSchema.omit({ postId: true })),
    defaultValues: {
      content: '',
      author: session?.user?.name || '',
      email: session?.user?.email || '',
    },
  })

  // 입력 길이 추적
  const contentValue = form.watch('content') || ''

  async function onSubmit(data: CommentFormData) {
    if (!session) {
      toast.error('로그인이 필요합니다', {
        description: '댓글을 작성하려면 먼저 로그인해주세요.',
      })
      return
    }

    try {
      // 서버로 전송할 데이터 (postId, content, author, email 포함)
      const submitData = {
        postId,
        content: data.content,
        author: session.user?.name || '익명',
        email: session.user?.email || null,
      }

      const result = await createComment(submitData)

      if (result.success) {
        toast.success('댓글이 성공적으로 작성되었습니다!', {
          description: '다른 사용자들이 회원님의 후기를 볼 수 있습니다.',
        })

        // 성공 시 폼 초기화 (세션 정보는 유지)
        form.reset({
          content: '',
          author: session.user?.name || '',
          email: session.user?.email || '',
        })
      } else {
        toast.error('댓글 작성에 실패했습니다', {
          description: result.message || '다시 시도해주세요.',
        })

        if (result.errors) {
          console.error('검증 오류:', result.errors)
        }
      }
    } catch (error) {
      toast.error('예상치 못한 오류가 발생했습니다', {
        description: '잠시 후 다시 시도해주세요.',
        duration: 5000,
      })
      console.error('댓글 작성 오류:', error)
    }
  }

  // 로그인하지 않은 경우
  if (!session) {
    return (
      <>
        <Card>
          <CardHeader>
            <CardTitle className='text-xl flex items-center gap-2'>
              <MessageCircle className='w-5 h-5' />
              댓글 작성
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-center py-8'>
              <LogIn className='w-6 h-6 text-muted-foreground mx-auto mb-4' />
              <h3 className='text-lg font-medium mb-2'>로그인이 필요합니다</h3>
              <p className='text-sm text-muted-foreground mb-6'>
                댓글을 작성하려면 먼저 로그인하거나 회원가입을 해주세요.
              </p>

              {/* 로그인/회원가입 버튼 */}
              <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                <Button
                  onClick={() => setIsSigninOpen(true)}
                  className='flex items-center gap-2'
                  variant='default'
                >
                  <LogIn className='w-4 h-4' />
                  로그인하기
                </Button>
                <Button
                  onClick={() => setIsSignupOpen(true)}
                  className='flex items-center gap-2'
                  variant='outline'
                >
                  <UserPlus className='w-4 h-4' />
                  회원가입하기
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dialog 컴포넌트들 */}
        <DialogSignin open={isSigninOpen} onOpenChange={setIsSigninOpen} />
        <DialogSignup open={isSignupOpen} onOpenChange={setIsSignupOpen} />
      </>
    )
  }

  // 로그인한 경우
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl flex items-center gap-2'>
          <MessageCircle className='w-5 h-5' />
          댓글 작성
        </CardTitle>
        {/* 로그인한 사용자 정보 표시 */}
        <div className='flex items-center gap-2 text-sm text-muted-foreground mt-2'>
          <User className='w-4 h-4' />
          <span>{session.user?.name || '익명'}님으로 댓글을 작성합니다</span>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            {/* 댓글 내용 입력 */}
            <FormField
              control={form.control}
              name='content'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='sr-only'>댓글 내용</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder={`이 매장에 대한 후기나 의견을 남겨주세요...\n\n예시:\n- 매장 분위기가 어떤가요?\n- 좌석은 충분한가요?\n- 특별한 메뉴나 서비스가 있나요?`}
                      maxLength={500}
                      rows={6}
                      className='w-full resize-none'
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <div className='flex justify-between items-center'>
                    <p className='text-xs text-muted-foreground'>{contentValue.length}/500자</p>
                    <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                      <span>💡 팁: 구체적인 후기일수록 다른 분들에게 도움이 됩니다</span>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 작성 가이드 */}
            <div className='bg-muted/50 p-4 rounded-lg'>
              <h4 className='text-sm font-medium mb-2'>댓글 작성 가이드</h4>
              <ul className='text-sm text-muted-foreground space-y-1'>
                <li>• 매장 방문 경험을 바탕으로 솔직한 후기를 남겨주세요</li>
                <li>• 다른 방문객들에게 도움이 되는 정보를 공유해주세요</li>
                <li>• 욕설이나 비방은 삼가해주세요</li>
              </ul>
            </div>

            {/* 제출 버튼 */}
            <div className='flex justify-end pt-2'>
              <Button
                type='submit'
                disabled={form.formState.isSubmitting}
                className='flex items-center gap-2 min-w-[120px]'
              >
                <Send className='w-4 h-4' />
                {form.formState.isSubmitting ? '작성 중...' : '댓글 작성'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
