import ReferBread from '@/components/refer/refer-bread'

export default function Display() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='display' />
        <h2>display</h2>
        <p>
          display 속성은 HTML 요소가 화면에 어떻게 표시될지(배치 방식)를 결정하는 가장 중요한
          레이아웃 속성 중 하나입니다.
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
