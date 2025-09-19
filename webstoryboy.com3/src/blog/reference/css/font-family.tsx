import ReferBread from '@/components/refer/refer-bread'

export default function FontFamily() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-family' />
        <h2>font-family</h2>
        <p>
          font-family는 CSS에서 텍스트에 사용할 글꼴(폰트)을 지정하는 속성입니다. 웹 페이지에서 어떤
          글씨체를 보여줄지를 정할 때 반드시 사용합니다.
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
