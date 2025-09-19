import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import Footer from '@/components/footer'

const cssList = [
  { title: 'accent-color', description: '체크박스·라디오 강조 색상을 지정합니다.' },
  { title: 'align-content', description: '플렉스·그리드 컨테이너 행 정렬을 설정합니다.' },
  { title: 'align-items', description: '아이템의 교차 축 정렬 방식을 지정합니다.' },
  { title: 'align-self', description: '개별 아이템의 교차 축 정렬을 오버라이드합니다.' },
  { title: 'animation', description: '애니메이션 이름·지속시간·반복 횟수를 정의합니다.' },
  { title: 'animation-delay', description: '애니메이션 시작 전 지연 시간을 설정합니다.' },
  { title: 'animation-duration', description: '애니메이션의 총 실행 시간을 지정합니다.' },
  { title: 'background-color', description: '요소의 배경색을 설정합니다.' },
  { title: 'border', description: '테두리 스타일·두께·색상을 정의합니다.' },
  { title: 'border-radius', description: '요소 모서리를 둥글게 만드는 반경을 지정합니다.' },
  { title: 'box-shadow', description: '요소에 그림자 효과를 추가합니다.' },
  { title: 'color', description: '텍스트 및 전경색을 설정합니다.' },
  { title: 'display', description: '박스 유형 및 레이아웃 방식을 정의합니다.' },
  { title: 'flex', description: '플렉스 아이템의 성장·축소·기본 크기를 설정합니다.' },
  { title: 'flex-direction', description: '플렉스 컨테이너의 주 축 방향을 설정합니다.' },
  { title: 'font-size', description: '텍스트 크기를 지정합니다.' },
  { title: 'grid', description: '그리드 레이아웃을 단축 구문으로 설정합니다.' },
  { title: 'grid-template-columns', description: '그리드 열 트랙의 크기를 정의합니다.' },
  { title: 'margin', description: '요소의 바깥 여백을 설정합니다.' },
  { title: 'padding', description: '요소의 안쪽 여백을 설정합니다.' },
]

export default async function ReferenceCssPage() {
  return (
    <>
      <section className='main__container'>
        <Table className='border-t border-dashed'>
          <TableCaption className='caption-top text-zinc-800 text-xl font-nexon mb-4'>
            CSS
          </TableCaption>
          <TableBody>
            {cssList.map((item) => (
              <TableRow key={item.title} className='border-dashed'>
                <TableCell className='text-zinc-600 px-4 py-2'>
                  <Link href={`/reference/css/${item.title}`}>{item.title}</Link>
                </TableCell>
                <TableCell className='text-zinc-500 py-2.5'>
                  <Link href={`/reference/css/${item.title}`}>{item.description}</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <Footer />
    </>
  )
}
