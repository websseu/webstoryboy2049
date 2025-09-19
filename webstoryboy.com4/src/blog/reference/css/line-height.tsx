import ReferBread from '@/components/refer/refer-bread'

export default function LineHeight() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='line-height' />
        <h2>line-height</h2>
        <p>
          line-height는 CSS에서 텍스트 줄 간격(행간)을 조절하는 속성입니다. 각 줄의
          기준선(Baseline)과 기준선 사이의 높이를 설정하여, 텍스트 블록의 세로 간격과 가독성에
          영향을 줍니다.
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
