import ReferBread from '@/components/refer/refer-bread'

export default function InlineSize() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='inline-size' />
        <h2>inline-size</h2>
        <p>
          inline-size는 CSS의 논리 속성(Logical Property) 중 하나로, 요소의 인라인 방향의
          크기(길이)를 지정하는 속성입니다. 즉, 글 흐름 방향에 따라 width처럼 작동하는 속성입니다.
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
