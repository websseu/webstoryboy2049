import ReferBread from '@/components/refer/refer-bread'

export default function ObjectFit() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='object-fit' />
        <h2>object-fit</h2>
        <p>
          object-fit은 CSS 속성으로, &lt;img&gt;, &lt;video&gt;, &lt;iframe&gt; 등
          &quot;컨테이너보다 큰 미디어 요소&quot;의 크기 조정 방식을 지정합니다. 즉, 이미지나
          동영상이 부모 박스 안에서 어떻게 맞춰질지를 결정하는 속성입니다.
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
