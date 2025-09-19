import ReferBread from '@/components/refer/refer-bread'

export default function FontSynthesis() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-synthesis' />
        <h2>font-synthesis</h2>
        <p>
          font-synthesis는 CSS에서 웹폰트에 기울임(italic)이나 굵기(bold)가 없는 경우, 브라우저가
          자동으로 만들어서(합성해서) 보여줄지를 제어하는 속성입니다. 즉, 디자인자가 만든
          이탤릭/볼드가 없는 경우, 브라우저가 대신 &quot;가짜 이탤릭/볼드&quot;를 적용할지를
          결정합니다.
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
