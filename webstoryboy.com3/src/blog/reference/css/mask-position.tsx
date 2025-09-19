import ReferBread from '@/components/refer/refer-bread'

export default function MaskPosition() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-position' />
        <h2>mask-position</h2>
        <p>
          mask-position은 CSS 마스킹(masking) 속성 중 하나로, mask-image로 지정된 마스크 이미지의
          위치(배치 위치)를 설정하는 속성입니다. 이는 background-position과 거의 동일하게 작동하며,
          마스크 이미지가 요소 내에서 어디에 정렬될지를 지정합니다.
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
