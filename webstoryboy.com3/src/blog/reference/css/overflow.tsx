import ReferBread from '@/components/refer/refer-bread'

export default function Overflow() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='overflow' />
        <h2>overflow</h2>
        <p>
          overflow는 CSS 레이아웃 속성 중 하나로, 요소의 콘텐츠가 박스 크기를 초과했을 때 이를
          어떻게 처리할지 지정하는 속성입니다.
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
