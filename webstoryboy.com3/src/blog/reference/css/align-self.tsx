import ReferBread from '@/components/refer/refer-bread'

export default function AlignSelf() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='align-self' />
        <h2>align-self</h2>
        <p>
          align-self는 개별 Flexbox/Grid 아이템에 대해 교차 축(cross axis) 정렬을 오버라이드하는
          속성입니다. 부모 컨테이너의 align-items 설정 대신, 특정 아이템만 별도로 정렬하고 싶을 때
          사용합니다.
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
