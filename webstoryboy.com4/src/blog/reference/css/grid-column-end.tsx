import ReferBread from '@/components/refer/refer-bread'

export default function GridColumnEnd() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-column-end' />
        <h2>grid-column-end</h2>
        <p>
          grid-column-end는 CSS Grid에서 그리드 아이템의 열(column) 배치에서 끝나는 위치를 지정하는
          속성입니다. 이 속성은 아이템이 몇 번째 열 선까지 차지할지를 명시하며, grid-column-start와
          함께 사용되거나 grid-column 축약형으로도 설정할 수 있습니다.
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
