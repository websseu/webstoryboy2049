import ReferBread from '@/components/refer/refer-bread'

export default function FontWidth() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-width' />
        <h2>font-width</h2>
        <p>
          font-width는 CSS에서 가변 글꼴(variable font)에서 제공하는 글꼴 너비(width)를 직접 수치로
          조절할 수 있는 속성입니다. 예전에는 font-stretch 속성으로 &quot;condensed&quot;,
          &quot;expanded&quot; 등으로만 너비를 설정했지만, font-width는 숫자 값으로 훨씬 더 세밀하게
          글자 너비를 제어할 수 있습니다. 다만, **가변 폰트(variable font)**에서만 동작합니다.
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
