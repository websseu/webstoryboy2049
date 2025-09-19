import ReferBread from '@/components/refer/refer-bread'

export default function GridArea() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-area' />
        <h2>grid-area</h2>
        <p>
          grid-area는 CSS Grid에서 그리드 아이템이 배치될 영역을 지정하는 속성입니다. 두 가지
          방식(이름 기반 (grid-template-areas와 함께 사용), 숫자 기반 (grid-row와 grid-column을
          단축))으로 사용할 수 있습니다.
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
