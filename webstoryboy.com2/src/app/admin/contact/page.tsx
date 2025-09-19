import { Metadata } from 'next'
import { formatDateTime } from '@/lib/utils'
import { getContacts } from '@/lib/actions/contact.action'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@/components/ui/table'
import PageIndex from '@/components/page/page-index'
import PageSelector from '@/components/page/page-selector'
import ContactDelete from '@/components/contact/contact-delete'

export const metadata: Metadata = {
  title: '문의사항 목록',
}

export default async function AdminContactPage(props: {
  searchParams: Promise<{ page?: string; limit?: string }>
}) {
  const { page = '1', limit = '10' } = await props.searchParams
  const currentPage = Number(page)
  const perPage = Number(limit)

  const res = await getContacts(currentPage, perPage)
  if (!res.success) {
    console.error('회원 목록 불러오기 오류:', res.error)
    return null
  }

  const pageContacts = res.contacts || []
  const totalItems = res.totalItems || 0
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage))

  return (
    <section>
      <div className='relative'>
        <Table className='border-b text-sm'>
          <TableCaption className='caption-top text-zinc-800 text-xl font-nexon mb-4 mt-0'>
            문의사항 목록 <span className='text-[10px] text-zinc-500'>{totalItems}</span>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[60px] text-center'>번호</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>제목</TableHead>
              <TableHead>메시지</TableHead>
              <TableHead>작성일</TableHead>
              <TableHead className='w-[60px] text-center'>관리</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pageContacts.length > 0 ? (
              pageContacts.map((c, idx) => (
                <TableRow key={c._id}>
                  <TableCell className='text-center'>
                    {(currentPage - 1) * perPage + idx + 1}
                  </TableCell>
                  <TableCell>
                    <a href={`mailto:${c.email}`} className='underline underline-offset-4'>
                      {c.email}
                    </a>
                  </TableCell>
                  <TableCell>{c.title}</TableCell>
                  <TableCell className='whitespace-pre-wrap'>{c.message}</TableCell>
                  <TableCell className='text-center'>{formatDateTime(c.createdAt)}</TableCell>
                  <TableCell>
                    <ContactDelete contactId={c._id.toString()} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className='text-center py-4'>
                  등록된 문의사항이 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* 페이징 네비게이션 */}
        <div className='mt-4'>
          <PageIndex
            currentPage={currentPage}
            totalPages={totalPages}
            limit={perPage}
            baseUrl='/admin/contact'
          />
        </div>
        <div className='absolute right-0 top-2'>
          <PageSelector currentLimit={perPage} baseUrl='/admin/contact' currentPage={currentPage} />
        </div>
      </div>
    </section>
  )
}
