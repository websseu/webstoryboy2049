import ReferBread from '@/components/refer/refer-bread'

export default function InsetBlock() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='inset-block' />
        <h2>inset-block</h2>
        <p>
          inset-block은 CSS 논리 속성(Logical Properties) 중 하나로, 블록 방향(top ↕︎ bottom)의
          위치를 지정하는 단축 속성입니다. 이는 기존의 top / bottom과 대응하며, **문서의 글 흐름
          방향(writing-mode)**에 따라 동적으로 작동합니다.
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
