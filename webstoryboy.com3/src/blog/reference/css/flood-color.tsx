import ReferBread from '@/components/refer/refer-bread'

export default function FloodColor() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='flood-color' />
        <h2>flood-color</h2>
        <p>
          flood-color는 SVG 필터(filter)에서 사용되는 속성으로, &lt;feFlood7&gt; 요소가 생성하는
          단색 색상(채움 색)을 지정하는 데 사용됩니다. 일반 CSS 속성이 아닌, SVG 필터 시스템 내에서
          시각 효과를 만들 때 쓰는 특수한 속성입니다.
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
