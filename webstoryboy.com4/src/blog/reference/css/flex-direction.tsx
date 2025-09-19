import ReferBread from '@/components/refer/refer-bread'

export default function FlexDirection() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='flex-direction' />
        <h2>flex-direction</h2>
        <p>
          flex-direction은 CSS Flexbox 레이아웃에서 아이템이 배치될 주 축(main axis)의 방향을
          설정하는 속성입니다. 즉, 아이템들이 가로로 나열될지, 세로로 쌓일지, 또는 그 반대
          방향일지를 결정합니다.
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
