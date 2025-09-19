import ReferBread from '@/components/refer/refer-bread'

export default function JustifyTracks() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='justify-tracks' />
        <h2>justify-tracks</h2>
        <p>
          justify-tracks는 CSS Grid에서 사용되는 속성으로, 전체 그리드 트랙(열/columns)의 그룹을
          수평 방향으로 어떻게 정렬할지를 설정합니다. 즉, 여러 개의 열(column tracks) 이 있을 때,
          그것들이 그리드 컨테이너 안에서 어떻게 배치될지를 제어합니다.
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
