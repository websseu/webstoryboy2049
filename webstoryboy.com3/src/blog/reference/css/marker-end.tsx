import ReferBread from '@/components/refer/refer-bread'

export default function MarkerEnd() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='marker-end' />
        <h2>marker-end</h2>
        <p>
          marker-end는 SVG (Scalable Vector Graphics)에서 사용하는 속성으로, 선형 요소의 끝
          부분(끝점)에 화살표나 기호 등을 붙이는 데 사용됩니다. 이 속성은 line, path, polyline 등의
          선 끝에 장식(마커)을 지정할 때 사용됩니다.
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
