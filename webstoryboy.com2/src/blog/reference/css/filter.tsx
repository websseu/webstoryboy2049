import ReferBread from '@/components/refer/refer-bread'

export default function Filter() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='filter' />
        <h2>filter</h2>
        <p>
          CSS의 filter 속성은 이미지나 요소에 시각적 효과(블러, 밝기, 색상 변경 등)를 적용하는
          속성입니다. 마치 포토샵처럼 웹에서도 요소에 즉각적인 스타일 효과를 줄 수 있게 해줍니다.
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
