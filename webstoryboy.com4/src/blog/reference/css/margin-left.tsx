import ReferBread from '@/components/refer/refer-bread'

export default function MarginLeft() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='margin-left' />
        <h2>margin-left</h2>
        <p>
          margin-left는 CSS 박스 모델(Box Model) 속성 중 하나로, 요소의 왼쪽 바깥쪽 여백(외부
          간격)을 설정합니다. 이 속성은 요소의 왼쪽과 주변 요소 사이에 공간을 만드는 데 사용됩니다.
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
