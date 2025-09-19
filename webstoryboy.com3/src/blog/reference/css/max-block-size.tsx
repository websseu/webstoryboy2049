import ReferBread from '@/components/refer/refer-bread'

export default function MaxBlockSize() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='max-block-size' />
        <h2>max-block-size</h2>
        <p>
          max-block-size는 CSS의 논리 속성(Logical Property) 중 하나로, 요소의 블록 방향 최대
          크기(높이 또는 너비)를 지정합니다. 이 속성은 writing-mode(글쓰기 방향)에 따라 max-height
          또는 max-width처럼 자동으로 적절한 물리 속성과 대응됩니다.
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
