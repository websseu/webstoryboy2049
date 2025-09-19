import ReferBread from '@/components/refer/refer-bread'

export default function MaxWidth() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='max-width' />
        <h2>max-width</h2>
        <p>
          max-width는 CSS 박스 모델(Box Model) 속성 중 하나로, 요소가 가질 수 있는 최대
          너비(width)를 설정합니다. 즉, 콘텐츠가 아무리 커져도 지정된 최대 너비를 넘지 않도록
          제한하는 데 사용됩니다.
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
