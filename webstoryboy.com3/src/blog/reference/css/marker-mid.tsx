import ReferBread from '@/components/refer/refer-bread'

export default function MarkerMid() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='marker-mid' />
        <h2>marker-mid</h2>
        <p>
          marker-mid는 SVG(Salable Vector Graphics)에서 사용하는 속성으로, 선형 도형의 &quot;중간
          점들&quot;에 마커(기호, 화살표 등)를 삽입할 때 사용됩니다.
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
