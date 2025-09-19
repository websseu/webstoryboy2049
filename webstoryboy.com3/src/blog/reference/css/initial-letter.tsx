import ReferBread from '@/components/refer/refer-bread'

export default function InitialLetter() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='initial-letter' />
        <h2>initial-letter</h2>
        <p>
          initial-letter는 CSS에서 첫 글자를 크게 띄워서 단락을 장식하는 드롭캡(drop cap) 스타일을
          구현할 수 있는 속성입니다. 신문, 잡지, 책 등에서 단락의 첫 글자를 크게 표시하는 전통적인
          디자인을 웹에서도 가능하게 해줍니다.
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
