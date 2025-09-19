import ReferBread from '@/components/refer/refer-bread'

export default function MinInlineSize() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='min-inline-size' />
        <h2>min-inline-size</h2>
        <p>
          min-inline-size는 CSS 논리 속성(Logical Property) 중 하나로, 요소의 인라인 방향에서 최소
          크기를 설정합니다. 즉, 글쓰기 방향(writing-mode)에 따라 min-width 또는 min-height처럼
          자동으로 대응되며, 요소가 지정된 인라인 방향 최소 크기 이하로 작아지지 않도록 제한합니다.
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
