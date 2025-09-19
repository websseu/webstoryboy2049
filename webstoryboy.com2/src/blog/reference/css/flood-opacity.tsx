import ReferBread from '@/components/refer/refer-bread'

export default function FloodOpacity() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='flood-opacity' />
        <h2>flood-opacity</h2>
        <p>
          flood-opacity는 SVG 필터(filter)에서 사용하는 속성으로, &lt;feFlood&gt; 요소가 생성하는
          단색 색상(flood-color)의 투명도(불투명도)를 설정합니다. flood-color가 색상을 정한다면,
          flood-opacity는 그 색상이 얼마나 투명할지(0~1 범위)를 정합니다.
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
