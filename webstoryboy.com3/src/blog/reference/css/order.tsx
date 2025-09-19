import ReferBread from '@/components/refer/refer-bread'

export default function Order() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='order' />
        <h2>order</h2>
        <p>
          order는 CSS Flexbox와 Grid 레이아웃에서 사용되는 속성으로, 자식 요소의 표시 순서를
          재정의할 때 사용합니다. 즉, HTML에 선언된 순서와는 다르게, 화면에 보이는 순서를 바꿀 수
          있는 속성입니다.
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
