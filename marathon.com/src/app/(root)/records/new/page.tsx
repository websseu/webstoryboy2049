import { auth } from '@/auth'
import RunningRecordForm from '@/components/records/record-form'
import { redirect } from 'next/navigation'

export default async function NewRecordPage() {
  const session = await auth()

  if (!session?.user?.id) {
    redirect('/auth/signin')
  }

  return (
    <div className='container mx-auto px-4 py-8 max-w-2xl'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold mb-2'>🏃‍♂️ 새 달리기 기록</h1>
        <p className='text-gray-600'>오늘의 달리기 기록을 작성해보세요</p>
      </div>

      <RunningRecordForm userId={session.user.id} />
    </div>
  )
}
