import ReferBread from '@/components/refer/refer-bread'

export default function GridTemplateRow() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-template-rows' />
        <h2>grid-template-rows</h2>
        <p>
          grid-template-rows는 CSS Grid에서 행(row)의 수와 각 행의 높이(height)를 정의하는
          속성입니다. 그리드의 세로 방향 레이아웃 구조를 만드는 데 사용되며, grid-template-columns와
          짝을 이뤄 전체 격자 구조를 설계합니다.
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
