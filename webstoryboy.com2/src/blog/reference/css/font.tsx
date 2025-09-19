import ReferBread from '@/components/refer/refer-bread'

export default function Font() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font' />
        <h2>font</h2>
        <p>
          font는 CSS에서 글꼴 관련 속성(font-family, font-size, font-style 등)을 한 줄로 축약해서
          작성할 수 있는 shorthand 속성입니다. 즉, font는 텍스트의 스타일, 크기, 줄 간격, 글꼴 종류
          등을 한 번에 지정할 수 있게 해줍니다.
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
