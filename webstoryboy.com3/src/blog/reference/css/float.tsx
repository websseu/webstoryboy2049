import ReferBread from '@/components/refer/refer-bread'

export default function Float() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='float' />
        <h2>float</h2>
        <p>
          CSS의 float 속성은 요소를 좌우로 띄워서 배치하는 데 사용됩니다. 주로 이미지 텍스트 감싸기,
          양옆 배치 같은 고전적인 레이아웃 구성에 활용되며, 현대 CSS 레이아웃 시스템(Flex, Grid)이
          등장하기 전까지는 많이 사용되었습니다.
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
