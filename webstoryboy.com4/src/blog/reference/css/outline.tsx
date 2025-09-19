import ReferBread from '@/components/refer/refer-bread'

export default function Outline() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='outline' />
        <h2>outline</h2>
        <p>
          outline은 CSS 시각 스타일링 속성 중 하나로, 요소 바깥쪽에 테두리(윤곽선)를 그려주는
          속성입니다. border와 비슷해 보이지만, 레이아웃에 영향을 주지 않고, 요소 바깥에 그려지는
          비레이아웃 요소입니다.
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
