import ReferBread from '@/components/refer/refer-bread'
import React from 'react'

export default function anchorScope() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='anchor-scope' />
        <h2>anchor-scope</h2>
        <p>
          anchor-scope 속성은 CSS Anchor Positioning Module Level 1의 일부로, 앵커
          이름(anchor-name)이 적용된 요소가 어느 범위(subtree) 에서만 유효한지 제한합니다.
          기본적으로 페이지 어디서든 마지막으로 선언된 앵커가 대상 요소와 연결되지만, anchor-scope를
          쓰면 특정 조상 요소 아래로 범위를 좁혀 컴포넌트 재사용 시 네이밍 충돌을 방지할 수 있습니다
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
