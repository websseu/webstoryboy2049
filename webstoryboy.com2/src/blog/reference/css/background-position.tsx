import ReferBread from '@/components/refer/refer-bread'

export default function BackgroundPosition() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='background-position' />
        <h2>background-position</h2>
        <p>
          background-position은 CSS에서 배경 이미지가 요소 내부에서 어디에 위치할지를 지정하는
          속성입니다. 즉, 배경 이미지가 요소 안에서 왼쪽 위에 붙을지, 가운데에 올지, 오른쪽 아래로
          갈지 등을 결정합니다.
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
