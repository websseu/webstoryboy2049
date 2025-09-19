'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { IContactInput } from '@/lib/types'
import { ContactSchema } from '@/lib/validator'
import { createContact } from '@/lib/actions/contact.action'

export default function ContactPage() {
  const form = useForm<IContactInput>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: '',
      title: '',
      message: '',
    },
  })

  const onSubmit = async (data: IContactInput) => {
    const res = await createContact(data)

    if (res.success) {
      toast.success('문의가 등록되었습니다. 빠른 시일 내에 답변드리겠습니다.')
      form.reset()
    } else {
      toast.error('문의 저장 중 오류가 발생했습니다.')
    }
  }

  return (
    <section className='max-w-3xl mx-auto'>
      <div className='page__title'>
        <h2 className='text-center'>문의사항</h2>
        <p className='text-zinc-500 mt-2 text-center text-sm mb-8'>
          궁금한 사항이 있으시면 무엇이든지 물어보세요!
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='flex flex-col gap-5 md:flex-row'>
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
              name='title'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='font-poppins'>Title</FormLabel>
                  <FormControl>
                    <Input placeholder='제목을 입력해주세요!' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-poppins'>Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={6}
                    placeholder='문의 내용을 입력해주세요.'
                    className='min-h-64'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type='submit'
            className='w-full py-6 cursor-pointer'
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? '문의 중...' : '문의하기'}
          </Button>
        </form>
      </Form>
    </section>
  )
}
