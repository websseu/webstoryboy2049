import ReferBread from '@/components/refer/refer-bread'

export default function ImageRendering() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='image-rendering' />
        <h2>image-rendering</h2>
        <p>
          image-rendering은 CSS에서 이미지를 확대/축소할 때 픽셀을 어떻게 렌더링(보간)할지 지정하는
          속성입니다. 이 속성은 이미지가 크기 변경될 때 선명하게 보일지 또는 부드럽게(블러 처리)
          보일지를 결정합니다. 특히 픽셀아트나 저해상도 이미지를 뚜렷하게 표시하고 싶을 때
          유용합니다.
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
