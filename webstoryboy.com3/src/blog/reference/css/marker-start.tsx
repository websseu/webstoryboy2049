import ReferBread from '@/components/refer/refer-bread'

export default function MarkerStart() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='marker-start' />
        <h2>marker-start</h2>
        <p>
          marker-start는 SVG에서 사용하는 속성으로, 선형 요소의 시작점(start point)에 화살표나
          아이콘 등의 마커를 삽입할 때 사용됩니다.
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
