import ReferBread from '@/components/refer/refer-bread'

export default function ListStyleType() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='list-style-type' />
        <h2>list-style-type</h2>
        <p>
          list-style-type은 CSS에서 HTML 목록(&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;)의 불릿(bullet)
          또는 번호 스타일을 지정하는 속성입니다. 불릿의 모양이나 순번 형식을 텍스트 또는 기호
          형태로 설정할 수 있습니다.
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
