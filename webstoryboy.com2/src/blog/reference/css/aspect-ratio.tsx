import ReferBread from '@/components/refer/refer-bread'

export default function AspectRatio() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='aspect-ratio' />
        <h2>aspect-ratio</h2>
        <p>
          aspect-ratio는 CSS에서 요소의 가로 세로 비율을 지정하는 속성입니다. 특정 비율을 유지한
          채로 자동 크기 조정이 필요할 때 매우 유용합니다.
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
