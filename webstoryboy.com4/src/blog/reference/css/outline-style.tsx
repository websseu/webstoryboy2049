import ReferBread from '@/components/refer/refer-bread'

export default function OutlineStyle() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='outline-style' />
        <h2>outline-style</h2>
        <p>
          outline-style은 CSS 시각 스타일 속성 중 하나로, 요소에 적용할 윤곽선(outline)의 선
          스타일을 지정합니다. 윤곽선은 일반적으로 키보드 포커스 등에서 많이 쓰이며, 이 속성으로
          실선, 점선, 이중선 등을 설정할 수 있습니다.
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
