import ReferBread from '@/components/refer/refer-bread'

export default function MarginInlineEnd() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='margin-inline-end' />
        <h2>margin-inline-end</h2>
        <p>
          margin-inline-end는 CSS 논리 속성(Logical Property) 중 하나로, 요소의 인라인 방향
          끝쪽(오른쪽 또는 왼쪽)에 외부 여백(margin)을 설정하는 속성입니다. 이는 margin-right 또는
          margin-left를 글쓰기 방향에 따라 자동으로 대체하는 역할을 합니다.
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
