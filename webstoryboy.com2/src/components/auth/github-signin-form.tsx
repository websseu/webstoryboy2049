'use client'

import { SignInWithGithub } from '@/lib/actions/user.actions'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import { AiFillGithub } from 'react-icons/ai'

export default function GithubSignInForm() {
  const SignInButton = () => {
    const { pending } = useFormStatus()
    return (
      <Button
        disabled={pending}
        className='w-full h-11 rounded text-zinc-700 font-poppins cursor-pointer mt-2'
        variant='outline'
      >
        <AiFillGithub />
        {pending ? 'Redirecting to Github...' : 'Sign In with Github'}
      </Button>
    )
  }

  return (
    <form action={SignInWithGithub}>
      <SignInButton />
    </form>
  )
}
