import ReferBread from '@/components/refer/refer-bread'

export default function MaskBorderSlice() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-border-slice' />
        <h2>mask-border-slice</h2>
        <p>
          mask-border-slice는 CSS 마스킹(masking) 속성 중 하나로, mask-border-source로 지정된 마스크
          이미지의 테두리를 9개 영역으로 나누기 위한 기준을 설정합니다. 이는 border-image-slice와
          매우 유사하며, 마스크 이미지를 어떻게 자르고 테두리 영역에 분배할지를 결정합니다.
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
