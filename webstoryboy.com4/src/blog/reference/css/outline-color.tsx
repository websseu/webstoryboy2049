import ReferBread from '@/components/refer/refer-bread'

export default function OutlineColor() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='outline-color' />
        <h2>outline-color</h2>
        <p>
          outline-color는 CSS 시각 속성 중 하나로, 요소의 외곽선(윤곽선, outline)의 색상을 지정하는
          데 사용됩니다. outline 속성을 쪼갠 개별 속성 중 하나이며, 주로 키보드 포커스 스타일,
          접근성 향상 등에 활용됩니다.
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
