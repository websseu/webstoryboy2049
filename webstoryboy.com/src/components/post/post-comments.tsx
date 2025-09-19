import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { MessageCircleMore } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function PostComments() {
  return (
    <Dialog>
      {/* 1) 트리거: 이 영역을 누르면 다이얼로그가 열린다 */}
      <DialogTrigger asChild>
        <div className='flex items-center justify-center gap-1 mt-2 border bg-black text-white text-center p-2 rounded-full text-sm cursor-pointer'>
          <MessageCircleMore className='w-5 h-5' /> 댓글 쓰기
        </div>
      </DialogTrigger>

      {/* 2) 실제 다이얼로그 콘텐츠 */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>댓글 작성</DialogTitle>
          <DialogDescription>이 글에 대한 의견을 남겨보세요.</DialogDescription>
        </DialogHeader>

        {/* (나중에 onChange, value, submit 핸들러 연결) */}
        <Textarea
          placeholder='댓글을 입력하세요…'
          rows={4}
          className='w-full mb-4'
        />

        <DialogFooter className='space-x-2'>
          <Button>작성</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
