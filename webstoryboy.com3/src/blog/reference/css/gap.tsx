import ReferBread from '@/components/refer/refer-bread'

export default function Gap() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='gap' />
        <h2>gap</h2>
        <p>
          gap은 CSS에서 Flexbox, Grid, Multi-column 레이아웃에서 요소 간 간격(공백)을 지정하는
          속성입니다. 과거에는 요소 사이의 여백을 만들기 위해 margin을 각각 설정했지만, gap은
          레이아웃 내부의 요소 간 간격을 간편하게 설정할 수 있도록 도와줍니다.
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
