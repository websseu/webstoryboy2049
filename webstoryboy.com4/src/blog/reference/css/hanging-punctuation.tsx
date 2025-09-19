import ReferBread from '@/components/refer/refer-bread'

export default function HangingPunctuation() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='hanging-punctuation' />
        <h2>hanging-punctuation</h2>
        <p>
          hanging-punctuation은 CSS에서 문장 부호(따옴표, 쉼표 등)를 줄 밖에 걸쳐서 배치할 수 있게
          해주는 속성입니다. 정렬선에 맞지 않는 문장 부호를 바깥으로 빼내어, 텍스트의 시각적 정렬을
          더 깔끔하고 자연스럽게 보이도록 만드는 역할을 합니다.
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
