import ReferBread from '@/components/refer/refer-bread'

export default function InsetBlockStart() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='inset-block-start' />
        <h2>inset-block-start</h2>
        <p>
          inset-block-start는 CSS 논리 속성(Logical Property) 중 하나로, 요소의 블록 방향 시작
          위치를 지정합니다. 이는 일반적인 레이아웃에서 top 속성과 같은 의미를 가집니다. 문서의
          글쓰기 흐름(writing-mode)에 따라 inset-block-start는 top 또는 left로 자동 해석됩니다.
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
