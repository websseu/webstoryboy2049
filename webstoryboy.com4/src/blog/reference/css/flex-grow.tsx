import ReferBread from '@/components/refer/refer-bread'

export default function FlexGrow() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='flex-grow' />
        <h2>flex-grow</h2>
        <p>
          flex-grow는 CSS Flexbox 레이아웃에서 사용되는 속성으로, Flex 아이템이 남은 공간을 얼마나
          차지할지를 비율로 지정합니다. 쉽게 말해 &quot;여유 공간이 있을 때 이 아이템이 얼마나
          늘어날 것인지&quot;를 정하는 속성입니다.
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
