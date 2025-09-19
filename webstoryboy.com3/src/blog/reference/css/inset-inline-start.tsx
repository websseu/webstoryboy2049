import ReferBread from '@/components/refer/refer-bread'

export default function InsetInlineStart() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='inset-inline-start' />
        <h2>inset-inline-start</h2>
        <p>
          inset-inline-start는 CSS 논리 속성 중 하나로, 요소의 인라인 방향 시작 위치를 설정하는
          속성입니다. 문서의 쓰기 방향(writing mode)에 따라 left 또는 right로 동작합니다.
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
