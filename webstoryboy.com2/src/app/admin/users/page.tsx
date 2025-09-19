import Image from 'next/image'
import { Metadata } from 'next'
import { getAllUsersPages } from '@/lib/actions/user.actions'
import { IUser } from '@/lib/db/model/user.model'
import { formatDateTime } from '@/lib/utils'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import PageIndex from '@/components/page/page-index'
import PageSelector from '@/components/page/page-selector'
import UserDelete from '@/components/user/user-delete'
import UserEdit from '@/components/user/user-edit'

export const metadata: Metadata = {
  title: '회원 목록',
}

export default async function AdminUserPage(props: {
  searchParams: Promise<{ page?: string; limit?: string }>
}) {
  const searchParams = await props.searchParams
  const page = searchParams.page ? Number.parseInt(searchParams.page) : 1
  const limit = searchParams.limit ? Number.parseInt(searchParams.limit) : 10
  const res = await getAllUsersPages({ page, limit })

  if (!res.success) {
    console.error('회원 목록 불러오기 오류:', res.error)
    return null
  }

  const users = res.users || []
  const totalUsers = res.totalUsers || 0
  const totalPages = res.totalPages || 1
  const currentPage = res.currentPage || 1

  return (
    <section>
      <div className='relative'>
        <Table className='border-b text-sm'>
          <TableCaption className='caption-top text-zinc-800 text-xl font-nexon mb-4 mt-0'>
            회원 목록 <span className='text-[10px] text-zinc-500'>{totalUsers}</span>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>번호</TableHead>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>권한</TableHead>
              <TableHead>가입</TableHead>
              <TableHead>방문</TableHead>
              <TableHead className='w-[100px]'>관리</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length > 0 ? (
              users.map((user: IUser, index: number) => (
                <TableRow key={user._id}>
                  <TableCell className='w-[60px] text-center'>
                    {(page - 1) * 10 + index + 1}
                  </TableCell>
                  <TableCell>
                    <Image
                      src={user.image ? `${user.image}` : '/face/default.jpg'}
                      alt={user.name}
                      width={24}
                      height={24}
                      className='rounded-full inline mr-1.5'
                    />
                    {user.name ?? '-'}
                  </TableCell>
                  <TableCell className='text-center'>{user.email}</TableCell>
                  <TableCell className='text-center'>{user.role ?? 'User'}</TableCell>
                  <TableCell className='text-center'>{formatDateTime(user.createdAt)}</TableCell>
                  <TableCell className='text-center'>{user.visitCount}</TableCell>
                  <TableCell className='flex gap-1'>
                    <UserEdit
                      user={{
                        _id: user._id.toString(),
                        name: user.name || '',
                        email: user.email || '',
                        role: user.role || 'User',
                        visitCount: user.visitCount || 0,
                      }}
                    />
                    <UserDelete userId={user._id.toString()} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className='text-center py-4'>
                  등록된 회원이 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className='mt-4'>
          <PageIndex
            currentPage={currentPage}
            totalPages={totalPages}
            limit={limit}
            baseUrl='/admin/users'
          />
        </div>
        <div className='absolute right-0 top-2'>
          <PageSelector currentLimit={limit} baseUrl='/admin/users' currentPage={currentPage} />
        </div>
      </div>
    </section>
  )
}
