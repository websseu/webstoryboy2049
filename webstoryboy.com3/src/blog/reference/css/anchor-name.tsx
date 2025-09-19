import ReferBread from '@/components/refer/refer-bread'
import React from 'react'

export default function AnchorName() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='anchor-name' />
        <h2>anchor-name</h2>
        <p>
          anchor-name 속성은 CSS Anchor Positioning Module(Level 1)의 실험적 기능으로, 특정 요소를
          “앵커(anchor)”로 정의하여 다른 요소의 위치 기준점(reference point)으로 사용할 수 있게
          해줍니다. 앵커 요소에는 하나 이상의 식별자 이름(dashed-ident)을 부여하고, 위치를 잡고자
          하는 요소에서 해당 이름을 position-anchor 속성값으로 지정하면 두 요소가
          연관(association)되어 앵커를 기준으로 배치됩니다.
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
