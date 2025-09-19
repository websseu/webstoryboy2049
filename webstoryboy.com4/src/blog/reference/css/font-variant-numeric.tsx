import ReferBread from '@/components/refer/refer-bread'

export default function FontVariantNumeric() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-variant-numeric' />
        <h2>font-variant-numeric</h2>
        <p>
          font-variant-numeric은 CSS에서 숫자의 스타일(모양과 정렬 방식)을 세밀하게 제어할 수 있는
          속성입니다. OpenType 폰트의 숫자 표현 기능을 활용하여, 숫자를 전통적으로 보이게 하거나,
          표에 맞게 정렬되도록 고정 폭으로 바꾸는 데 사용됩니다.
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
