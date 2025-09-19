import ReferBread from '@/components/refer/refer-bread'

export default function LightingColor() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='lighting-color' />
        <h2>lighting-color</h2>
        <p>
          lighting-color는 SVG에서 조명 효과를 조절할 때 사용하는 CSS 속성입니다. 이 속성은
          HTML/CSS에서 일반 요소에 쓰이지 않고, SVG 필터(filter) 중 &lt;feDiffuseLighting&gt; 또는
          &lt;feSpecularLighting&gt; 요소에 적용됩니다. 붙거나 벌어져 보일 때 이 속성을 사용해
          가독성과 스타일을 조절할 수 있습니다.
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
