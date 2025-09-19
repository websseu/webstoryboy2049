import ReferBread from '@/components/refer/refer-bread'

export default function ImageResolution() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='image-resolution' />
        <h2>image-resolution</h2>
        <p>
          image-resolution은 CSS에서 이미지의 해상도(dpi 또는 dppx 등)를 지정하여, 화면 또는 출력
          장치에서 이미지가 어떻게 렌더링되는지를 제어하는 속성입니다. 이 속성은 주로 프린터 출력
          또는 고해상도 디스플레이에서 이미지를 선명하게 표현하거나 의도한 해상도로 조정할 때
          사용됩니다.
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
