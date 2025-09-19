import ReferBread from '@/components/refer/refer-bread'

export default function AccentColor() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='accent-color' />
        <h2>accent-color</h2>
        <p>
          accent-color는 체크박스, 라디오 버튼, 여러 선택 컬렉션(input[type=&quot;checkbox&quot;] ·
          input[type=&quot;radio&quot;] · progress 등)의 강조 색상을 지정하는 CSS 속성입니다.
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
