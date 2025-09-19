import ReferBread from '@/components/refer/refer-bread'

export default function GridRowStart() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-row-start' />
        <h2>grid-row-start</h2>
        <p>
          grid-row-start는 CSS Grid에서 그리드 아이템이 행(row) 방향에서 어디서 시작할지를 지정하는
          속성입니다. 그리드 행은 가로 줄, 즉 세로 방향으로 나열되는 영역이며, grid-row-start는 그
          아이템이 배치될 시작 행의 &quot;선 번호(line)&quot;를 의미합니다.
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
