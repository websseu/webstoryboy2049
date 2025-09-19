import ReferBread from '@/components/refer/refer-bread'

export default function Offset() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='offset' />
        <h2>offset</h2>
        <p>
          offset은 CSS 애니메이션과 관련된 모션 패스(Motion Path) 속성의 shorthand(축약) 속성입니다.
          요소가 따라 움직일 경로(path)를 설정하고, 해당 경로 위에서 현재 위치(offset-distance),
          방향(offset-rotate), 경로(offset-path) 등을 한 번에 지정할 수 있습니다.
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
