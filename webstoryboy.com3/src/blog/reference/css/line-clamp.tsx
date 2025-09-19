import ReferBread from '@/components/refer/refer-bread'

export default function LineClamp() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='line-clamp' />
        <h2>line-clamp</h2>
        <p>
          line-clamp는 CSS에서 텍스트를 일정한 줄 수까지만 보이도록 잘라내는 속성입니다. 주로 긴
          문장을 특정 줄 수까지만 보여주고 나머지는 생략(...) 처리할 때 사용됩니다.
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
