import ReferBread from '@/components/refer/refer-bread'

export default function MaskType() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='mask-type' />
        <h2>mask-type</h2>
        <p>
          mask-type은 CSS 마스킹 속성 중 하나로, mask-image나 mask 속성에 적용되는 **마스크의 해석
          방식(알파 vs 밝기)**을 지정합니다. 쉽게 말해, 마스크 이미지를 어떻게 해석해서 보이게
          할지를 설정합니다.
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
