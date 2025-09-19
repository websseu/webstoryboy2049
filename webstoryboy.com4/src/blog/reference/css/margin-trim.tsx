import ReferBread from '@/components/refer/refer-bread'

export default function MarginTrim() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='margin-trim' />
        <h2>margin-trim</h2>
        <p>
          margin-trim은 CSS에서 실험적으로 도입된 속성으로, 요소의 첫 번째와 마지막 자식 요소가 가진
          마진(margin)을 자동으로 제거(trim)할지 여부를 제어하는 속성입니다. 즉, 부모 요소 안에서
          불필요한 상단/하단 여백을 없애 더 깔끔한 레이아웃을 만들 수 있도록 도와줍니다.
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
