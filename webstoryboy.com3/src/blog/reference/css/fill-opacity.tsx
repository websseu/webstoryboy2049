import ReferBread from '@/components/refer/refer-bread'

export default function FillOpacity() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='fill-opacity' />
        <h2>fill-opacity</h2>
        <p>
          fill-opacity는 SVG 전용 CSS 속성으로, SVG 요소의 채움 색상(fill)의 투명도를 설정하는 데
          사용됩니다. 도형의 안쪽 색상을 얼마나 투명하게 보일지 제어하는 속성입니다.
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
