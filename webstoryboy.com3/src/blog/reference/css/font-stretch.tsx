import ReferBread from '@/components/refer/refer-bread'

export default function FontStretch() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-stretch' />
        <h2>font-stretch</h2>
        <p>
          font-stretch는 CSS에서 글꼴의 너비(폭)를 늘리거나 줄여서 텍스트를 좁게 또는 넓게 표시할 수
          있도록 하는 속성입니다. 단, 효과를 보려면 해당 폰트가 &quot;Condensed&quot;,
          &quot;Expanded&quot; 등의 너비 계열을 지원해야 합니다.
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
