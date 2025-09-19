import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TvMinimalPlay } from 'lucide-react'

export default async function LecturePage() {
  return (
    <section>
      <div className='page__title'>
        <h1>Lecture</h1>
      </div>
      <div>
        <Tabs defaultValue='tab-1'>
          <TabsList className='grid mx-auto grid-cols-2 mb-4'>
            <TabsTrigger value='tab-1'>웹디자인개발기능사</TabsTrigger>
            <TabsTrigger value='tab-2'>GSAP</TabsTrigger>
          </TabsList>
          <TabsContent value='tab-1'>
            <div className='intro__title'>
              <h2>한번에 자격증 취득하려면?</h2>
              <p>
                웹디자인개발기능사 2025는 최신 웹 트렌드와 국가기술자격 출제 기준을 기반으로 설계된
                시험으로, 실무 중심의 웹 디자인 역량을 검증하는 중요한 자격입니다. 본 강의는
                입문자부터 실무 경험자까지 모두가 효과적으로 학습할 수 있도록 구성되었으며,{' '}
                <em>HTML, CSS, jQuery JavaScript</em> 등의 핵심 기술을 포함해 실기 시험에 필요한
                레이아웃 구성, 반응형 UI/UX 설계, 웹 접근성 고려 등 실무에 바로 적용 가능한 내용을
                체계적으로 다룹니다.
              </p>

              <h3>이 강의는 이런 분들을 위해 준비했습니다</h3>
              <ul>
                <li>최신 기준에 맞춘 웹디자인개발기능사 2025 시험을 준비하는 수험생</li>
                <li>실전 감각을 갖춘 퍼블리싱 및 프론트엔드 기초를 배우고 싶은 웹 입문자</li>
                <li>출제 유형 분석 및 문제 풀이를 통해 합격 전략을 세우고 싶은 학습자</li>
                <li>HTML/CSS 기반 구조 설계에 자신감을 갖고 싶은 실무 준비생</li>
                <li>포트폴리오에 활용 가능한 완성도 높은 웹 디자인 예제를 경험하고 싶은 분</li>
              </ul>

              <h3>강의 특징</h3>
              <ul>
                <li>2025년 최신 출제 기준 및 유형 완벽 반영</li>
                <li>실기 시험의 모든 문제 유형(A/B/C/D/E/E 유형)을 실습 중심으로 정리</li>
                <li>시험 직결 웹 페이지 레이아웃 제작 기법과 실무 기술 병행 학습</li>
                <li>웹디자인 실무에 유용한 반응형, UI/UX 설계, 접근성 고려 내용 포함</li>
                <li>학습자의 이해를 돕기 위한 요약 정리 자료 및 실전 노트 제공</li>
                <li>비전공자도 이해 가능한 설명으로 기초부터 심화까지 단계별 학습 가능</li>
              </ul>

              <h3>강사 소개</h3>
              <p>
                본 강의는 10년 이상 웹디자인 및 프론트엔드 분야에서 현업을 경험한 전문가 가 직접
                기획하고 진행합니다. 다양한 프로젝트 수행과 교육 경험을 바탕으로, 시험에 꼭 나오는
                핵심 개념과 실무에서 바로 적용할 수 있는 노하우를 집약하였습니다. 수많은 수강생들의
                합격과 실력 향상을 이끌어온 신뢰도 높은 강의입니다.
              </p>

              <h3>지금 시작하세요</h3>
              <p>
                단순한 자격증 취득을 넘어 실무에 활용 가능한 역량 강화까지. 웹디자인기능사 2025의
                합격은 물론, 자신만의 웹 포트폴리오까지 함께 완성해보세요. 지금 바로 시작하면, 더
                빠르게 성장할 수 있습니다!
              </p>

              <Link
                href='/lecture/webdesign2025'
                className='w-full flex items-center justify-center gap-2 p-2 mt-8 rounded font-bold text-sm bg-amber-100'
              >
                <TvMinimalPlay />
                시작하기
              </Link>
            </div>
          </TabsContent>
          <TabsContent value='tab-2'>
            <div className='intro__title'>
              <h2>GSAP으로 인터랙티브 웹을 만들려면?</h2>
              <p>
                사용자의 시선을 사로잡는 인터랙티브 웹사이트는 단순한 정보 제공을 넘어, 브랜드의
                이미지를 전달하고, 방문자의 행동을 유도하는 중요한 수단이 됩니다. 본 강의는
                애니메이션 라이브러리인 <strong>GSAP(GreenSock Animation Platform)</strong>을
                중심으로, 실무에서 바로 사용할 수 있는 웹 애니메이션 구현 기법을 배웁니다.
              </p>

              <h3 className='mt-6'>이 강의는 이런 분들에게 추천합니다</h3>
              <ul>
                <li>정적인 웹사이트에 생동감을 더하고 싶은 퍼블리셔 및 개발자</li>
                <li>GSAP의 기본 사용법부터 고급 애니메이션 기법까지 단계적으로 배우고 싶은 분</li>
                <li>스크롤 트리거, 타임라인 등 다양한 상호작용을 직접 구현해보고 싶은 분</li>
                <li>
                  포트폴리오와 실무 프로젝트에 인터랙티브 요소를 더하고 싶은 디자이너·프론트엔드
                  개발자
                </li>
              </ul>

              <h3 className='mt-6'>강의 특징</h3>
              <ul>
                <li>GSAP의 핵심 개념과 API를 실습 중심으로 학습</li>
                <li>스크롤 애니메이션, 페럴랙스 효과, SVG 애니메이션 구현</li>
                <li>ScrollTrigger, Timeline 등을 활용한 시퀀스 애니메이션 제작</li>
                <li>모던 웹사이트에서 자주 활용되는 인터랙션 예제 다수 포함</li>
                <li>디자이너와 개발자 모두 이해할 수 있는 직관적인 설명</li>
              </ul>

              <h3 className='mt-6'>강사 소개</h3>
              <p>
                인터랙티브 웹 구축 경험이 풍부한 프론트엔드 개발자가 직접 진행합니다. 애니메이션의
                원리를 쉽게 이해할 수 있도록 시각적인 예제 중심으로 설명하며, 실무에서 활용할 수
                있는 코드 패턴과 성능 최적화 팁까지 함께 전달합니다.
              </p>

              <h3 className='mt-6'>지금 시작하세요</h3>
              <p>
                웹사이트의 완성도를 한 단계 끌어올리고 싶다면, GSAP 강의를 통해 실감나는
                애니메이션과 인터랙션을 익혀보세요. 여러분의 웹페이지는 이제 단순한 정보 공간이
                아니라, 경험을 전달하는 공간이 될 수 있습니다.
              </p>

              <Link
                href='/lecture/gsap-parallax-effect'
                className='w-full flex items-center justify-center gap-2 p-2 mt-8 rounded font-bold text-sm bg-amber-100'
              >
                <TvMinimalPlay />
                시작하기
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
