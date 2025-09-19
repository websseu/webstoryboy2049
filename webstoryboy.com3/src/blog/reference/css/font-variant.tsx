import ReferBread from '@/components/refer/refer-bread'

export default function FontVariant() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-variant' />
        <h2>font-variant</h2>
        <p>
          font-variant는 CSS에서 특수한 글꼴 스타일(예: 스몰캡, 구식 숫자 등)을 지정하는 속성입니다.
          타이포그래피를 세밀하게 조정하고 싶은 상황에서 유용하며, 기본 스타일 외에도 OpenType
          폰트의 고급 기능을 쉽게 사용할 수 있도록 돕습니다.
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
