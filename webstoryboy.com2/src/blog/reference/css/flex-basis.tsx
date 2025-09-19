import ReferBread from '@/components/refer/refer-bread'

export default function FlexBasis() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='flex-basis' />
        <h2>flex-basis</h2>
        <p>
          flex-basis는 Flexbox 레이아웃에서 Flex 아이템의 초기 크기(기본 너비 또는 높이)를 설정하는
          속성입니다. 간단히 말해, 아이템이 &quot;자라거나 줄어들기 전에&quot; 차지하려는 기본
          크기를 의미합니다.
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
