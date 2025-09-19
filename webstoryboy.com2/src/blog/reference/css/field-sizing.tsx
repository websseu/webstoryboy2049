import ReferBread from '@/components/refer/refer-bread'

export default function FieldSizing() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='field-sizing' />
        <h2>field-sizing</h2>
        <p>
          field-sizing은 CSS의 새로운 실험적 속성 중 하나로, 입력 필드(input, textarea 등)의 자동
          크기 조절 동작을 제어합니다. 특히 &lt;input type=&quot;text&quot;&gt;, &lt;textarea&gt;
          등의 내용 길이에 따라 필드 너비 또는 높이를 자동으로 조정하고 싶을 때 사용됩니다.
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
