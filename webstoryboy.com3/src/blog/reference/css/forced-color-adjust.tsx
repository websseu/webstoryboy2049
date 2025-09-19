import ReferBread from '@/components/refer/refer-bread'

export default function ForcedColorAdjust() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='forced-color-adjust' />
        <h2>forced-color-adjust</h2>
        <p>
          forced-color-adjust는 CSS에서 브라우저의 강제 색상 모드(forced colors mode)가 적용될 때,
          해당 요소에 대해 색상 조정을 허용할지 막을지를 결정하는 속성입니다. 주로 Windows 고대비
          모드(High Contrast Mode)에서 사용됩니다. 브라우저나 OS가 접근성을 위해 사용자 정의 색상
          팔레트를 강제로 적용할 때, 개발자가 특정 요소의 색상은 강제로 유지하도록 지정할 수 있게
          합니다.
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
