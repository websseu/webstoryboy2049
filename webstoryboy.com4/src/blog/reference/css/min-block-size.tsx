import ReferBread from '@/components/refer/refer-bread'

export default function MinBlockSize() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='min-block-size' />
        <h2>min-block-size</h2>
        <p>
          min-block-size는 CSS 논리 속성(Logical Property) 중 하나로, 요소의 블록 방향에서 최소
          크기를 설정합니다. 이는 min-height 또는 min-width와 유사하게 동작하지만, 글쓰기
          방향(writing-mode)에 따라 자동으로 조정되는 것이 특징입니다.
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
