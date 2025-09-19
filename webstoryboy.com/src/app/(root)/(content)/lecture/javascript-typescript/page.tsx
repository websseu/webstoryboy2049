import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '자바스크립트 VS 타입스크립트',
}

export default function JavascriptTypescriptPage() {
  return (
    <section>
      <div className='page__title'>
        <h2>
          자바스크립트 VS 타입스크립트<span className='small'>1</span>
        </h2>
        <p>
          웹디자인기능사 2025는 최신 트렌드와 출제 경향을 반영한 국가기술자격
          시험입니다. 본 강의는 초보자부터 실무자까지 누구나 합격할 수 있도록
          구성되었습니다. HTML, CSS, JavaScript 등 기본 웹 기술부터, 실기 시험에
          필수적인 레이아웃 제작, UI/UX 설계, 디자인 구현 방법까지 체계적으로
          학습할 수 있습니다.
        </p>
      </div>
    </section>
  )
}
