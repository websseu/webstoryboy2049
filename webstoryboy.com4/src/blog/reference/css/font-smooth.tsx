import ReferBread from '@/components/refer/refer-bread'

export default function FontSmooth() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-smooth' />
        <h2>font-smooth</h2>
        <p>
          font-smooth는 CSS에서 텍스트의 안티앨리어싱 방식(글꼴을 부드럽게 렌더링하는 방법)을
          설정하는 속성입니다. 텍스트 가장자리의 계단 현상을 줄여 더 부드럽게 보이게 하거나, 반대로
          또렷하게 보이도록 조절할 수 있도록 시도합니다. 단, 이 속성은 브라우저 비표준(비공식)이며,
          지원도 제한적입니다.
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
