import ReferBread from '@/components/refer/refer-bread'

export default function InsetBlockEnd() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='inset-block-end' />
        <h2>inset-block-end</h2>
        <p>
          inset-block-end는 CSS 논리 속성(Logical Property) 중 하나로, 요소의 블록 방향 끝쪽 위치를
          지정합니다. 일반적인 좌→우(수평) 글쓰기 환경에서는 inset-block-end는 물리적 bottom과
          동일한 의미를 가집니다.
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
