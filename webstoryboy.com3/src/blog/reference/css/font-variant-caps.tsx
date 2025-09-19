import ReferBread from '@/components/refer/refer-bread'

export default function FontVariantCaps() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-variant-caps' />
        <h2>font-variant-caps</h2>
        <p>
          font-variant-caps는 CSS에서 대문자와 소문자의 표현 방식을 제어하는 속성입니다. 특히
          스몰캡(small-caps)처럼 소문자를 축소한 대문자로 표시하거나, 폰트에 내장된 다양한 대문자
          스타일을 선택적으로 적용할 수 있도록 도와줍니다.
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
