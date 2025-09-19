'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { SignInWithGoogle } from '@/lib/actions/user.action'
import { FcGoogle } from 'react-icons/fc'

export function GoogleSignInForm() {
  const SignInButton = () => {
    const { pending } = useFormStatus()
    return (
      <Button
        disabled={pending}
        className='w-full font-poppins font-light'
        variant='outline'
      >
        <FcGoogle className='w-4 h-4' />
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
