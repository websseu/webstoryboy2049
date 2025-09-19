import ReferBread from '@/components/refer/refer-bread'

export default function Orphans() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='orphans' />
        <h2>orphans</h2>
        <p>
          orphans는 CSS 타이포그래피 관련 속성 중 하나로, 페이지 또는 컬럼이 나뉘는 레이아웃(예:
          인쇄, e-book, 신문 스타일 등)에서 단락의 처음 줄이 혼자 다음 페이지로 떨어지는 현상을
          방지하기 위해 사용됩니다. 한국어로는 &quot;고아 줄&quot; 또는 &quot;고아 행&quot;이라고
          부르며, 문단이 나눠질 때 너무 적은 줄이 다음 페이지로 가는 걸 막는 용도입니다.
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
