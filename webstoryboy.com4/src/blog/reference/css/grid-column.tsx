import ReferBread from '@/components/refer/refer-bread'

export default function GridColumn() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-column' />
        <h2>grid-column</h2>
        <p>
          grid-column은 CSS Grid에서 그리드 아이템이 차지할 열의 시작 위치와 끝 위치(범위)를
          지정하는 속성입니다. 쉽게 말해, 아이템이 몇 번째 열부터 시작해서 몇 번째 열까지 차지할지를
          정하는 속성입니다.
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
