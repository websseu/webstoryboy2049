import ReferBread from '@/components/refer/refer-bread'

export default function BackfaceVisibility() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='backface-visibility' />
        <h2>backface-visibility</h2>
        <p>
          backface-visibility는 CSS에서 요소가 회전(3D transform) 되었을 때, 뒷면(Backface,
          뒷표면)을 보이게 할지 감출지를 지정하는 속성입니다. 이 속성은 특히 카드 뒤집기 효과(flip
          animation) 같은 3D 인터랙션에서 자주 사용됩니다.
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
