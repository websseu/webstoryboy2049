import ReferBread from '@/components/refer/refer-bread'

export default function ListStylePosition() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='list-style-position' />
        <h2>list-style-position</h2>
        <p>
          list-style-position은 HTML 목록(&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;)의 불릿(기호)을
          텍스트와의 상대적인 위치를 설정하는 CSS 속성입니다.
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
