import ReferBread from '@/components/refer/refer-bread'

export default function FontPalette() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-palette' />
        <h2>font-palette</h2>
        <p>
          font-palette는 CSS의 최신 속성 중 하나로, COLRv1 색상 글꼴(Color Fonts)에서 미리 정의된
          색상 팔레트(조합)를 선택할 수 있게 해줍니다. 쉽게 말하면, 컬러 폰트 안에 내장된 다양한 색
          조합(팔레트)을 CSS로 고를 수 있는 기능입니다.
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
