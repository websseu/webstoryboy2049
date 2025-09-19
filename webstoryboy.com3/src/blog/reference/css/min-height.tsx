import ReferBread from '@/components/refer/refer-bread'

export default function MinHeight() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='min-height' />
        <h2>min-height</h2>
        <p>
          min-height는 CSS 박스 모델(Box Model) 속성 중 하나로, 요소가 최소한으로 가져야 할 높이를
          지정합니다. 즉, 콘텐츠가 아무리 작아도 요소의 높이가 지정된 값보다 작아지지 않도록
          제한합니다.
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
