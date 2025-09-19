import ReferBread from '@/components/refer/refer-bread'

export default function MinBlendMode() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mix-blend-mode' />
        <h2>mix-blend-mode</h2>
        <p>
          mix-blend-mode는 CSS의 시각 효과 속성 중 하나로, 요소가 배경이나 다른 요소와 시각적으로
          섞이는 방식(Blend Mode)을 지정합니다. 즉, 겹쳐진 요소들 사이에서 색상·명도·투명도 등을
          어떻게 섞을지를 제어할 수 있습니다. 포토샵의 &quot;레이어 혼합 모드&quot;와 매우 유사한
          개념입니다.
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
