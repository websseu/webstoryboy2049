import ReferBread from '@/components/refer/refer-bread'

export default function BackgroundOrigin() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='background-origin' />
        <h2>background-origin</h2>
        <p>
          background-origin은 CSS에서 배경 이미지가 시작되는 기준 위치(출발점)를 설정하는
          속성입니다. 즉, 배경 이미지나 배경 색상이 어디 기준에서 그려질지를 지정합니다.
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
