import ReferBread from '@/components/refer/refer-bread'

export default function InsetInlineEnd() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='inset-inline-end' />
        <h2>inset-inline-end</h2>
        <p>
          inset-inline-end는 CSS 논리 속성(Logical Property) 중 하나로, **문서의 쓰기 방향(writing
          mode)**에 따라 요소의 위치를 조정할 수 있게 해주는 속성입니다.
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
