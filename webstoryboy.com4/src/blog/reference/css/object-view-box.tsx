import ReferBread from '@/components/refer/refer-bread'

export default function ObjectViewBox() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='object-view-box' />
        <h2>object-view-box</h2>
        <p>
          object-view-box는 CSS의 실험적 속성으로, 이미지(img), 비디오(video), SVG 등의 콘텐츠에서
          보여줄 영역(view box)을 지정합니다. 이 속성은 일종의 &quot;자르기&quot; 또는 &quot;확대
          영역 선택&quot; 기능처럼 작동하며, object-fit과 함께 사용될 수 있고, 마치 SVG의
          viewBox처럼 콘텐츠의 일부분만 표시하도록 설정할 수 있습니다.
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
