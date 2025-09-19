import ReferBread from '@/components/refer/refer-bread'

export default function BackdropFilter() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='backdrop-filter' />
        <h2>backdrop-filter</h2>
        <p>
          backdrop-filter는 CSS에서 요소 뒤에 있는 배경(뒷배경)을 흐리게 하거나 색상 효과를 주는
          필터 효과를 적용하는 속성입니다. 즉, 요소 자체가 아닌 뒤에 보이는 콘텐츠에 시각적인 효과를
          주는 데 사용합니다.
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
