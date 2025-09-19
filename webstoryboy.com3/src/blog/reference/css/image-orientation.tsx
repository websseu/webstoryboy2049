import ReferBread from '@/components/refer/refer-bread'

export default function ImageOrientation() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='image-orientation' />
        <h2>image-orientation</h2>
        <p>
          image-orientation은 CSS 속성으로, 이미지(&lt;img&gt;)의 회전 방향이나 반전 여부를 지정할
          수 있습니다. 특히 스마트폰으로 찍은 사진처럼 방향 정보가 있는 이미지의 자동 회전 처리를
          제어하거나, 원하는 각도로 수동 회전 및 좌우 반전할 수 있도록 합니다.
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
