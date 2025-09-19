import ReferBread from '@/components/refer/refer-bread'

export default function FontVariantPosition() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-variant-position' />
        <h2>font-variant-position</h2>
        <p>
          font-variant-position은 CSS에서 텍스트의 첨자(superscript, subscript) 표현을 제어하는
          속성입니다. 이 속성은 OpenType 폰트가 제공하는 정식 첨자 글리프를 사용할 수 있게 해줍니다.
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
