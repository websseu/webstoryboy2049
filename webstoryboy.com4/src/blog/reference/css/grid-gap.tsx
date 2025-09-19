import ReferBread from '@/components/refer/refer-bread'

export default function GridGap() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-gap' />
        <h2>grid-gap</h2>
        <p>
          grid-gap은 CSS Grid에서 행(row)과 열(column) 사이의 간격을 지정하는 속성이었습니다. 하지만
          지금은 표준 속성 gap으로 대체되었고, grid-gap은 더 이상 권장되지 않습니다(deprecated).
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
