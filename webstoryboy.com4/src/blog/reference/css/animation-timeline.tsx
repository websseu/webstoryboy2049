import ReferBread from '@/components/refer/refer-bread'

export default function AnimationTimeline() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='animation-timeline' />
        <h2>animation-timeline</h2>
        <p>
          animation-timeline은 CSS에서 애니메이션의 타임라인 기준을 변경할 수 있도록 해주는
          속성입니다. 기존에는 애니메이션이 시간(time) 을 기준으로 움직였지만, animation-timeline을
          사용하면 스크롤이나 특정 사용자 인터랙션을 기준으로 애니메이션을 제어할 수 있습니다.
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
