import ReferBread from '@/components/refer/refer-bread'

export default function MaskBorderOutset() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-border-outset' />
        <h2>mask-border-outset</h2>
        <p>
          mask-border-outset은 CSS 마스킹 속성 중 하나로, mask-border를 사용할 때 마스크 영역을 요소
          바깥으로 얼마나 확장(outset)할지를 설정합니다. 즉, 마스크 테두리가 요소 바깥쪽으로 얼마나
          더 튀어나오게 할지를 지정합니다.
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
