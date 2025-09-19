import React from 'react'
import { Crown, Citrus, TvMinimalPlay } from 'lucide-react'
import Link from 'next/link'

export default function Tutorial() {
  return (
    <section>
      <div>
        <h1 className='font-black text-3xl md:text-4xl font-poppins uppercase mb-2 md:mb-4 text-center'>
          Tutorial
        </h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* CSS Animation 강의 */}
        <div className='page__title border rounded p-4'>
          <h2 className='flex items-center gap-2 text-xl font-bold'>
            <Crown /> CSS Animation
          </h2>
          <p>
            CSS만으로도 멋진 인터랙션과 시선을 사로잡는 효과를 만들 수 있다는 사실, 알고 계셨나요?
            이 강의에서는 별도의 라이브러리 없이 순수 CSS로 다양한 애니메이션을 구현하는 방법을
            배웁니다.
          </p>
          <p>
            트랜지션, 키프레임, 트랜스폼부터 애니메이션 타이밍 함수까지, 실무에 꼭 필요한 요소들을
            단계별로 실습합니다. 초보자도 따라할 수 있도록 예제 중심으로 구성했습니다.
          </p>

          <h3>이 강의는 이런 분들에게 추천합니다</h3>
          <ul>
            <li>CSS를 좀 더 풍부하게 활용하고 싶은 웹 퍼블리셔</li>
            <li>마우스 호버, 페이지 전환 등에서 자연스러운 효과를 만들고 싶은 분</li>
            <li>디자인 감각을 키우고 싶은 프론트엔드 입문자</li>
          </ul>

          <h3>강의 특징</h3>
          <ul>
            <li>트랜지션과 트랜스폼의 실전 활용법 집중</li>
            <li>keyframes를 이용한 다양한 모션 예제</li>
            <li>호버, 클릭, 스크롤과 연결된 애니메이션 패턴 실습</li>
            <li>애니메이션 성능 및 접근성 팁 제공</li>
          </ul>

          <h3>지금 시작하세요</h3>
          <p>
            별도의 자바스크립트 없이도 충분히 감각적인 인터랙션이 가능합니다. CSS 애니메이션으로
            웹페이지에 생명력을 불어넣어보세요.
          </p>

          <Link href='/tutorial/css-animation'>
            <TvMinimalPlay />
            시작하기
          </Link>
        </div>

        {/* GSAP Animation 강의 */}
        <div className='page__title border rounded p-4'>
          <h2 className='flex items-center gap-2 text-xl font-bold'>
            <Citrus /> GSAP Animation
          </h2>
          <p>
            GSAP(GreenSock Animation Platform)은 웹 애니메이션의 끝판왕이라 불리는 라이브러리입니다.
            다양한 인터랙션을 부드럽고 정교하게 구현할 수 있어, 실무에서도 폭넓게 활용되고 있죠.
          </p>
          <p>
            이 강의에서는 GSAP의 기초 문법부터 ScrollTrigger, Timeline 등을 활용한 고급 기법까지,
            실제 프로젝트에서 쓰이는 애니메이션 구현 방법을 체계적으로 배웁니다.
          </p>

          <h3>이 강의는 이런 분들에게 추천합니다</h3>
          <ul>
            <li>스크롤 기반의 역동적인 페이지를 만들고 싶은 개발자</li>
            <li>GSAP의 핵심 기능을 빠르게 익히고 싶은 실무자</li>
            <li>포트폴리오에 임팩트 있는 애니메이션을 추가하고 싶은 디자이너</li>
          </ul>

          <h3>강의 특징</h3>
          <ul>
            <li>GSAP의 기본 문법과 구조를 친절하게 설명</li>
            <li>ScrollTrigger를 활용한 스크롤 애니메이션 구현</li>
            <li>Timeline과 시퀀스 애니메이션 패턴 학습</li>
            <li>SVG, 텍스트, 이미지 등 다양한 요소에 적용하는 실전 예제</li>
          </ul>

          <h3>지금 시작하세요</h3>
          <p>
            GSAP을 익히면 단순한 웹페이지가 아닌 **생생한 경험의 공간**을 만들 수 있습니다.
            인터랙티브 웹의 정수를 배우고 싶다면, 지금 시작해보세요.
          </p>

          <Link href='/tutorial/gsap-animation'>
            <TvMinimalPlay />
            시작하기
          </Link>
        </div>
      </div>
    </section>
  )
}
