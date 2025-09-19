import ReferBread from '@/components/refer/refer-bread'

export default function HyphenateCharacter() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='hyphenate-character' />
        <h2>hyphenate-character</h2>
        <p>
          hyphenate-character는 CSS에서 단어 줄바꿈(hyphenation)이 발생할 때 사용되는 하이픈(연결
          문자)을 지정하는 속성입니다. 기본적으로 단어가 줄에서 잘릴 때 -가 삽입되지만, 이 속성을
          사용하면 사용자가 원하는 문자나 기호로 대체할 수 있습니다.
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
