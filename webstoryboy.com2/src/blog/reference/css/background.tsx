import ReferBread from '@/components/refer/refer-bread'

export default function Background() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='background' />
        <h2>background</h2>
        <p>
          CSS의 background 속성은 요소의 배경을 설정하는 데 사용되며, 색상, 이미지, 반복, 위치, 크기
          등 다양한 속성들을 한 줄에 묶어서 사용할 수 있는 축약형(shorthand) 속성입니다.
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
