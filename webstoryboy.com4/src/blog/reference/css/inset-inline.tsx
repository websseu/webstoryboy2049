import ReferBread from '@/components/refer/refer-bread'

export default function InsetInline() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='inset-inline' />
        <h2>inset-inline</h2>
        <p>
          inset-inline은 CSS 논리 속성(Logical Property) 중 하나로, 요소의 인라인 방향(글 흐름
          방향)에서 시작과 끝 위치를 한꺼번에 설정하는 축약 속성입니다. 일반적으로는 left와 right를
          한 줄로 지정하는 것과 같지만, 글쓰기 방향(writing-mode, direction)에 따라 자동으로 방향이
          바뀝니다.
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
