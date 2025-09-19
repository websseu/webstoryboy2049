import ReferBread from '@/components/refer/refer-bread'

export default function GridAutoRows() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-auto-rows' />
        <h2>grid-auto-rows</h2>
        <p>
          grid-auto-rows는 CSS Grid에서 자동으로 생성되는 행(row)의 높이를 설정하는 속성입니다.
          grid-template-rows로 정의되지 않은 행이 자동으로 생길 때, 그 행의 기본 높이를 정하는
          역할을 합니다.
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
