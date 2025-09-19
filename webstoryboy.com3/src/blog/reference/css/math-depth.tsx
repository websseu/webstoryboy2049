import ReferBread from '@/components/refer/refer-bread'

export default function MathDepth() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='math-depth' />
        <h2>math-depth</h2>
        <p>
          math-depth는 CSS의 수학 표현 레이아웃(MathML)과 관련된 실험적 속성으로, 수학 수식의 중첩
          수준(depth)을 정의하거나 조절하여, 수식의 자동 크기 조정(scripting level)이나 스타일 적용
          시 참고하는 값을 지정합니다. 이 속성은 일반적인 CSS UI에는 잘 사용되지 않고, MathML이나
          수학 콘텐츠 렌더링에 주로 쓰입니다.
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
