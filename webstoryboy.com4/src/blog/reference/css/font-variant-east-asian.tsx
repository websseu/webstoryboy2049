import ReferBread from '@/components/refer/refer-bread'

export default function FontVariantEastAsian() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-variant-east-asian' />
        <h2>font-variant-east-asian</h2>
        <p>
          font-variant-east-asian은 CSS에서 한중일(동아시아) 문자에 대한 타이포그래피 스타일을
          제어하는 속성입니다. OpenType 폰트의 동아시아 글자 표현 방식을 정밀하게 조절할 수 있게
          해줍니다.
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
