import ReferBread from '@/components/refer/refer-bread'

export default function MaxLines() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='max-lines' />
        <h2>max-lines</h2>
        <p>
          max-lines는 CSS의 실험적 속성으로, 요소가 최대로 보여줄 수 있는 줄 수(line 수)를 제한할 수
          있도록 설계된 속성입니다. 즉, 텍스트 콘텐츠가 너무 길 때, 지정한 줄 수까지만 표시하고
          나머지는 잘라냅니다.
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
