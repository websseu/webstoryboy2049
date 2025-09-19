import ReferBread from '@/components/refer/refer-bread'

export default function GridColumnGap() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-column-gap' />
        <h2>grid-column-gap</h2>
        <p>
          grid-column-gap은 CSS Grid에서 열(Column) 사이의 간격을 설정하는 속성이었습니다. 현재는
          gap, column-gap으로 대체되었고, grid-column-gap은 구식(deprecated, 더 이상 권장되지
          않음)입니다.
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
