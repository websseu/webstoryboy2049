import ReferBread from '@/components/refer/refer-bread'

export default function MathStyle() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='math-style' />
        <h2>math-style</h2>
        <p>
          math-style은 CSS의 수학 레이아웃 제어 속성 중 하나로, MathML 수식의 표현 스타일을
          압축(compact)하거나 일반(normal) 스타일로 설정할 수 있도록 해줍니다. 즉, 수학 수식을
          표현할 때 글자 크기, 간격, 위치 등을 간결하게 줄일지 여부를 결정합니다.
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
