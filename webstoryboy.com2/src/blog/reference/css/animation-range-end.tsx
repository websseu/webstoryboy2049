import React from 'react'
import ReferBread from '@/components/refer/refer-bread'

export default function animationRangeEnd() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='animation-range-end' />
        <h2>animation-range-end</h2>
        <p>
          animation-range-end는 Scroll-driven animations(스크롤 연동 애니메이션)에서 사용되는 CSS
          속성으로, 애니메이션이 언제 끝날지를 스크롤 위치 기준으로 정의합니다.
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
