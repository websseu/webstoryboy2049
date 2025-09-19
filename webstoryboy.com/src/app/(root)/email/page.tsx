'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function VerifyEmailPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [message, setMessage] = useState('이메일 인증을 확인 중입니다...')

  useEffect(() => {
    if (!token) {
      setMessage('잘못된 접근입니다.')
      return
    }

    // 실제 인증 처리를 하는 비동기 함수
    const verifyEmail = async () => {
      try {
        const response = await fetch(`/api/email?token=${token}`) // 서버에 인증 요청
        const result = await response.json()

        // API 결과에 따라 메시지 및 리다이렉트 처리
        if (result.success) {
          setMessage(
            '이메일 인증이 완료되었습니다. 로그인 페이지로 이동합니다.'
          )
          // 5초 후 로그인 페이지로 리다이렉트
          setTimeout(() => router.push('/sign-in'), 5000)
        } else {
          setMessage(result.message || '이메일 인증에 실패하였습니다.')
        }
      } catch (error) {
        console.error('서버 요청 중 오류 발생:', error)
        setMessage('서버 오류가 발생했습니다. 다시 시도해주세요.')
      }
    }

    verifyEmail()
  }, [token, router])

  return (
    <section className='flex items-center justify-center text-zinc-500 text-sm'>
      <p className='mt-44'>{message} 🕵️‍♀️✨</p>
    </section>
  )
}
