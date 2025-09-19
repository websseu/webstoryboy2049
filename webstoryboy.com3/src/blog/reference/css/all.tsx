import ReferBread from '@/components/refer/refer-bread'
import React from 'react'

export default function All() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='all' />
        <h2>all</h2>
        <p>
          all 속성은 모든 CSS 속성을 한 번에 초기 상태로 되돌리거나 상속/재설정할 때 사용하는
          단축(shorthand) 속성입니다. 주로 특정 요소에만 “모든 속성을 초기화”하거나 “부모 스타일을
          완전히 무시”하고 싶을 때 유용합니다.
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
