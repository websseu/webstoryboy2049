import ReferBread from '@/components/refer/refer-bread'

export default function BlockSize() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='block-size' />
        <h2>block-size</h2>
        <p>
          CSS의 block-size는 요소의 블록 방향(주로 세로 방향)의 크기(height)를 설정하는 속성입니다.
          이는 쓰기 방향에 따라 자동으로 세로 길이를 조절할 수 있게 해주는 논리 속성(logical
          property)입니다.
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
