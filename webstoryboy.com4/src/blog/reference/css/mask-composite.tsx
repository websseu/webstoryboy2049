import ReferBread from '@/components/refer/refer-bread'

export default function MaskComposite() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-composite' />
        <h2>mask-composite</h2>
        <p>
          mask-composite는 CSS 마스킹 속성 중 하나로, 여러 개의 마스크 레이어를 함께 사용할 때 이
          레이어들을 어떻게 합성(겹침)할지 지정하는 속성입니다. 마치 포토샵에서 레이어의 혼합 모드를
          설정하는 것처럼, 각 마스크를 어떤 방식으로 조합할지를 정의합니다.
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
