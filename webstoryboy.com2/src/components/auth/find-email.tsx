'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { checkEmailExists } from '@/lib/actions/user.actions'

const schema = z.object({
  email: z.string().email('유효한 이메일 형식이 아닙니다.'),
})

export default function FindEmailForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: '' },
  })

  const onSubmit = async (values: { email: string }) => {
    const res = await checkEmailExists(values.email)

    if (res.success) {
      toast.success(`${values.email} 주소는 가입된 이메일입니다.`)
    } else {
      toast.error(`${values.email} 주소는 존재하지 않습니다.`)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 font-nanum'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className='flex gap-2 mt-4 mb-1'>
                  <Input {...field} className='flex-1' placeholder='이메일을 입력하세요' />
                  <Button
                    type='submit'
                    size='lg'
                    className='font-nexon h-11'
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? '확인 중...' : '확인'}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
