import ReferBread from '@/components/refer/refer-bread'

export default function Opacity() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='opacity' />
        <h2>opacity</h2>
        <p>
          opacity는 CSS 시각 속성 중 하나로, 요소의 투명도(불투명도)를 설정하는 데 사용됩니다. 값이
          0에 가까울수록 더 투명하고, 1에 가까울수록 불투명합니다.
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
