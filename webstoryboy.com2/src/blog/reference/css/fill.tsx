import ReferBread from '@/components/refer/refer-bread'

export default function Fill() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='fill' />
        <h2>fill</h2>
        <p>
          fill은 CSS 및 SVG에서 요소의 내부(채움) 색상을 지정하는 속성입니다. 특히 SVG 도형(예:
          &lt;rect&gt;, &lt;circle&gt;, &lt;path&gt;)이나 아이콘의 색상을 설정할 때 자주 사용됩니다.
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
