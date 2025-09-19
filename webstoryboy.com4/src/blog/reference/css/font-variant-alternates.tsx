import ReferBread from '@/components/refer/refer-bread'

export default function FontVariantAlternates() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-variant-alternates' />
        <h2>font-variant-alternates</h2>
        <p>
          font-variant-alternates는 CSS에서 OpenType 글꼴에 포함된 대체 글리프(alternate glyph)를
          선택적으로 활성화할 수 있게 해주는 고급 타이포그래피 속성입니다.
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
