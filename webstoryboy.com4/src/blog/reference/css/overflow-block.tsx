import ReferBread from '@/components/refer/refer-bread'

export default function OverflowBlock() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='overflow-block' />
        <h2>overflow-block</h2>
        <p>
          overflow-block은 CSS 논리 속성(Logical Property) 중 하나로, 요소의 블록 방향(글쓰기 방향에
          따라 세로 또는 가로)의 오버플로우 처리 방식을 지정합니다. 즉, overflow-y처럼 보이지만,
          쓰기 방향에 따라 자동으로 방향이 바뀌는 논리적 버전입니다.
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
