import ReferBread from '@/components/refer/refer-bread'

export default function GridRow() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='grid-row' />
        <h2>grid-row</h2>
        <p>
          grid-row는 CSS Grid에서 그리드 아이템이 어느 행(row)부터 시작해서 어디까지 차지할지
          지정하는 속성입니다. 쉽게 말해, 세로 방향(행 기준)에서 그리드 아이템의 &quot;시작
          위치&quot;와 &quot;끝 위치&quot;를 동시에 설정하는 단축 속성입니다.
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
