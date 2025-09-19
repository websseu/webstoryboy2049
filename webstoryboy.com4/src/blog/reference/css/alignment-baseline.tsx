import ReferBread from '@/components/refer/refer-bread'
import React from 'react'

export default function AlignmentBaseline() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='alignment-baselines' />
        <h2>alignment-baselines</h2>
        <p>
          alignment-baseline 속성은 인라인 박스나 SVG 텍스트 요소에서 기준선(baseline)을 어떻게
          맞출지 지정합니다. 주로 여러 텍스트나 인라인 컨텐츠를 같은 기준선에 정렬할 때 사용합니다.
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
