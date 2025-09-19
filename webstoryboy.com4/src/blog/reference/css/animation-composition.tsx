import ReferBread from '@/components/refer/refer-bread'

export default function AnimationComposition() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='animation-composition' />
        <h2>animation-composition</h2>
        <p>
          animation-composition 속성은 CSS 애니메이션에서 동일한 CSS 프로퍼티가 여러 애니메이션에
          의해 동시에 변화될 때, 각 애니메이션 결과를 어떻게 합성할지 결정합니다. CSS Animations
          Level 2에 새로 추가된 기능입니다.
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
