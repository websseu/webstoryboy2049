import ReferBread from '@/components/refer/refer-bread'

export default function MaxInlineSize() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='max-inline-size' />
        <h2>max-inline-size</h2>
        <p>
          max-height는 CSS 박스 모델(Box Model) 속성 중 하나로, 요소가 가질 수 있는 최대
          높이(Height)를 제한하는 속성입니다. 즉, 콘텐츠가 커져도 지정된 최대 높이를 넘지 않도록
          제어할 수 있습니다.
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
