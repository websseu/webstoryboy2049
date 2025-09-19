import ReferBread from '@/components/refer/refer-bread'

export default function InterpolateSize() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='interpolate-size' />
        <h2>interpolate-size</h2>
        <p>
          interpolate-size는 CSS의 실험적 속성으로, 요소의 크기 변경 시 애니메이션을 어떻게
          보간(interpolate)할지를 제어하는 데 사용됩니다. 이 속성은 현재 초안 단계이며 대부분의
          브라우저에서 지원되지 않습니다.
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
