import ReferBread from '@/components/refer/refer-bread'

export default function MarginInline() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='margin-inline' />
        <h2>margin-inline</h2>
        <p>
          margin-inline은 CSS 논리 속성(Logical Property) 중 하나로, 요소의 인라인 방향(가로 방향)
          여백을 설정하는 속성입니다. 즉, margin-left + margin-right를 한꺼번에 지정할 수 있는
          축약형입니다. 💡 쓰기 방향(writing mode)에 따라 방향이 바뀔 수 있어 다국어 레이아웃에
          유리합니다.
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
