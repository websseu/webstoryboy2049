import ReferBread from '@/components/refer/refer-bread'

export default function ObjectPosition() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='object-position' />
        <h2>object-position</h2>
        <p>
          object-position은 CSS 속성으로, &lt;img&gt;, &lt;video&gt;, &lt;iframe&gt; 등의 요소에서
          object-fit으로 조정된 콘텐츠의 정렬 위치를 설정하는 데 사용됩니다. 마치
          background-position이 배경 이미지 위치를 조정하듯, object-position은 콘텐츠(이미지, 비디오
          등)의 보여지는 영역 내 위치를 조정합니다.
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
