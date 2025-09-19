import ReferBread from '@/components/refer/refer-bread'

export default function LineHeightStep() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='line-height-step' />
        <h2>line-height-step</h2>
        <p>
          line-height-step은 CSS의 실험적 속성으로, 텍스트의 줄 높이를 지정된 간격(step) 으로
          정렬되도록 강제하는 기능입니다. 이는 글자 줄 간격을 일정한 격자(grid)에 맞추어 정밀하게
          타이포그래피를 제어하려는 목적에서 등장한 속성입니다.
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
