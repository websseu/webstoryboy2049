import ReferBread from '@/components/refer/refer-bread'

export default function AnimationName() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='animation-name' />
        <h2>animation-name</h2>
        <p>
          animation-name은 CSS에서 어떤 애니메이션을 적용할지를 지정하는 속성입니다. 즉,
          @keyframes로 정의한 애니메이션의 이름을 연결해주는 역할을 합니다.
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
