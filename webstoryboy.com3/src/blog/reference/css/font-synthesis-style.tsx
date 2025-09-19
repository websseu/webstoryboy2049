import ReferBread from '@/components/refer/refer-bread'

export default function FontSynthesisStyle() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-synthesis-style' />
        <h2>font-synthesis-style</h2>
        <p>
          font-synthesis-style은 CSS에서 폰트에 italic(이탤릭체) 스타일이 없을 경우, 브라우저가
          기계적으로 기울여서 이탤릭을 합성할지 말지를 제어하는 속성입니다. 폰트에 italic 스타일이
          없는데도 font-style: italic이 설정되면, 브라우저는 일반적으로 자동으로 이탤릭체를 합성해서
          보여줍니다. font-synthesis-style은 이 자동 합성을 허용할지 막을지를 결정합니다.
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
