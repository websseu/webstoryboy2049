import ReferBread from '@/components/refer/refer-bread'

export default function OffsetPosition() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='offset-position' />
        <h2>offset-position</h2>
        <p>
          offset-position은 CSS Motion Path(모션 경로) 관련 속성 중 하나로, 요소가 offset-path
          경로를 따라 움직일 때, 경로의 시작점(0% 지점)을 어디에 배치할지를 지정합니다. 즉, 경로
          자체를 요소 내 어디에 둘지 결정하는 속성입니다.
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
