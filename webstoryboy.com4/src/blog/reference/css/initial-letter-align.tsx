import ReferBread from '@/components/refer/refer-bread'

export default function InitialLetterAlign() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='initial-letter-align' />
        <h2>initial-letter-align</h2>
        <p>
          initial-letter-align은 CSS의 드롭캡(drop cap) 스타일에서, 첫 글자(initial-letter)를 텍스트
          줄과 어떻게 정렬할지를 지정하는 속성입니다. 이 속성은 initial-letter와 함께 사용되어,
          드롭캡의 수직 정렬 위치를 미세하게 조정합니다. 현재 이 속성은 아직 실험적 상태이며, Safari
          일부 버전만 제한적으로 지원하고, 다른 브라우저에서는 무시되거나 미지원 상태입니다.
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
