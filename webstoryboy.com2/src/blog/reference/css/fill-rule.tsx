import ReferBread from '@/components/refer/refer-bread'

export default function FillRule() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='fill-rule' />
        <h2>fill-rule</h2>
        <p>
          fill-rule은 SVG의 &lt;path&gt;, &lt;polygon&gt;, &lt;clipPath&gt; 요소 등에서 도형의
          내부를 어떤 기준으로 채울지(=안과 밖을 어떻게 판단할지)를 지정하는 속성입니다. 특히 자기
          자신과 겹치거나 구멍이 있는 복잡한 도형을 올바르게 채울 때 사용됩니다.
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
