import ReferBread from '@/components/refer/refer-bread'

export default function GridRowGap() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-row-gap' />
        <h2>grid-row-gap</h2>
        <p>
          grid-row-gap은 CSS Grid에서 행(row) 간의 간격(세로 간격)을 설정하는 속성이었습니다. 현재는
          row-gap 또는 gap 속성으로 대체되었으며, grid-row-gap은 더 이상 권장되지 않는 구식
          속성(deprecated)입니다.
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
