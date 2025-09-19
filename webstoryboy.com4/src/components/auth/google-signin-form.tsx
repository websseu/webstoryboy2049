'use client'

import { SignInWithGoogle } from '@/lib/actions/user.actions'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import { FcGoogle } from 'react-icons/fc'

export default function GoogleSignInForm() {
  const SignInButton = () => {
    const { pending } = useFormStatus()

    return (
      <Button
        disabled={pending}
        className='w-full h-11 rounded text-zinc-700 font-poppins cursor-pointer'
        variant='outline'
      >
        <FcGoogle />
        {pending ? 'Redirecting to Google...' : 'Sign In with Google'}
      </Button>
    )
  }

  return (
    <form action={SignInWithGoogle}>
      <SignInButton />
    </form>
  )
}
