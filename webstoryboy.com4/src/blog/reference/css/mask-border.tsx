import ReferBread from '@/components/refer/refer-bread'

export default function MaskBorder() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-border' />
        <h2>mask-border</h2>
        <p>
          mask-border는 CSS에서 요소의 테두리 영역에 마스크 이미지를 적용하여, 해당 영역을 보이거나
          숨기도록 제어하는 시각 효과를 주는 실험적 속성입니다. 기본적으로 border-image와 유사한
          구조를 가지며, 이미지의 알파값(투명도) 또는 밝기(luminance)를 기반으로 마스킹을
          수행합니다.
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
