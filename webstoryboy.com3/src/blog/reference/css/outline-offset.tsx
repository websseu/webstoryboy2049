import ReferBread from '@/components/refer/refer-bread'

export default function OutlineOffset() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='outline-offset' />
        <h2>outline-offset</h2>
        <p>
          outline-offset은 CSS 시각 스타일 속성 중 하나로, 요소에 적용된 outline(윤곽선)을 요소
          경계(box)로부터 얼마나 떨어뜨릴지 지정하는 속성입니다. 쉽게 말해 외곽선이 요소에 딱
          붙을지, 띄워질지를 조절합니다.
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
