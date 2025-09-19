import ReferBread from '@/components/refer/refer-bread'
import React from 'react'

export default function animationRangeStart() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='animation-range-start' />
        <h2>animation-range-start</h2>
        <p>
          animation-range-start는 CSS의 Scroll-driven animation(스크롤 연동 애니메이션) 기능에서
          사용하는 속성으로, 애니메이션이 언제 시작할지를 스크롤 기준으로 정의합니다.
        </p>
      </div>
      {/* side */}
      <div className='side'>
        <div className='sticky top-4 h-[100vh]'>
          <div className='no-scrollbar h-full overflow-auto pb-10'>
            <div className='ad w-[300px] h-[300px] bg-amber-100'></div>
          </div>
        </div>
      </div>
    </>
  )
}
