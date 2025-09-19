import ReferBread from '@/components/refer/refer-bread'

export default function OffsetPath() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='offset-path' />
        <h2>offset-path</h2>
        <p>
          offset-path는 CSS Motion Path(모션 경로) 기능의 핵심 속성으로, 요소가 따라 움직일
          경로(path)를 지정하는 역할을 합니다. 이 속성 덕분에 요소는 선, 곡선, 원형 등의 경로를 따라
          움직일 수 있습니다.
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
