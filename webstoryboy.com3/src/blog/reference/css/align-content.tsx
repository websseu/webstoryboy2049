import ReferBread from '@/components/refer/refer-bread'

export default function AlignContent() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='align-content' />
        <h2>align-content</h2>
        <p>
          align-content는 Flexbox나 Grid 컨테이너에서 교차 축(cross axis) 방향으로 여러 행(tracks)
          또는 줄(lines) 사이의 여유 공간을 어떻게 배분할지 결정하는 속성입니다. 한 줄만 있을 때는
          효과가 없고, 여러 줄이 생길 때(예: flex-wrap: wrap 또는 Grid의 다중 행) 공간 정렬을
          제어합니다.
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
