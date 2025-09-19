import ReferBread from '@/components/refer/refer-bread'

export default function Grid() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid' />
        <h2>grid</h2>
        <p>
          grid는 CSS에서 2차원(행과 열)의 레이아웃을 만들 수 있는 강력한 레이아웃 시스템입니다.
          flexbox가 1차원 정렬(가로 또는 세로)에 최적화된 반면, grid는 가로+세로를 동시에 다루는
          복잡한 레이아웃에 이상적입니다.
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
