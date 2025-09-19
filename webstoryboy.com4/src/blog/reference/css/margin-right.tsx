import ReferBread from '@/components/refer/refer-bread'

export default function MarginRight() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='margin-right' />
        <h2>margin-right</h2>
        <p>
          margin-right는 CSS 박스 모델(Box Model)의 속성 중 하나로, 요소의 오른쪽 바깥 여백(외부
          간격)을 설정합니다. 즉, 요소의 오른쪽에 공간을 만들어 다른 요소와의 간격을 조절합니다.
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
