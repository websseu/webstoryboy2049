import ReferBread from '@/components/refer/refer-bread'

export default function HyphenateLimitChars() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='hyphenate-limit-chars' />
        <h2>hyphenate-limit-chars</h2>
        <p>
          hyphenate-limit-chars는 CSS에서 단어를 하이픈으로 줄바꿈할 수 있는 조건(문자 수 제한)을
          지정하는 속성입니다. 쉽게 말해, &quot;하이픈으로 줄바꿈해도 되는 단어인지?&quot;를 단어의
          길이와 앞/뒤 최소 문자 수로 판단하는 설정입니다.
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
