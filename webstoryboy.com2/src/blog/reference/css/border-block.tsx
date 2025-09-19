import ReferBread from '@/components/refer/refer-bread'

export default function BorderBlock() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='border-block' />
        <h2>border-block</h2>
        <p>
          border-block은 CSS의 논리 속성(Logical Property)으로, 요소의 블록 방향(세로 방향) — 즉,
          위쪽(top)과 아래쪽(bottom) 테두리를 한 번에 설정할 수 있는 속성입니다.
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
