import ReferBread from '@/components/refer/refer-bread'

export default function BorderBlockEndColor() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='border-block-end-color' />
        <h2>border-block-end-color</h2>
        <p>
          border-block-end-color는 CSS의 논리 속성(Logical Property) 중 하나로, 요소의 블록 방향
          끝쪽 테두리의 색상을 설정합니다.
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
