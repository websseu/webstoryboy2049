import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import MyPageContent from '@/components/mypage/my-page-content'

export default async function MyPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  return <MyPageContent session={session} />
}
