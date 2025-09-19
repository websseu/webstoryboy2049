import ReferBread from '@/components/refer/refer-bread'

export default function GridTemplateColumn() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-template-columns' />
        <h2>grid-template-columns</h2>
        <p>
          grid-template-columns는 CSS Grid에서 열(column)의 수와 각 열의 너비를 지정하는 속성입니다.
          그리드 컨테이너에 포함될 열의 구조를 정의하며, 각 열의 너비를 개별적으로 설정하거나
          반복적으로 생성할 수 있습니다.
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
