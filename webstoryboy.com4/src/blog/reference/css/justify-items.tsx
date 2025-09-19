import ReferBread from '@/components/refer/refer-bread'

export default function JustifyItems() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='justify-items' />
        <h2>justify-items</h2>
        <p>
          justify-items는 CSS Grid 레이아웃에서 사용되는 속성으로, 그리드 셀 내부에서의 자식 요소
          정렬 방식을 결정합니다. 즉, 각 셀 안에서 항목을 수평 방향(인라인 방향) 으로 어떻게
          정렬할지 설정합니다.
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
