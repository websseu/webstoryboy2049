import ReferBread from '@/components/refer/refer-bread'

export default function GridAutoFlow() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-auto-flow' />
        <h2>grid-auto-flow</h2>
        <p>
          grid-auto-flow는 CSS Grid에서 그리드 아이템이 자동으로 배치되는 방향과 방식을 지정하는
          속성입니다. grid-auto-flow는 그리드에 명시적으로 위치가 지정되지 않은 아이템이 어떻게 자동
          배치될지를 결정하는 핵심 속성입니다.
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
