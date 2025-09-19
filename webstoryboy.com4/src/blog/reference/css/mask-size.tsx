import ReferBread from '@/components/refer/refer-bread'

export default function MaskSize() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-size' />
        <h2>mask-size</h2>
        <p>
          mask-size는 CSS 마스킹 속성 중 하나로, mask-image로 지정한 마스크 이미지의 크기를 설정하는
          속성입니다. 이는 background-size와 유사하게 작동하며, 마스크 이미지가 요소에 얼마나 크게
          적용될지를 제어합니다.
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
