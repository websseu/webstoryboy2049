import ReferBread from '@/components/refer/refer-bread'

export default function MaskBorderSource() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-border-source' />
        <h2>mask-border-source</h2>
        <p>
          mask-border-source는 CSS 마스킹 기능 중 하나로, mask-border와 함께 사용되며 마스크
          테두리(mask-border)에 사용할 마스크 이미지 소스를 지정하는 속성입니다.
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
