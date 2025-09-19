import ReferBread from '@/components/refer/refer-bread'
import React from 'react'

export default function Animation() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='animation' />
        <h2>animation</h2>
        <p>
          animation은 CSS 애니메이션을 한 번에 정의할 수 있는 축약(shorthand) 속성입니다. 이 속성을
          사용하면 애니메이션 이름, 지속 시간, 타이밍 함수, 지연 시간, 반복 횟수, 재생 방향, 충전
          모드, 재생 상태를 한 줄로 설정할 수 있습니다.
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
