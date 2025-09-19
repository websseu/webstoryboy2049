import ReferBread from '@/components/refer/refer-bread'

export default function MinWidth() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='min-width' />
        <h2>min-width</h2>
        <p>
          min-width는 CSS 박스 모델 속성 중 하나로, 요소가 가질 수 있는 최소 너비(width)를
          지정합니다. 즉, 콘텐츠가 작거나 부모 요소가 작더라도 최소한 이 값 이하로는 줄어들지 않도록
          강제합니다.
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
