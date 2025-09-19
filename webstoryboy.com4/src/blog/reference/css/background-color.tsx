import ReferBread from '@/components/refer/refer-bread'

export default function BackgroundColor() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='background-color' />
        <h2>background-color</h2>
        <p>
          background-color는 CSS에서 요소의 배경 색상을 설정하는 속성입니다. 웹 페이지의 요소에 단색
          배경을 지정할 때 가장 기본적으로 사용됩니다.
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
