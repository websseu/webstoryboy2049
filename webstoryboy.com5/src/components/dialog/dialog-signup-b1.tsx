'use client'

import type React from 'react'

import { useState } from 'react'
import { Cake, Send } from 'lucide-react'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { ISignupInput } from '@/lib/type'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { SignupSchema } from '@/lib/validator'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { toast } from 'sonner'

export default function DialogSignup() {
  const [isOpen, setIsOpen] = useState(false)

  const form = useForm<ISignupInput>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: ISignupInput) => {
    try {
      const res = await createUser(data)

      if (res.success) {
        toast.success(res.message)
      } else {
        toast.error(res.message)
      }
    } catch (err) {
      toast.error('회원가입 중 오류가 발생했습니다.')
      console.error('회원가입 오류:', err)
    }
  }

  return (
    <>
      <DropdownMenuItem
        onSelect={(event) => {
          event.preventDefault()
          setIsOpen(true)
        }}
      >
        <Cake className='h-4 w-4' />
        회원가입
      </DropdownMenuItem>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className='sm:max-w-[450px]'>
          <DialogHeader>
            <DialogTitle className='flex items-center justify-center gap-2 mb-1 mt-4'>
              <Cake className='h-5 w-5' />
              회원가입
            </DialogTitle>
            <DialogDescription className='text-center'>
              회원가입을 하시면 다양한 서비스를 만날 있습니다.
            </DialogDescription>
          </DialogHeader>
          <div className='space-y-4 border-t border-b pb-6 pt-4'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='space-y-2'>
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='font-poppins'>Name</FormLabel>
                        <FormControl>
                          <Input placeholder='이메일을 입력해주세요!' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel className='font-poppins'>Email</FormLabel>
                        <FormControl>
                          <Input placeholder='이메일을 입력해주세요!' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='font-poppins'>Password</FormLabel>
                        <FormControl>
                          <Input
                            type='password'
                            placeholder='비밀번호를 입력해주세요.'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <Button
                    type='submit'
                    disabled={form.formState.isSubmitting}
                    className='w-full mt-4'
                    size='lg'
                  >
                    <Send />
                    {form.formState.isSubmitting ? '회원가입 중...' : '회원가입'}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
