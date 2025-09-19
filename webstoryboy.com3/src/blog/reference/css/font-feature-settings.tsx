import ReferBread from '@/components/refer/refer-bread'

export default function FontFeatureSetting() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-feature-settings' />
        <h2>font-feature-settings</h2>
        <p>
          font-feature-settings는 CSS에서 OpenType 폰트의 고급 타이포그래피 기능을 제어하는
          속성입니다. 즉, 폰트 안에 내장된 특수 기능(예: 작은 대문자, 숫자 정렬 방식, 대체 문자
          등)을 직접 활성화/비활성화할 수 있습니다.
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
