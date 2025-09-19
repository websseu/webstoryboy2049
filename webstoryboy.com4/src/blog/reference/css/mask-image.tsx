import ReferBread from '@/components/refer/refer-bread'

export default function MaskImage() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-image' />
        <h2>mask-image</h2>
        <p>
          mask-image는 CSS 마스킹(masking) 기능의 핵심 속성으로, 요소 위에 마스크 이미지나
          그라디언트를 적용해 특정 영역만 보이게 하거나 감추는 역할을 합니다. 즉, 요소의 시각적 표시
          여부를 이미지나 패턴으로 조절할 수 있습니다.
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
