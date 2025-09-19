import ReferBread from '@/components/refer/refer-bread'

export default function Appearence() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='appearence' />
        <h2>appearence</h2>
        <p>
          appearance는 CSS에서 브라우저 기본 스타일(UI 모양)을 제거하거나 유지할지 제어하는
          속성입니다. 특히 &lt;input&gt;, &lt;button&gt;, &lt;select&gt; 등 폼 요소의 기본 외형을
          변경할 때 자주 사용됩니다.
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
