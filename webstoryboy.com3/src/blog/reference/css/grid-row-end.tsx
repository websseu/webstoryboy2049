import ReferBread from '@/components/refer/refer-bread'

export default function GridRowEnd() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-row-end' />
        <h2>grid-row-end</h2>
        <p>
          grid-row-end는 CSS Grid에서 그리드 아이템이 행(row) 방향으로 어디까지 차지할지, 즉 끝나는
          행의 선 번호(라인)를 지정하는 속성입니다. 쉽게 말해, 이 아이템이 세로로 어디까지 차지할지
          결정합니다.
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
