import ReferBread from '@/components/refer/refer-bread'

export default function AnimationDelay() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='animation-delay' />
        <h2>animation-delay</h2>
        <p>
          animation-delay는 CSS 애니메이션이 시작되기 전 대기 시간을 지정하는 속성입니다. 지정한
          시간만큼 기다렸다가 애니메이션이 재생됩니다.
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
