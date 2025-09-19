import ReferBread from '@/components/refer/refer-bread'

export default function Left() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='left' />
        <h2>left</h2>
        <p>
          left는 CSS의 위치 속성 중 하나로, 요소의 왼쪽 위치(좌측 기준)를 지정합니다. 이 속성은
          position이 relative, absolute, fixed, sticky 중 하나일 때만 적용됩니다.
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
