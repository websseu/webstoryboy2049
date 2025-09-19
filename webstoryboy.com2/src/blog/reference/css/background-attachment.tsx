import ReferBread from '@/components/refer/refer-bread'

export default function BackgroundAttachment() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='background-attachment' />
        <h2>background-attachment</h2>
        <p>
          background-attachment는 CSS에서 배경 이미지가 스크롤될지, 고정될지를 설정하는 속성입니다.
          즉, 페이지를 스크롤할 때 배경이 함께 움직일지, 화면에 고정되어 있을지를 제어합니다.
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
