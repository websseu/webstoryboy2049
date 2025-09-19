import ReferBread from '@/components/refer/refer-bread'

export default function DominantBaseline() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='dominant-baseline' />
        <h2>dominant-baseline</h2>
        <p>
          dominant-baseline은 SVG에서 사용되는 특수한 CSS 속성으로, 텍스트나 인라인 요소의 기준선
          정렬 방식을 지정합니다.
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
