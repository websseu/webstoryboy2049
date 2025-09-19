import ReferBread from '@/components/refer/refer-bread'

export default function FlexShrink() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='flex-shrink' />
        <h2>flex-shrink</h2>
        <p>
          flex-shrink는 CSS Flexbox 레이아웃에서 사용하는 속성으로, Flex 아이템이 컨테이너보다
          커졌을 때 얼마나 줄어들 수 있는지를 비율로 설정합니다. 쉽게 말해: &quot;공간이 부족할 때
          이 아이템이 얼마나 작아질 수 있는지&quot;를 조절하는 속성입니다.
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
