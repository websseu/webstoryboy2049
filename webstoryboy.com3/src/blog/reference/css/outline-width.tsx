import ReferBread from '@/components/refer/refer-bread'

export default function OutlineWidth() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='outline-width' />
        <h2>outline-width</h2>
        <p>
          outline-width는 CSS 시각 스타일 속성 중 하나로, 요소에 적용된 윤곽선(outline)의
          굵기(두께)를 지정합니다. 윤곽선은 요소의 바깥쪽에 표시되는 선이며, outline-style,
          outline-color와 함께 사용됩니다.
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
