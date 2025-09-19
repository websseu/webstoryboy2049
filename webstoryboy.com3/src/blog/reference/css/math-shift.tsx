import ReferBread from '@/components/refer/refer-bread'

export default function MathShift() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='math-shift' />
        <h2>math-shift</h2>
        <p>
          math-shift는 CSS의 실험적 속성으로, MathML 수식 내에서 위첨자(superscript)의 위치를
          조정하는 데 사용됩니다. 이 속성은 OpenType 폰트의 MATH 테이블을 활용하여 수식의 시각적
          표현을 세밀하게 제어할 수 있도록 도와줍니다.
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
