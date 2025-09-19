import ReferBread from '@/components/refer/refer-bread'

export default function FlexWrap() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='flex-wrap' />
        <h2>flex-wrap</h2>
        <p>
          flex-wrap은 CSS Flexbox 레이아웃에서 사용되는 속성으로, Flex 아이템들이 한 줄에 다
          들어가지 않을 경우 줄을 바꿀 수 있는지 여부를 지정합니다. 기본적으로 Flexbox는 모든
          아이템을 한 줄에 강제로 배치하려고 하기 때문에, 아이템이 넘치면 줄바꿈(wrap)을 허용해줘야
          깨지지 않고 반응형 레이아웃이 잘 작동합니다.
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
