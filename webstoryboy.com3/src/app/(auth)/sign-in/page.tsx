import { Metadata } from 'next'
import SignInForm from '@/components/auth/signin-form'
import SignInFooter from '@/components/auth/signin-footer'
import GoogleSignInForm from '@/components/auth/google-signin-form'
import GithubSignInForm from '@/components/auth/github-signin-form'

export const metadata: Metadata = {
  title: '로그인',
}

export default function SignInPage() {
  return (
    <section className='max-w-[500px]'>
      <div className='sm:border border-zinc-300 rounded-md p-4 sm:p-10'>
        <h2 className='text-2xl text-center font-nexon mb-6'>로그인</h2>
        <SignInForm />
        <p className='sperator line my-6'>
          <span>or</span>
        </p>
        <GoogleSignInForm />
        <GithubSignInForm />
        <SignInFooter />
      </div>
    </section>
  )
}
