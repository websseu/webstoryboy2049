import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TvMinimalPlay } from 'lucide-react'

export default function TutorialPage() {
  return (
    <section>
      <h1 className='title'>Tutorial</h1>
      <Tabs defaultValue='tab-1'>
        <TabsList className='grid mx-auto grid-cols-2 mb-4'>
          <TabsTrigger value='tab-1'>UI/UX CSS Design</TabsTrigger>
          <TabsTrigger value='tab-2'>GSAP Interactive Animation</TabsTrigger>
        </TabsList>
        <TabsContent value='tab-1'>
          <div className='page__title'>
            <h2>사용자 중심의 디자인</h2>
            <p>
              UI/UX & CSS Design 강의는 사용자 중심의 디자인 사고와 최신 CSS
              기술을 바탕으로, 직관적이고 아름다운 웹 인터페이스를 만드는 실전
              역량을 기르기 위해 구성되었습니다. 단순히 예쁘게 만드는 것을 넘어,
              사용자 흐름을 고려한 설계와 퍼포먼스를 고려한 스타일링까지 폭넓게
              다룹니다.
            </p>

            <h3 className='mt-6'>이 강의는 이런 분들을 위해 준비했습니다</h3>
            <ul>
              <li>웹사이트를 구조적으로 설계하고 싶은 디자이너/개발자</li>
              <li>감각적인 UI를 만들고 싶지만 CSS의 한계를 느낀 분</li>
              <li>
                반응형, 다크모드, 인터랙션 등을 실무 수준으로 구현하고 싶은 분
              </li>
              <li>
                Figma → HTML/CSS 구현의 전환 과정을 익히고 싶은 실무 준비생
              </li>
              <li>팀 프로젝트에서 디자인 시스템을 구축하고 싶은 개발자</li>
            </ul>

            <h3 className='mt-6'>강의 특징</h3>
            <ul>
              <li>UX 원칙을 적용한 UI 설계 및 컴포넌트 중심 사고방식</li>
              <li>
                실전 중심의 모던 CSS: Flex/Grid, 변수, 다크모드, 애니메이션 등
              </li>
              <li>디자인 시스템 구축: 색상, 타이포그래피, 여백, 반응형 전략</li>
              <li>Figma 연동 & 퍼블리싱: 디자인 → 코드로의 효율적 전환</li>
              <li>Tailwind CSS 활용을 통해 빠르고 일관된 UI 제작</li>
              <li>
                웹 접근성(WA) 고려 및 실제 사용자 테스트 기반 개선 방법 소개
              </li>
            </ul>

            <h3 className='mt-6'>강사 소개</h3>
            <p>
              웹 디자인과 프론트엔드 개발을 모두 경험한 실무 중심의 강사가 본
              강의를 설계하였습니다. 단순한 CSS 강의가 아닌, UX 전략과 UI
              아키텍처를 함께 고민하며 설계한 콘텐츠로, 실무에 바로 적용할 수
              있는 디자인 패턴과 코드 작성 전략을 학습할 수 있습니다.
            </p>

            <h3 className='mt-6'>지금 시작하세요</h3>
            <p>
              사용자와 소통하는 화면을 만들고 싶은가요? 감각적인 디자인 +
              구조적인 구현, 그 균형을 이 강의에서 경험하세요. 웹 UI/UX의 기본과
              실무 구현 능력을 모두 갖춘 당신을 위한 강의입니다.
            </p>

            <Link
              href='/lecture'
              className='w-full flex items-center justify-center gap-2 p-2 mt-8 rounded font-bold text-sm bg-amber-100'
            >
              <TvMinimalPlay />
              아직 준비중입니다.
            </Link>
          </div>
        </TabsContent>
        <TabsContent value='tab-2'>
          <div className='page__title'>
            <h2>인터랙티브한 애니메이션을 만들고 싶다면?</h2>
            <p>
              GSAP Interactive Animation 강의는 GreenSock Animation
              Platform(GSAP)을 활용하여 웹사이트에 생동감 있는 인터랙션과
              애니메이션을 적용하는 방법을 학습합니다. 단순한 움직임을 넘어
              사용자의 행동에 반응하고 몰입감을 주는 동적인 UI를 구현하는 데
              초점을 둡니다.
            </p>

            <h3 className='mt-6'>이 강의는 이런 분들을 위해 준비했습니다</h3>
            <ul>
              <li>
                단순한 CSS 애니메이션에 한계를 느끼고 있는 웹 디자이너 및
                퍼블리셔
              </li>
              <li>
                사용자 경험을 끌어올릴 수 있는 인터랙티브 애니메이션을 구현하고
                싶은 개발자
              </li>
              <li>
                ScrollTrigger, Timeline 등 GSAP 핵심 기능을 제대로 익히고 싶은
                분
              </li>
              <li>
                브랜드/마케팅 사이트와 같은 몰입형 웹을 제작하고 싶은 실무자
              </li>
              <li>
                다양한 디바이스 환경에서도 안정적으로 동작하는 애니메이션을
                만들고 싶은 분
              </li>
            </ul>

            <h3 className='mt-6'>강의 특징</h3>
            <ul>
              <li>
                GSAP Core부터 ScrollTrigger, MotionPath 등 고급 기능까지 단계별
                학습
              </li>
              <li>
                이벤트 기반 인터랙션과 애니메이션 타이밍 제어 기법 집중 훈련
              </li>
              <li>
                Scroll, Mouse, Hover 등 사용자 입력에 반응하는 인터페이스 제작
              </li>
              <li>
                실무에서 바로 사용할 수 있는 컴포넌트 기반 애니메이션 설계
              </li>
              <li>
                React, Next.js 프로젝트에 GSAP을 효과적으로 통합하는 방법 안내
              </li>
              <li>모던 웹 트렌드에 맞춘 인터랙션 디자인 감각 향상</li>
            </ul>

            <h3 className='mt-6'>강사 소개</h3>
            <p>
              다양한 기업형 랜딩 페이지, 인터랙티브 포트폴리오 제작 경험을 가진
              강사가 GSAP의 핵심 기술과 실전 노하우를 전달합니다. 애니메이션을
              단순한 시각 효과가 아닌, 설계와 목적이 담긴 UI로 구현하는 방법을
              중심으로 커리큘럼이 구성되어 있습니다.
            </p>

            <h3 className='mt-6'>지금 시작하세요</h3>
            <p>
              단순히 예쁘게 보이는 웹을 넘어서, 사용자를 사로잡는 인터랙션을
              구현하고 싶다면 지금 GSAP Interactive Animation 강의로 새로운 웹
              경험을 만들어보세요.
            </p>

            <Link
              href='/lecture'
              className='w-full flex items-center justify-center gap-2 p-2 mt-8 rounded font-bold text-sm bg-amber-100'
            >
              <TvMinimalPlay />
              아직 준비중입니다.
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
