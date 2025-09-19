import ReferBread from '@/components/refer/refer-bread'

export default function MasonryAutoFlow() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='masonry-auto-flow' />
        <h2>masonry-auto-flow</h2>
        <p>
          masonry-auto-flow는 CSS Grid 레이아웃의 새로운 실험적 속성으로, grid-template-rows:
          masonry와 함께 사용되어, 불균형한 높이의 아이템들을 벽돌식(masonry)으로 자동 배치할 때의
          흐름을 제어합니다. 즉, Pinterest 스타일의 세로 정렬 레이아웃을 구성할 때, 아이템이 어떤
          순서로 쌓일지 방향을 지정하는 데 사용됩니다.
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
