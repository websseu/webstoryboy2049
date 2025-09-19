import ReferBread from '@/components/refer/refer-bread'

export default function MarginBlock() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='margin-block' />
        <h2>margin-block</h2>
        <p>
          margin-block은 CSS 논리 속성(Logical Property) 중 하나로, 요소의 블록 방향(세로 방향)에
          여백을 설정하는 속성입니다. 즉, margin-top과 margin-bottom을 한 번에 지정할 수 있는 축약
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
