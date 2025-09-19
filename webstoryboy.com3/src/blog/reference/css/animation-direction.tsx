import ReferBread from '@/components/refer/refer-bread'

export default function AnimationDirection() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='animation-direction' />
        <h2>animation-direction</h2>
        <p>
          animation-direction 속성은 CSS 애니메이션을 어떤 방향으로 재생할지 결정합니다. 키프레임이
          정의된 순서대로(정방향) 재생할지, 반대로(역방향) 재생할지, 또는 앞뒤로 교번할지를 설정할
          수 있습니다.
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
