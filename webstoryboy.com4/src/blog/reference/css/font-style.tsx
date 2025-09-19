import ReferBread from '@/components/refer/refer-bread'

export default function FontStyle() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-style' />
        <h2>font-style</h2>
        <p>
          font-style은 CSS에서 글꼴의 스타일을 기울이거나 스타일링할지 여부를 지정하는 속성입니다.
          주로 이탤릭체(italic)나 오블리크체(oblique) 같은 기울어진 텍스트를 만들 때 사용합니다.
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
