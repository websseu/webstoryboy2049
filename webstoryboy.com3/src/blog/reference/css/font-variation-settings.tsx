import ReferBread from '@/components/refer/refer-bread'

export default function FontVariantSettings() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-variant-settings' />
        <h2>font-variant-settings</h2>
        <p>
          font-variant-settings는 CSS에서 OpenType 폰트의 고급 기능을 직접 제어할 수 있도록 만든
          속성입니다. 일반적으로는 font-variant, font-variant-numeric, font-variant-ligatures 등의
          축약 속성보다 더 저수준에서 세밀하게 조작할 수 있습니다.
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
