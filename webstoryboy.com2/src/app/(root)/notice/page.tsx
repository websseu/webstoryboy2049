import { Metadata } from 'next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: '공지사항',
  description: '웹스토리보이 서비스의 최신 공지사항을 확인하세요.',
}

const notices = [
  {
    id: '1',
    title: '서비스 점검 안내 (5월 10일)',
    content:
      '보다 안정적인 서비스 제공을 위해 5월 10일 오전 2시부터 4시까지 서버 점검이 진행됩니다. 점검 중에는 일부 기능 사용이 제한될 수 있습니다. 이용에 불편을 드려 죄송합니다.',
  },
  {
    id: '2',
    title: '신규 강의 오픈! "웹 디자인 기능사 2025"',
    content:
      '2025 최신 출제 경향을 반영한 "웹 디자인 기능사" 강의가 새롭게 업데이트되었습니다. 초보자도 쉽게 따라올 수 있도록 구성했습니다. 많은 관심 부탁드립니다!',
  },
  {
    id: '3',
    title: '이메일 인증 시스템 도입 안내(5월 1일)',
    content:
      '회원 가입 시 이메일 인증 절차가 추가되었습니다. 이는 보안을 위한 조치이며, 인증 후 서비스를 정상 이용하실 수 있습니다.',
  },
]

export default function NoticePage() {
  return (
    <section>
      <div className='page__title'>
        <h2>공지사항</h2>
        <p className='text-zinc-500 mt-2 text-sm text-center mb-8'>
          서비스 관련 중요한 안내 사항을 확인하세요.
        </p>
      </div>

      <Accordion type='single' collapsible className='space-y-4 font-nanum'>
        {notices.map((notice) => (
          <AccordionItem key={notice.id} value={notice.id}>
            <AccordionTrigger>{notice.title}</AccordionTrigger>
            <AccordionContent className='text-zinc-600 text-sm leading-relaxed p-4'>
              {notice.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
