import React from 'react'
import { Metadata } from 'next'
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
import DialogContactDelete from '@/components/dialog/dialog-contact-delete'

export const metadata: Metadata = {
  title: '문의사항 목록',
}

interface Contact {
  _id: string
  email: string
  title: string
  message: string
  createdAt: string
}

export default async function AdminContactPage() {
  const { success, contacts } = await getContacts()

  const data: Contact[] = success ? contacts : []

  return (
    <section>
      <h1 className='text-xl text-center font-nanum mb-4'>문의사항</h1>
      <Table className='table-fixed border-b text-sm'>
        <colgroup>
          <col style={{ width: '60px' }} />
          <col style={{ width: '220px' }} />
          <col style={{ width: '250px' }} />
          <col />
          <col style={{ width: '200px' }} />
          <col style={{ width: '60px' }} />
        </colgroup>

        <TableCaption className='sr-only'>문의사항 목록</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='text-center'>번호</TableHead>
            <TableHead>이메일</TableHead>
            <TableHead>제목</TableHead>
            <TableHead>메시지</TableHead>
            <TableHead>작성일</TableHead>
            <TableHead className='text-center'>관리</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className='text-center py-4 text-zinc-500'>
                등록된 문의사항이 없습니다.
              </TableCell>
            </TableRow>
          ) : (
            data.map((contact: Contact, idx: number) => (
              <TableRow key={contact._id} className='hover:bg-gray-50'>
                <TableCell className='text-center'>{idx + 1}</TableCell>
                <TableCell>
                  <a
                    href={`mailto:${contact.email}`}
                    className='underline underline-offset-4 hover:text-black p-1'
                  >
                    {contact.email}
                  </a>
                </TableCell>
                <TableCell className='whitespace-pre-wrap'>{contact.title}</TableCell>
                <TableCell className='whitespace-pre-wrap'>{contact.message}</TableCell>
                <TableCell className='text-center'>
                  {new Date(contact.createdAt).toLocaleString('ko-KR')}
                </TableCell>
                <TableCell className='text-center'>
                  <DialogContactDelete
                    contactId={contact._id.toString()}
                    contactEmail={contact.email}
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </section>
  )
}
