import ReferBread from '@/components/refer/refer-bread'

export default function FlexFlow() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='flex-flow' />
        <h2>flex-flow</h2>
        <p>
          flex-flow는 CSS의 Flexbox 레이아웃 속성 중 하나로, flex-direction과 flex-wrap을 한 줄로
          묶어서 작성할 수 있는 축약형 속성입니다. 레이아웃의 방향과 줄바꿈 여부를 동시에 설정할 수
          있습니다.
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
