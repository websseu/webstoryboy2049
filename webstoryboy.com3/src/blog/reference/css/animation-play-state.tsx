import ReferBread from '@/components/refer/refer-bread'

export default function AnimationPlayState() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='animation-play-state' />
        <h2>animation-play-state</h2>
        <p>
          animation-play-state는 CSS 애니메이션의 재생 상태(실행 또는 일시정지)를 제어하는
          속성입니다. 이를 통해 애니메이션을 일시정지하거나 다시 재생할 수 있습니다.
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
