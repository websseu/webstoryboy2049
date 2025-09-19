import ReferBread from '@/components/refer/refer-bread'

export default function MarginBottom() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='margin-bottom' />
        <h2>margin-bottom</h2>
        <p>
          margin-bottom은 CSS 박스 모델(Box Model)에서 사용되는 속성으로, 요소의 아랫부분(하단)에
          외부 여백(마진)을 지정합니다.
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
