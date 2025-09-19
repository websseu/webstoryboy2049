import ReferBread from '@/components/refer/refer-bread'

export default function AnimationTimingFunction() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='animation-timing-function' />
        <h2>animation-timing-function</h2>
        <p>
          animation-timing-function은 CSS 애니메이션에서 속도의 변화(가속/감속 패턴)를 설정하는
          속성입니다. 즉, 애니메이션이 어떻게 움직이는지의 리듬을 조절합니다.
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
