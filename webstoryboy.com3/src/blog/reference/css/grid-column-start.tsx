import ReferBread from '@/components/refer/refer-bread'

export default function GridColumnStart() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-column-start' />
        <h2>grid-column-start</h2>
        <p>
          grid-column-start는 CSS Grid에서 그리드 아이템이 시작할 열의 위치(선 번호)를 지정하는
          속성입니다. 쉽게 말해, 이 아이템이 그리드의 몇 번째 수직선에서 시작할지 정하는 것입니다.
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
