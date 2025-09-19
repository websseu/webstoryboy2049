import ReferBread from '@/components/refer/refer-bread'

export default function Flex() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='flex' />
        <h2>flex</h2>
        <p>
          flex는 CSS에서 Flexbox 레이아웃 시스템을 정의하는 display 속성 값입니다. 이 속성을
          사용하면 요소들을 가로 또는 세로로 쉽게 정렬하고 배치할 수 있습니다.
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
