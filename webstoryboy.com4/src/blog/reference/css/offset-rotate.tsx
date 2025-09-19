import ReferBread from '@/components/refer/refer-bread'

export default function OffsetRotate() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='offset-rotate' />
        <h2>offset-rotate</h2>
        <p>
          offset-rotate는 CSS Motion Path(모션 경로) 기능의 속성 중 하나로, 요소가 offset-path를
          따라 이동할 때, 이동 경로 방향에 따라 요소를 회전할지 여부를 지정합니다. 즉, 요소가
          곡선이나 꺾인 선을 따라 움직일 때 진행 방향에 맞춰 자연스럽게 회전할지를 설정하는
          속성입니다.
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
