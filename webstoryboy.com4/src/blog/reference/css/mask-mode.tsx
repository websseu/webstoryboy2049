import ReferBread from '@/components/refer/refer-bread'

export default function MaskMode() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-mode' />
        <h2>mask-mode</h2>
        <p>
          mask-mode는 CSS 마스킹(masking) 속성 중 하나로, mask-image나 mask-border-source로 지정한
          마스크 이미지의 어떤 특성(투명도 vs 밝기)을 기준으로 보임/숨김을 결정할지 설정합니다.
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
