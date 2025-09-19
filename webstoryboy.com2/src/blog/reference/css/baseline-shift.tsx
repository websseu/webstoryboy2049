import ReferBread from '@/components/refer/refer-bread'

export default function BaselineShif() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='baseline-shift' />
        <h2>baseline-shift</h2>
        <p>
          baseline-shift는 CSS에서 텍스트 또는 인라인 요소의 기준선(baseline) 위치를 위나 아래로
          이동시키는 속성입니다. 주로 수학 기호, 첨자(sup/sub), SVG 텍스트 등을 표시할 때
          사용됩니다.
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
