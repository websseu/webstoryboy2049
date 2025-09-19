import ReferBread from '@/components/refer/refer-bread'

export default function FontVariantLigatures() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-variant-ligatures' />
        <h2>font-variant-ligatures</h2>
        <p>
          font-variant-ligatures는 CSS에서 글자가 자연스럽게 연결되는 &apos;합자(Ligatures)&apos;
          기능을 사용할지 제어하는 속성입니다.
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
