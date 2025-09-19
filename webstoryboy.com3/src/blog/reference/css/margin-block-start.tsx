import ReferBread from '@/components/refer/refer-bread'

export default function MarginBlockStart() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='margin-block-start' />
        <h2>margin-block-start</h2>
        <p>
          margin-block-start는 CSS 논리 속성(Logical Property) 중 하나로, 요소의 블록 방향 시작 부분
          즉, 기본적으로 위쪽(margin-top)에 여백을 주는 속성입니다.
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
