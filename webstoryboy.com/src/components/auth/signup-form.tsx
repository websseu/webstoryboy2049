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
import { IUserSignUp } from '@/lib/types'
import { UserSignUpSchema } from '@/lib/validator'
import { registerUser } from '@/lib/actions/user.actions'
import { isRedirectError } from 'next/dist/client/components/redirect-error'

const signUpDefaultValues =
  process.env.NODE_ENV === 'development'
    ? {
        name: 'webstoryboy',
        email: 'webstoryboy@naver.com',
        password: '123456',
        confirmPassword: '123456',
      }
    : {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm<IUserSignUp>({
    resolver: zodResolver(UserSignUpSchema),
    defaultValues: signUpDefaultValues,
  })

  const onSubmit = async (data: IUserSignUp) => {
    try {
      const res = await registerUser(data)

      if (!res.success) {
        toast.error('🙅🏽 이메일이 존재합니다.')
        return
      }
      toast.success('🎉 환영합니다! 📨 이메일 인증 부탁드립니다!')

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
          {/* Name Field */}
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-poppins'>Name</FormLabel>
                <FormControl>
                  <Input placeholder='이름을 입력해주세요!' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Confirm Password Field */}
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-poppins'>Confirm Password</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder='확인 비밀번호를 입력하세요!'
                      {...field}
                    />
                    <button
                      type='button'
                      onClick={() => setShowConfirmPassword((v) => !v)}
                      className='eye'
                      aria-label={
                        showConfirmPassword ? 'Hide password' : 'Show password'
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className='text-center w-full cursor-pointer'>
            <Button
              type='submit'
              className='w-full py-6 cursor-pointer'
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? '회원가입 중...' : '회원가입'}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
