import ReferBread from '@/components/refer/refer-bread'

export default function BorderBlockWidth() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='border-block-width' />
        <h2>border-block-width</h2>
        <p>
          border-block-width는 CSS의 논리 속성(Logical Property) 중 하나로, 요소의 블록 방향(세로
          방향) — 즉, 위쪽(start)과 아래쪽(end) 테두리의 두께를 한 번에 설정하는 속성입니다.
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
