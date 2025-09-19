import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import ContactTable from './contact-table'

export default function AdminContactPage() {
  return (
    <section>
      <div className='admin__title'>
        <h1>문의 관리</h1>
        <p>사용자 문의사항을 확인할 수 있습니다.</p>
      </div>

      <Suspense fallback={<ContactTableSkeleton />}>
        <ContactTable />
      </Suspense>
    </section>
  )
}

function ContactTableSkeleton() {
  return (
    <div className='space-y-2'>
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className='h-16 w-full' />
      ))}
    </div>
  )
}
