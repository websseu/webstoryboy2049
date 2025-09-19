import ReferBread from '@/components/refer/refer-bread'

export default function Marker() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='marker' />
        <h2>marker</h2>
        <p>
          marker는 CSS에서 목록 항목(불릿 등)의 기호 스타일을 커스터마이징할 수 있게 해주는 가상
          요소 선택자이자, 일부 브라우저에서는 속성 이름으로도 사용되는 실험적 기능입니다. 주로
          &lt;li&gt; 요소나 &lt;summary&gt; 같은 자동으로 기호가 붙는 HTML 요소의 불릿(기호, 숫자
          등)을 정교하게 조절할 수 있게 도와줍니다.
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
