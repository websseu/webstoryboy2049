import ReferBread from '@/components/refer/refer-bread'

export default function OverflowAnchor() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='overflow-anchor' />
        <h2>overflow-anchor</h2>
        <p>
          overflow-anchor는 CSS 스크롤 위치 안정성과 관련된 속성으로, 동적 콘텐츠 변화(예: 이미지
          로딩, 댓글 추가 등)로 인해 스크롤 위치가 갑자기 &quot;튀는 현상&quot;을 방지하기 위한
          속성입니다. 스크롤 위치를 &quot;고정점(anchor)&quot;에 묶어두는 역할을 합니다.
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
