import ReferBread from '@/components/refer/refer-bread'

export default function AnimationFillMode() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='animation-iteration-count' />
        <h2>animation-iteration-count</h2>
        <p>animation-iteration-count는 CSS 애니메이션이 몇 번 반복될지를 지정하는 속성입니다.</p>
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
