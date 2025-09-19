import ReferBread from '@/components/refer/refer-bread'

export default function BackgroundBlendMode() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='background-blend-mode' />
        <h2>background-blend-mode</h2>
        <p>
          background-blend-mode는 CSS에서 여러 개의 배경 이미지나 배경 색상 사이를 어떤 방식으로
          섞을지(혼합할지) 지정하는 속성입니다. 이 속성은 포토샵의 &quot;블렌드 모드&quot;와
          비슷하게 작동하여, 시각적으로 풍부한 배경 효과를 만들 수 있습니다.
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
