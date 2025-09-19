import ReferBread from '@/components/refer/refer-bread'
import React from 'react'

export default function AlignTracks() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='align-tracks' />
        <h2>align-tracks</h2>
        <p>
          align-tracks는 CSS Grid Level 3의 머시니 스타일(masonry-style) 그리드에서 각 트랙(track)별
          정렬을 제어하기 위해 제안되었으나, 사양에서 제거된 실험적 기능입니다
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
