import ReferBread from '@/components/refer/refer-bread'

export default function Mask() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask' />
        <h2>mask</h2>
        <p>
          mask는 CSS에서 요소의 시각적인 영역을 제한(잘라내기)하는 속성으로, 마스크 이미지나 도형을
          이용해 어떤 부분을 보이게 할지 제어할 수 있습니다. 즉, 요소를 투명하게 가리거나 모양대로
          자르는 효과를 줄 수 있습니다.
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
