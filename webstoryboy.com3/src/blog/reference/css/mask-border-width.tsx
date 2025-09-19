import ReferBread from '@/components/refer/refer-bread'

export default function MaskBorderWidth() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-border-width' />
        <h2>mask-border-width</h2>
        <p>
          mask-border-width는 CSS 마스킹(masking) 속성 중 하나로, mask-border-source에서 지정한
          마스크 이미지가 요소의 테두리(border) 영역에 적용될 두께를 지정합니다. 즉, 마스크 이미지가
          테두리 안에서 얼마나 넓게 적용될지를 조절하는 역할을 합니다.
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
