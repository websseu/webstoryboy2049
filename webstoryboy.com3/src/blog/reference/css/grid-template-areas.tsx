import ReferBread from '@/components/refer/refer-bread'

export default function GridTemplateArea() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-template-area' />
        <h2>grid-template-area</h2>
        <p>
          grid-template-areas는 CSS Grid에서 이름 기반으로 레이아웃 구조를 시각적으로 정의할 수 있는
          속성입니다. 이 속성은 영역 이름을 붙이고 그 이름으로 요소를 배치하는 방식입니다. 코드를
          마치 그림처럼 작성할 수 있어서, 레이아웃을 매우 직관적으로 설계할 수 있습니다.
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
