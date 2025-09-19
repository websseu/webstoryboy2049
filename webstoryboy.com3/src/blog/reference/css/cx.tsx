import ReferBread from '@/components/refer/refer-bread'

export default function Cx() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='cx' />
        <h2>cx</h2>
        <p>
          cx는 SVG(Scalable Vector Graphics)에서 &lt;circle&gt; 또는 &lt;ellipse&gt; 요소에 사용되는
          속성입니다. 원 또는 타원의 가로 방향 중심 좌표 (X축 위치)를 지정합니다.
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
