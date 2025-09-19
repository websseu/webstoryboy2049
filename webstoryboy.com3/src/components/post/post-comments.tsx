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
      <DialogTrigger asChild>
        <div className='flex items-center justify-center gap-1 mt-2 border bg-black text-white text-center p-2 rounded-full text-sm cursor-pointer'>
          <MessageCircleMore className='w-5 h-5' /> 질문하기
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>질문하기</DialogTitle>
          <DialogDescription>궁금한 사항이 있으면 무엇이든지 물어보세요!....</DialogDescription>
        </DialogHeader>

        <Textarea placeholder='댓글을 입력하세요…' rows={4} className='w-full h-20' />

        <DialogFooter>
          <Button>작성</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
