import ReferBread from '@/components/refer/refer-bread'

export default function FontSynthesisPosition() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-synthesis-position' />
        <h2>font-synthesis-position</h2>
        <p>
          font-synthesis-position은 CSS의 실험적 속성 중 하나로, 브라우저가 합성된 이탤릭
          스타일(기울임)의 기울이는 위치 기준을 어떻게 잡을지 설정합니다. 즉, 폰트에 italic 스타일이
          없어서 브라우저가 기계적으로 기울이는 경우, 기울이기를 기준선에서 할지, 중심에서 할지를
          결정하는 속성입니다.
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
