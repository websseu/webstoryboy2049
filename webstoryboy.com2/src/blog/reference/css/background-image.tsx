import ReferBread from '@/components/refer/refer-bread'

export default function BackgroundImage() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='background-image' />
        <h2>background-image</h2>
        <p>
          background-image는 CSS에서 요소의 배경에 이미지나 그라디언트 등을 설정할 수 있는
          속성입니다. 단색(background-color)이 아닌 사진, 패턴, 아이콘, 그라디언트 등을 배경으로
          넣고 싶을 때 사용합니다.
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
