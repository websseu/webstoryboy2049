import ReferBread from '@/components/refer/refer-bread'

export default function FontOpticalSizing() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-optical-sizing' />
        <h2>font-optical-sizing</h2>
        <p>
          font-optical-sizing은 CSS에서 폰트의 글자 크기에 따라 자동으로 세밀한 조정(두께, 자간
          등)을 적용할지 여부를 설정하는 속성입니다.사용자 언어와 관계없이 특정 언어의 글꼴 스타일을
          강제로 적용하고 싶을 때 사용합니다. 이 기능은 OpenType Variable Font(가변 글꼴)의
          &quot;optical size&quot; 축을 활용하여, 글꼴이 작을 땐 읽기 쉽게, 클 땐 우아하게 보이도록
          자동 조정합니다.
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
