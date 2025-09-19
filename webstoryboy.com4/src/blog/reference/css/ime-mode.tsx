import ReferBread from '@/components/refer/refer-bread'

export default function ImeMode() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='ime-mode' />
        <h2>ime-mode</h2>
        <p>
          ime-mode는 입력 필드에서 IME(입력기, 예: 한글 입력기)의 동작을 제어하기 위한 CSS
          속성이었습니다. 현재는 대부분의 브라우저에서 지원되지 않고, 표준에서도
          제외(deprecated)되었습니다.
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
