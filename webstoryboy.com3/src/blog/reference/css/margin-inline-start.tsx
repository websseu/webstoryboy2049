import ReferBread from '@/components/refer/refer-bread'

export default function MarginInlineStart() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='margin-inline-start' />
        <h2>margin-inline-start</h2>
        <p>
          margin-inline-start는 CSS 논리 속성(Logical Property) 중 하나로, 요소의 인라인 방향 시작
          쪽(보통 왼쪽)에 외부 여백(margin)을 설정하는 속성입니다. 이는 margin-left 또는
          margin-right를 **문서의 쓰기 방향(writing-mode)**에 따라 자동으로 대체해주는 유연한
          속성입니다.
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
