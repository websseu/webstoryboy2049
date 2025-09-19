import ReferBread from '@/components/refer/refer-bread'

export default function AlignItems() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='align-items' />
        <h2>align-items</h2>
        <p>
          align-items는 Flexbox나 CSS Grid 컨테이너에서 교차 축(cross axis) 방향으로 개별 아이템들을
          어떻게 정렬할지 결정하는 속성입니다. 컨테이너 안에서 아이템들의 높이나 세로 정렬을 제어할
          때 주로 사용합니다.
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
