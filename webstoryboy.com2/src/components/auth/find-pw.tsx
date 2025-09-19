'use client'

import { z } from 'zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  resetUserPassword,
  sendPasswordResetCode,
  verifyPasswordResetCode,
} from '@/lib/actions/user.actions'

const EmailSchema = z.object({
  email: z.string().email(),
})

const CodeSchema = z.object({
  code: z.string().min(6, '6자리 숫자를 입력해주세요.'),
})

const ResetSchema = z
  .object({
    password: z.string().min(6, '6자리 이상 입력해주세요.'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })

export default function FindPasswordForm({ setOpen }: { setOpen?: (value: boolean) => void }) {
  const router = useRouter()
  const [step, setStep] = useState<'email' | 'code' | 'reset'>('email')
  const [email, setEmail] = useState('')

  const emailForm = useForm({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      email: process.env.NODE_ENV === 'development' ? '' : '',
    },
  })

  const codeForm = useForm({
    resolver: zodResolver(CodeSchema),
    defaultValues: { code: '' },
  })

  const resetForm = useForm({
    resolver: zodResolver(ResetSchema),
    defaultValues: { password: '', confirmPassword: '' },
  })

  const handleSendCode = async ({ email }: { email: string }) => {
    const res = await sendPasswordResetCode(email)
    if (res.success) {
      toast.success('인증번호를 이메일로 보냈습니다.')
      setEmail(email)
      setStep('code')
    } else {
      toast.error(res.error || '메일 전송 실패')
    }
  }

  const handleVerifyCode = async ({ code }: { code: string }) => {
    const res = await verifyPasswordResetCode(email, code)
    if (res.success) {
      toast.success('인증 완료되었습니다.')
      setStep('reset')
    } else {
      toast.error(res.error || '인증 실패')
    }
  }

  const handleResetPassword = async (data: { password: string }) => {
    const res = await resetUserPassword(email, data.password)
    if (res.success) {
      toast.success('비밀번호가 재설정되었습니다. 다시 로그인해주세요.')

      setTimeout(() => {
        setOpen?.(false)
        router.push('/sign-in')
      }, 1000)
    } else {
      toast.error(res.error || '비밀번호 재설정 실패')
    }
  }

  return (
    <div className='space-y-6'>
      {step === 'email' && (
        <Form {...emailForm}>
          <form onSubmit={emailForm.handleSubmit(handleSendCode)}>
            <FormField
              control={emailForm.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input placeholder='가입한 이메일을 입력하세요' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full mt-4 h-11'>
              인증번호 보내기
            </Button>
          </form>
        </Form>
      )}

      {step === 'code' && (
        <Form {...codeForm}>
          <form onSubmit={codeForm.handleSubmit(handleVerifyCode)}>
            <FormField
              control={codeForm.control}
              name='code'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>인증번호</FormLabel>
                  <FormControl>
                    <Input placeholder='이메일로 받은 6자리 숫자' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full mt-4 h-11'>
              인증 확인
            </Button>
          </form>
        </Form>
      )}

      {step === 'reset' && (
        <Form {...resetForm}>
          <form onSubmit={resetForm.handleSubmit(handleResetPassword)}>
            <FormField
              control={resetForm.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>새 비밀번호</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='새 비밀번호 입력'
                      className='mb-4'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={resetForm.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호 확인</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='다시 입력' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit' className='w-full mt-4 h-11'>
              비밀번호 재설정
            </Button>
          </form>
        </Form>
      )}
    </div>
  )
}
