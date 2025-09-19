'use client'

import React from 'react'
import { Gift } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

interface DialogPlayTitleProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (title: string) => void
}

const schema = z.object({
  title: z
    .string()
    .min(1, '제목을 입력해주세요.')
    .max(20, '제목은 20자 이내로 입력해주세요.'),
})

export default function DialogPlayTitle({
  open,
  onOpenChange,
  onSubmit,
}: DialogPlayTitleProps) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { title: '' },
  })

  const handleSubmit = async (values: { title: string }) => {
    onSubmit(values.title.trim())
    onOpenChange(false)
    form.reset()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[450px] pb-6'>
        <DialogHeader className='border-b pb-6 mb-5'>
          <DialogTitle className='flex items-center font-black text-orange-600 justify-center gap-1 text-xl'>
            <Gift className='h-5 w-5' />
            재생목록 만들기
          </DialogTitle>
          <DialogDescription className='text-center'>
            재생목록의 제목을 입력해주세요!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className='space-y-6'
          >
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className='flex gap-2 mb-1'>
                      <Input
                        {...field}
                        className='flex-1'
                        placeholder='재생목록 제목을 입력하세요'
                      />
                      <Button
                        type='submit'
                        className='h-11 bg-orange-600 hover:bg-orange-500'
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? '저장 중...' : '저장'}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
