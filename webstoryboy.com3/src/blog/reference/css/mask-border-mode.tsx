import ReferBread from '@/components/refer/refer-bread'

export default function MaskBorderMode() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-border-mode' />
        <h2>mask-border-mode</h2>
        <p>
          mask-border-mode는 CSS 마스킹(masking) 기능의 일부로, mask-border를 사용할 때 마스크
          이미지를 어떻게 해석할지를 지정하는 속성입니다. 즉, 마스크 이미지의 어떤 기준(투명도 vs
          밝기)으로 마스킹을 할지 결정합니다.
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
