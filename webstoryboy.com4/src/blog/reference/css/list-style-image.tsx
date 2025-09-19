import ReferBread from '@/components/refer/refer-bread'

export default function ListStyleImage() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='list-style-image' />
        <h2>list-style-image</h2>
        <p>
          list-style-image는 CSS에서 목록 항목(li)의 불릿(bullet)을 이미지로 바꾸는 속성입니다. 기본
          원형(●)이나 숫자 대신, 원하는 이미지를 기호처럼 표시할 수 있습니다.
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
