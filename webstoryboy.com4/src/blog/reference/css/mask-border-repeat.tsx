import ReferBread from '@/components/refer/refer-bread'

export default function MaskBorderRepeat() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-border-repeat' />
        <h2>mask-border-repeat</h2>
        <p>
          mask-border-repeat는 CSS 마스킹(masking)에서 사용되는 속성으로, mask-border-source로
          지정한 마스크 이미지를 테두리 영역에 어떻게 반복(repeat)할지 결정하는 역할을 합니다. 이는
          border-image-repeat과 매우 유사하며, 마스크 테두리(mask-border)에서 이미지를 채우는 방식을
          제어합니다.
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
