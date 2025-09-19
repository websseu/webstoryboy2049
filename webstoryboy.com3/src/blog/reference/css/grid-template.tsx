import ReferBread from '@/components/refer/refer-bread'

export default function GridTemplate() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-template' />
        <h2>grid-template</h2>
        <p>
          grid-template은 CSS Grid 레이아웃의 구조(행과 열, 영역 이름 포함)를 한 줄로 설정할 수 있는
          축약 속성(shorthand)입니다. 이 속성은 grid-template-rows, grid-template-columns,
          grid-template-areas 이 세 가지 속성을 한꺼번에 설정할 수 있도록 도와줍니다.
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
