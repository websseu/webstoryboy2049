import { Metadata } from 'next'
import SignUpFooter from '@/components/auth/signup-footer'
import SignUpForm from '@/components/auth/signup-form'

export const metadata: Metadata = {
  title: '회원가입',
}

export default function SignUpPage() {
  return (
    <section className='max-w-[500px]'>
      <div className='sm:border border-zinc-300 rounded-md p-4 sm:p-10'>
        <h2 className='text-2xl text-center font-nexon mb-6'>회원가입</h2>
        <SignUpForm />
        <SignUpFooter />
      </div>
    </section>
  )
}
