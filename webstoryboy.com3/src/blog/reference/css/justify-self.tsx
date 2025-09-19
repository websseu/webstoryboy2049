import ReferBread from '@/components/refer/refer-bread'

export default function JustifySelf() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='justify-self' />
        <h2>justify-self</h2>
        <p>
          justify-self는 CSS Grid 레이아웃에서 사용하는 속성으로, 개별 항목(셀 안의 자식 요소) 이
          수평 방향(인라인 축) 으로 어떻게 정렬될지를 지정합니다.
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
