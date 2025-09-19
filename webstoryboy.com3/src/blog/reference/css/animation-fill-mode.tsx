import ReferBread from '@/components/refer/refer-bread'

export default function AnimationFillMode() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='animation-fill-mode' />
        <h2>animation-fill-mode</h2>
        <p>
          animation-fill-mode는 애니메이션이 재생되기 전이나 재생이 끝난 후에도 요소에 스타일을
          유지할지 여부를 지정하는 CSS 속성입니다.
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
