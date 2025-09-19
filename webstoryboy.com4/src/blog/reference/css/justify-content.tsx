import ReferBread from '@/components/refer/refer-bread'

export default function JustifyContent() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='justify-content' />
        <h2>justify-content</h2>
        <p>
          justify-content는 CSS Flexbox와 Grid 레이아웃에서 사용되는 속성으로, 주 축(main axis)
          방향에서 자식 요소들을 어떻게 정렬할지를 설정합니다.
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
