import ReferBread from '@/components/refer/refer-bread'

export default function MaskOrigin() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-origin' />
        <h2>mask-origin</h2>
        <p>
          mask-origin은 CSS 마스킹(masking) 속성 중 하나로, mask-image가 요소 내에서 어디를 기준으로
          배치될지를 결정하는 속성입니다. 즉, 마스크 이미지의 기준 위치(origin)을 지정하여, 마스크가
          어디부터 적용될지 제어합니다.
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
