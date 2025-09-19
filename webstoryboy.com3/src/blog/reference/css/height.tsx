import ReferBread from '@/components/refer/refer-bread'

export default function Height() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='height' />
        <h2>height</h2>
        <p>
          height는 CSS에서 요소의 세로 길이(높이)를 설정하는 속성입니다. 박스 모델(Box Model)에서
          컨텐츠 영역의 높이를 의미하며, 정적인 크기나 반응형 크기, 최소/최대 범위 설정 등에 자주
          사용됩니다.
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
