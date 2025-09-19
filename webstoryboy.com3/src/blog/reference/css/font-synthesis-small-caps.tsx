import ReferBread from '@/components/refer/refer-bread'

export default function FontSynthesisSmaillCaps() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-synthesis-small-caps' />
        <h2>font-synthesis-small-caps</h2>
        <p>
          font-synthesis-small-caps는 CSS에서 폰트가 small-caps(스몰캡, 소형 대문자)를 지원하지 않을
          때, 브라우저가 자동으로 스몰캡 형태를 합성해서 보여줄지 여부를 제어하는 속성입니다.
          small-caps는 소문자를 대문자처럼 표시하되, 크기를 작게 만드는 스타일입니다. 하지만 모든
          폰트가 이를 지원하지 않기 때문에, 브라우저가 가짜 스몰캡을 합성할 수 있습니다.
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
