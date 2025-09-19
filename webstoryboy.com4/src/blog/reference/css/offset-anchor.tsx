import ReferBread from '@/components/refer/refer-bread'

export default function OffsetAnchor() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='offset-anchor' />
        <h2>offset-anchor</h2>
        <p>
          offset-anchor는 CSS Motion Path(모션 경로) 관련 속성 중 하나로, offset-path로 지정한
          경로를 따라 움직이는 요소에서 그 요소 내 `&quot;기준 위치(anchor point)`&quot;를 어디로
          잡을지 지정하는 속성입니다. 즉, 움직이는 대상의 어느 지점을 경로에 맞출지 결정하는 역할을
          합니다.
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
