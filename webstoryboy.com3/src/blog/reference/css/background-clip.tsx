import ReferBread from '@/components/refer/refer-bread'

export default function BackgroundClip() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='background-clip' />
        <h2>background-clip</h2>
        <p>
          background-clip은 CSS에서 배경 이미지나 배경 색상이 어디까지 적용될지(그릴 영역의 범위)를
          지정하는 속성입니다. 다시 말해, 요소의 어느 부분까지 배경을 보여줄지 결정합니다.
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
