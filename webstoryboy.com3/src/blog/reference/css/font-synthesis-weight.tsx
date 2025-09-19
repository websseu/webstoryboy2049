import ReferBread from '@/components/refer/refer-bread'

export default function FontSynthesisWitdh() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-synthesis-width' />
        <h2>font-synthesis-width</h2>
        <p>
          font-synthesis-width는 CSS에서 웹폰트가 다양한 너비 계열(Condensed, Expanded 등)을
          지원하지 않을 경우, 브라우저가 자동으로 글꼴 너비를 늘리거나 줄이는 합성(보정)을 할지
          말지를 제어하는 속성입니다. 쉽게 말해, 폰트에 condensed, expanded 스타일이 없을 때
          브라우저가 강제로 폭을 늘리거나 줄여서 흉내 낼지를 설정하는 것입니다.
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
