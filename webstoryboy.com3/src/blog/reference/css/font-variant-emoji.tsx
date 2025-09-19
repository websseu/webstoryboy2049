import ReferBread from '@/components/refer/refer-bread'

export default function FontVariantEmoji() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-variant-emoji' />
        <h2>font-variant-emoji</h2>
        <p>
          font-variant-emoji는 CSS의 최신 실험적 속성으로, 텍스트 내에 포함된 이모지를 어떤 스타일로
          표시할지 지정하는 속성입니다. 이 속성을 사용하면 텍스트 스타일의 이모지, 색상 이모지, 또는
          기본 시스템 이모지 등으로 표현 방식을 바꿀 수 있습니다.
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
