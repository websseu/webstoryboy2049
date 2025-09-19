import ReferBread from '@/components/refer/refer-bread'

export default function ListStyle() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='list-style' />
        <h2>list-style</h2>
        <p>
          list-style은 CSS에서 목록(list)의 기호 스타일을 한 번에 설정할 수 있는 축약(Shorthand)
          속성입니다. 주로 &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt; 요소에 사용되며, 불릿 모양, 위치,
          이미지 등을 지정할 수 있습니다.
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
