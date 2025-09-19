'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { updateUser } from '@/lib/actions/user.actions'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogDescription,
} from '@/components/ui/dialog'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface EditUserDialogProps {
  user: {
    _id: string
    name: string
    email: string
    role: string
    visitCount: number
  }
}

export default function UserEdit({ user }: EditUserDialogProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [role, setRole] = useState(user.role)
  const [visitCount, setVisitCount] = useState(user.visitCount.toString())

  const handleUpdate = async () => {
    const result = await updateUser(user._id, {
      name,
      email,
      role,
      visitCount: Number(visitCount),
    })

    if (result?.success) {
      toast.success('회원 정보가 수정되었습니다!')
      router.refresh()
      setOpen(false)
    } else {
      toast.error('회원 정보 수정에 실패했습니다.')
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size='sm'>수정</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>회원 정보 수정</DialogTitle>
          <DialogDescription>
            회원 정보를 수정하면 복구할 수 없습니다.
          </DialogDescription>
        </DialogHeader>

        <div className='grid gap-4 pt-6'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='justify-end'>
              이름
            </Label>
            <Input
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='email' className='justify-end'>
              이메일
            </Label>
            <Input
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label className='justify-end'>권한</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger>
                <SelectValue placeholder='권한 선택' />
              </SelectTrigger>
              <SelectContent className='rounded'>
                <SelectItem value='User'>User</SelectItem>
                <SelectItem value='Admin'>Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label className='justify-end'>방문 수</Label>
            <Input
              type='number'
              value={visitCount}
              onChange={(e) => setVisitCount(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter className='mt-4'>
          <DialogClose asChild>
            <Button type='button' variant='outline'>
              취소
            </Button>
          </DialogClose>
          <Button onClick={handleUpdate}>저장</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
