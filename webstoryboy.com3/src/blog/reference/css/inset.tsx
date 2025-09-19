import ReferBread from '@/components/refer/refer-bread'

export default function Inset() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='inset' />
        <h2>inset</h2>
        <p>
          inset은 CSS에서 top, right, bottom, left 네 방향 속성을 한꺼번에 설정할 수 있는
          단축(shorthand) 속성입니다. 주로 position: absolute 또는 fixed와 함께 사용되어 요소의
          위치를 빠르게 지정할 수 있습니다.
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
