import ReferBread from '@/components/refer/refer-bread'

export default function FontLanguageOverride() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-language-override' />
        <h2>font-language-override</h2>
        <p>
          font-language-override는 CSS에서 OpenType 폰트의 언어별 타이포그래피 특성을 강제로 지정할
          수 있는 속성입니다. 이 속성은 주로 폰트가 여러 언어 스타일(예: 영어, 독일어, 터키어 등)을
          포함하고 있을 때, 사용자 언어와 관계없이 특정 언어의 글꼴 스타일을 강제로 적용하고 싶을 때
          사용합니다.
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
