import ReferBread from '@/components/refer/refer-bread'
import React from 'react'

export default function AnimationRange() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='animation-range' />
        <h2>animation-range</h2>
        <p>
          animation-range는 Scroll-driven animations(스크롤 기반 애니메이션)에서 사용하는 CSS
          속성으로, 애니메이션이 언제 시작하고 언제 끝나는지를 스크롤 범위 기준으로 지정합니다. 즉,
          스크롤 위치에 따라 애니메이션의 진행 정도를 제어하는 데 사용됩니다.
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
