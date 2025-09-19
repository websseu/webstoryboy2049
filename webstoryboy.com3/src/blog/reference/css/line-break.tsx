import ReferBread from '@/components/refer/refer-bread'

export default function LineBreak() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='line-break' />
        <h2>line-break</h2>
        <p>
          line-break는 CSS에서 줄바꿈 규칙을 설정할 때 사용하는 속성입니다. 특히 동아시아 문자(한글,
          일본어, 중국어)를 포함한 텍스트의 줄바꿈 동작을 보다 정교하게 제어할 수 있도록
          만들어졌습니다.
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
