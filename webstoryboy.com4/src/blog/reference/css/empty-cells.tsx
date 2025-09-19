import ReferBread from '@/components/refer/refer-bread'

export default function EmptyCells() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='empty-cells' />
        <h2>empty-cells</h2>
        <p>
          empty-cells는 CSS 테이블 관련 속성으로, 테이블 셀(&lt;td&gt;, &lt;th&gt;)이 비어 있을
          경우에도 테두리를 보일지 숨길지를 지정합니다.
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
