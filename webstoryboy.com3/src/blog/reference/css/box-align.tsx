import ReferBread from '@/components/refer/refer-bread'

export default function BoxAlign() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='box-aglin' />
        <h2>box-aglin</h2>
        <p>
          border는 CSS에서 요소의 테두리(선)를 설정하는 속성으로, 두께, 스타일, 색상을 한 줄로
          지정할 수 있는 축약형(shorthand) 속성입니다.
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
