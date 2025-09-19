import ReferBread from '@/components/refer/refer-bread'

export default function FontSizeAdjust() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-size-adjust' />
        <h2>font-size-adjust</h2>
        <p>
          font-size-adjust는 CSS에서 대체 글꼴 사용 시에도 텍스트의 시각적 크기(높이)를 일관되게
          유지하기 위한 속성입니다. 특히 웹폰트가 로딩되기 전 fallback(대체) 폰트가 잠깐 보여질 때,
          텍스트 크기나 줄 높이가 바뀌는 문제를 최소화하는 데 유용합니다.
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
