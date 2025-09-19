import ReferBread from '@/components/refer/refer-bread'

export default function BackgroundSize() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='background-size' />
        <h2>background-size</h2>
        <p>
          CSS의 background-size는 배경 이미지의 크기를 조절하는 속성입니다. 요소에 지정한 이미지가
          어떻게 확대 또는 축소되어 배치될지를 결정합니다.
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
