import ReferBread from '@/components/refer/refer-bread'

export default function MaskClip() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-clip' />
        <h2>mask-clip</h2>
        <p>
          mask-clip은 CSS 마스킹(masking) 속성 중 하나로, 마스크(mask-image)가 요소의 어떤 영역까지
          적용될지를 지정하는 속성입니다. 쉽게 말해, 마스크의 적용 범위를 제한하거나 확장하고 싶을
          때 사용하는 옵션입니다.
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
