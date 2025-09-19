import ReferBread from '@/components/refer/refer-bread'

export default function FontKerning() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-kerning' />
        <h2>font-kerning</h2>
        <p>
          font-kerning은 CSS에서 글자 사이의 자간(kerning, 글자 사이 간격)을 자동으로 조정할지
          여부를 지정하는 속성입니다. 커닝(Kerning)ㅍ이란: 특정 글자 쌍(ex. AV, To, Wa) 사이의
          간격을 디자인적으로 자연스럽게 조절하는 작업입니다.
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
