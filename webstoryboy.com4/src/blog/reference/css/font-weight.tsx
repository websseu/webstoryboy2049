import ReferBread from '@/components/refer/refer-bread'

export default function FontWeight() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-weight' />
        <h2>font-weight</h2>
        <p>
          font-weight는 CSS에서 글자의 굵기(두께)를 지정하는 속성입니다. 텍스트 강조, 계층 표현,
          시각적 무게 조절 등에서 매우 자주 사용됩니다.
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
