import ReferBread from '@/components/refer/refer-bread'

export default function Hyphens() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='hyphens' />
        <h2>hyphens</h2>
        <p>
          hyphens는 CSS에서 단어가 줄 끝에서 자동으로 하이픈(-)으로 분리될 수 있도록 허용할지를
          지정하는 속성입니다. 이 속성을 사용하면 긴 단어가 자동으로 줄바꿈되면서 하이픈(-)이
          삽입되어 텍스트의 가독성과 레이아웃 정돈에 도움이 됩니다.
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
