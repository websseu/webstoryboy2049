import ReferBread from '@/components/refer/refer-bread'

export default function FontSize() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='font-size' />
        <h2>font-size</h2>
        <p>
          font-size는 CSS에서 텍스트의 글자 크기(폰트 크기)를 지정하는 속성입니다. 웹 디자인에서
          가독성, 위계, 반응형 타이포그래피 등을 조절하는 데 가장 기본적이고 중요한 속성 중
          하나입니다.
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
