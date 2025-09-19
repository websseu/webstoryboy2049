import ReferBread from '@/components/refer/refer-bread'

export default function GridAutoColumns() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-auto-columns' />
        <h2>grid-auto-columns</h2>
        <p>
          grid-auto-columns는 CSS Grid에서 자동으로 생성되는 열(columns)의 크기를 설정하는
          속성입니다. 이 속성은 그리드 템플릿에 명시되지 않은 열이 동적으로 생길 때, 그 열의 기본
          크기를 정의하는 데 사용됩니다.
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
