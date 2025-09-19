'use client'

import { useState } from 'react'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Eye, EyeOff } from 'lucide-react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { IUserSignIn } from '@/lib/types'
import { UserSignInSchema } from '@/lib/validator'
import { signInWithCredentials } from '@/lib/actions/user.actions'
import { isRedirectError } from 'next/dist/client/components/redirect-error'

const signInDefaultValues =
  process.env.NODE_ENV === 'development'
    ? {
        email: 'webstoryboy@naver.com',
        password: '123456',
      }
    : {
        email: '',
        password: '',
      }

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<IUserSignIn>({
    resolver: zodResolver(UserSignInSchema),
    defaultValues: signInDefaultValues,
  })

  const onSubmit = async (data: IUserSignIn) => {
    try {
      const res = await signInWithCredentials({
        email: data.email,
        password: data.password,
      })

      if (res?.error) {
        toast.error('🙅🏽 이메일 또는 비밀번호가 일치하지 않습니다.')
        return
      }

      toast.success('🎉 환영합니다! 로그인이 완료되었습니다.')
      redirect('/')
    } catch (error) {
      if (isRedirectError(error)) {
        throw error
      }
      toast.error('🙅🏽 알 수 없는 오류가 발생했습니다. 관리자 문의 요망')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='space-y-6'>
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
              <FormItem className='w-full'>
                <FormLabel className='font-poppins'>Password</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder='비밀번호를 입력하세요!'
                      {...field}
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword((v) => !v)}
                      className='eye'
                      aria-label={
                        showPassword ? 'Hide password' : 'Show password'
                      }
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='text-center w-full'>
            <Button
              type='submit'
              className='w-full py-6 cursor-pointer'
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? '로그인 중...' : '로그인'}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
