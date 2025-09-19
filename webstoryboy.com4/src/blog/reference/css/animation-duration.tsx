import ReferBread from '@/components/refer/refer-bread'

export default function AnimationDuration() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='animation-direction' />
        <h2>animation-duration</h2>
        <p>
          animation-duration 속성은 애니메이션이 한 사이클을 완료하는 데 걸리는 시간을 설정합니다.
          이 값에 따라 키프레임 간 변화가 얼마나 느리거나 빠르게 일어날지 결정할 수 있습니다.
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
