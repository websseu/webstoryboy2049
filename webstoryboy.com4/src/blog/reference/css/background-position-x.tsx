import ReferBread from '@/components/refer/refer-bread'

export default function BackgroundPositionX() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='background-position-x' />
        <h2>background-position-x</h2>
        <p>
          background-position-x는 CSS에서 배경 이미지의 가로(x축) 방향 위치만 따로 설정할 수 있는
          속성입니다.
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
