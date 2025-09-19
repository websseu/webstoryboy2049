import ReferBread from '@/components/refer/refer-bread'

export default function Isolation() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='isolation' />
        <h2>isolation</h2>
        <p>
          isolation은 CSS에서 요소의 z-index 병합 컨텍스트(stack context)를 제어하는 속성입니다.
          간단히 말하면, 요소와 그 자식들이 다른 요소들과 겹칠 때의 계산 방식에 영향을 줍니다.
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
