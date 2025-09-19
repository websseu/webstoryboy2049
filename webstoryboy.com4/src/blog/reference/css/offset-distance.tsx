import ReferBread from '@/components/refer/refer-bread'

export default function OffsetDistance() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='offset-distance' />
        <h2>offset-distance</h2>
        <p>
          offset-distance는 CSS Motion Path(모션 경로) 기능 중 하나로, offset-path로 지정한 경로를
          따라 요소가 얼마나 이동했는지를 퍼센트(%) 또는 거리(px 등)로 지정합니다. 즉, 요소가 경로
          위에서 어느 지점에 위치할지를 설정하는 속성입니다.
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
