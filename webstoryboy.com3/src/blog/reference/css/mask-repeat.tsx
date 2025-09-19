import ReferBread from '@/components/refer/refer-bread'

export default function MaskRepeat() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-repeat' />
        <h2>mask-repeat</h2>
        <p>
          mask-repeat은 CSS 마스킹(mask-image) 속성 중 하나로, 마스크 이미지가 요소 영역을 덮지 못할
          경우 해당 마스크 이미지를 반복할지 여부와 반복 방향을 설정하는 속성입니다. 기능적으로는
          background-repeat과 매우 유사하지만, 가시성(masking) 효과에만 적용된다는 점이 다릅니다.
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
