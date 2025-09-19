import ReferBread from '@/components/refer/refer-bread'

export default function MarginTop() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='margin-top' />
        <h2>margin-top</h2>
        <p>
          margin-top은 CSS 박스 모델(Box Model) 속성 중 하나로, 요소의 위쪽 바깥 여백(외부 간격)을
          설정하는 속성입니다. 즉, 요소의 위에 공간을 만들어 위에 있는 다른 요소와의 간격을 조정할
          수 있습니다.
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
