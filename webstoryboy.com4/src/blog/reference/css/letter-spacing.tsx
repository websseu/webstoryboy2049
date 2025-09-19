import ReferBread from '@/components/refer/refer-bread'

export default function LetterSpacing() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='letter-spacing' />
        <h2>letter-spacing</h2>
        <p>
          letter-spacing은 CSS 텍스트 속성 중 하나로, 글자 사이의 간격(자간)을 조절하는 데
          사용됩니다. 디자인에서 글자가 너무 붙거나 벌어져 보일 때 이 속성을 사용해 가독성과
          스타일을 조절할 수 있습니다.
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
