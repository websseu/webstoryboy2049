import ReferBread from '@/components/refer/refer-bread'

export default function BackgroundRepeat() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='background-repeat' />
        <h2>background-repeat</h2>
        <p>
          background-repeat는 CSS에서 배경 이미지가 반복되는 방식을 지정하는 속성입니다. 이미지
          하나만 넣는 게 아니라, 요소의 크기에 맞춰 배경이 가로, 세로 또는 전체에 반복되도록 설정할
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
