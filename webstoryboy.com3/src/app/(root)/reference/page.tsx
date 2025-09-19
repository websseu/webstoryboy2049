import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TvMinimalPlay } from 'lucide-react'
import Footer from '@/components/footer'

export default function ReferencePage() {
  return (
    <>
      <section className='main__container'>
        <div className='page__title'>
          <h1>Reference</h1>
        </div>
        <div>
          <Tabs defaultValue='tab-1'>
            <TabsList className='grid mx-auto grid-cols-3 mb-4'>
              <TabsTrigger value='tab-1'>HTML</TabsTrigger>
              <TabsTrigger value='tab-2'>CSS</TabsTrigger>
              <TabsTrigger value='tab-3'>JAVASCRIPT</TabsTrigger>
            </TabsList>
            <TabsContent value='tab-1'>
              <div className='intro__title'>
                <h2>HTML을 잘 배우면 웹이 쉬워진다</h2>
                <p>
                  HTML은 모든 웹 페이지의 구조를 만드는 핵심 언어입니다. 이 강의는 웹 개발의 기초를
                  다지고 싶은 입문자를 위해 설계되었으며, 시맨틱 태그부터 접근성, 구조 설계까지 실제
                  웹페이지를 구성하는 데 필요한 핵심 내용을 다룹니다. 단순히 태그를 나열하는 수업이
                  아니라, HTML을 어떻게 효율적으로 쓰고 실무에서 어떻게 활용하는지를 중심으로
                  학습합니다.
                </p>

                <h3 className='mt-6'>이 강의는 이런 분들을 위해 준비했습니다</h3>
                <ul>
                  <li>HTML이 처음이지만 웹 제작에 도전해보고 싶은 입문자</li>
                  <li>비전공자지만 웹 프론트엔드 분야에 입문하려는 예비 개발자</li>
                  <li>마크업 구조와 시맨틱 태그의 의미를 제대로 이해하고 싶은 학습자</li>
                  <li>디자인 시안을 실제 HTML 코드로 구현해보고 싶은 디자이너</li>
                  <li>웹 표준과 웹 접근성까지 고려한 마크업을 작성하고 싶은 실무 준비생</li>
                </ul>

                <h3 className='mt-6'>강의 특징</h3>
                <ul>
                  <li>HTML5 표준에 기반한 태그 설명과 실습 중심 구성</li>
                  <li>웹페이지의 구조 설계와 시맨틱 마크업에 대한 명확한 이해</li>
                  <li>실제 디자인 시안(Figma 등)을 기반으로 한 구조 구현 예제</li>
                  <li>레이아웃 구성에 필요한 구조적 마크업 패턴 학습</li>
                  <li>웹 접근성을 높이기 위한 aria 속성, landmark 태그 설명 포함</li>
                  <li>CSS와 연계되는 마크업 전략까지 실무 관점으로 확장 학습</li>
                </ul>

                <h3 className='mt-6'>강사 소개</h3>
                <p>
                  웹 퍼블리싱과 프론트엔드 분야에서 다양한 프로젝트를 진행해온 강사가 직접 콘텐츠를
                  구성했습니다. 처음 HTML을 배우는 입문자의 관점에서 시작해, 실무에 필요한 구조
                  설계와 문서 작성 방식까지 연결하는 실전 중심 강의입니다.
                </p>

                <h3 className='mt-6'>지금 시작하세요</h3>
                <p>
                  HTML을 제대로 배워야 CSS도, 자바스크립트도 쉽게 따라올 수 있습니다. 기초부터
                  튼튼하게, 실무에 강한 마크업 실력을 지금 이 강의에서 시작해보세요.
                </p>

                <Link
                  href='/reference/html'
                  className='w-full flex items-center justify-center gap-2 p-2 mt-8 rounded font-bold text-sm bg-amber-100'
                >
                  <TvMinimalPlay />
                  아직 준비중입니다.
                </Link>
              </div>
            </TabsContent>
            <TabsContent value='tab-2'>
              <div className='intro__title'>
                <h2>스타일은 웹 디자인의 언어입니다.</h2>
                <p>
                  CSS는 HTML로 구성한 웹 구조에 스타일을 입히고 사용자 경험을 시각적으로 완성하는
                  기술입니다. 이 강의는 단순한 스타일링을 넘어서, 일관성 있고 유지보수 가능한 CSS
                  설계를 목표로 합니다. 다양한 속성과 레이아웃 기법은 물론, 반응형 디자인과 모던 UI
                  구현까지 폭넓게 학습할 수 있습니다.
                </p>

                <h3 className='mt-6'>이 강의는 이런 분들을 위해 준비했습니다</h3>
                <ul>
                  <li>웹페이지를 직접 디자인하고 구현해보고 싶은 입문자</li>
                  <li>CSS의 개념은 알지만 정돈된 레이아웃 구성에 어려움을 느끼는 학습자</li>
                  <li>Flex, Grid, Position 등 레이아웃 핵심 개념을 확실히 잡고 싶은 분</li>
                  <li>브라우저 호환성과 반응형 대응을 실무처럼 해보고 싶은 퍼블리셔</li>
                  <li>
                    Tailwind나 Sass 같은 도구 사용 전에 CSS 기본기를 탄탄히 다지고 싶은 개발자
                  </li>
                </ul>

                <h3 className='mt-6'>강의 특징</h3>
                <ul>
                  <li>CSS 핵심 속성부터 실제 웹 구성에 바로 적용 가능한 예제 기반 설명</li>
                  <li>레이아웃 중심의 실습: Flexbox, CSS Grid, Position, Display 흐름 정리</li>
                  <li>반응형 웹 구현을 위한 미디어 쿼리 사용법과 실전 대응 전략</li>
                  <li>모던 웹 UI 구성 요소: 카드, 버튼, 네비게이션, 모달 등 실습 중심 학습</li>
                  <li>재사용 가능한 스타일 설계를 위한 변수, 커스텀 속성 구조 학습</li>
                  <li>디자인 시스템에 맞춘 색상, 여백, 타이포그래피 정리 방식 소개</li>
                </ul>

                <h3 className='mt-6'>강사 소개</h3>
                <p>
                  다년간 다양한 웹 프로젝트에서 퍼블리싱과 프론트엔드를 동시에 경험해온 강사가 직접
                  콘텐츠를 설계했습니다. 단순한 속성 나열이 아닌, 구조 중심의 사고방식과 실전 UI
                  구현 능력을 키울 수 있도록 실습 위주로 구성되어 있습니다.
                </p>

                <h3 className='mt-6'>지금 시작하세요</h3>
                <p>
                  CSS를 제대로 이해하면, 어떤 프레임워크든 쉽게 다룰 수 있습니다. 웹 디자인의
                  기본기를 정립하고, 구조적이고 아름다운 웹을 만들 준비가 되었다면 지금 이 강의로
                  시작해보세요.
                </p>

                <Link
                  href='/reference/css'
                  className='w-full flex items-center justify-center gap-2 p-2 mt-8 rounded font-bold text-sm bg-amber-100'
                >
                  <TvMinimalPlay />
                  아직 준비중입니다.
                </Link>
              </div>
            </TabsContent>
            <TabsContent value='tab-3'>
              <div className='intro__title'>
                <h2>자바스크립트는 웹의 움직임을 완성하는 핵심입니다</h2>
                <p>
                  JavaScript는 정적인 웹페이지를 동적으로 만들고, 사용자와 상호작용할 수 있는 기능을
                  구현하는 핵심 언어입니다. 이 강의는 기초 문법부터 실무에 필요한 로직 구성, 이벤트
                  처리, DOM 제어까지 전반적인 흐름을 단계별로 익힐 수 있도록 구성되어 있습니다.
                  단순히 따라 쓰는 예제가 아니라, 직접 문제를 해결하고 구조를 설계할 수 있는
                  사고력을 키우는 데 초점을 맞췄습니다.
                </p>

                <h3 className='mt-6'>이 강의는 이런 분들을 위해 준비했습니다</h3>
                <ul>
                  <li>웹 개발을 처음 시작하며 JavaScript 기초를 탄탄히 다지고 싶은 입문자</li>
                  <li>기능은 구현되지만 코드 구조나 변수 사용에 자신이 없는 퍼블리셔</li>
                  <li>이벤트, 조건문, 반복문, 함수의 흐름을 실전 예제로 익히고 싶은 학습자</li>
                  <li>DOM 조작과 웹 인터랙션 구현 방법을 알고 싶은 실무 준비생</li>
                  <li>
                    React, Vue 같은 프레임워크에 들어가기 전 JavaScript 기반을 정리하고 싶은 개발자
                  </li>
                </ul>

                <h3 className='mt-6'>강의 특징</h3>
                <ul>
                  <li>JavaScript의 핵심 문법을 실제 웹 예제에 적용해보는 방식으로 구성</li>
                  <li>
                    이벤트 처리, 조건문, 반복문, 함수 등 프로그래밍 기본 개념을 체계적으로 학습
                  </li>
                  <li>실시간 사용자 입력 처리와 인터랙션 중심의 기능 구현 연습</li>
                  <li>DOM을 직접 조작하여 웹 요소의 동작을 제어하고 반응하는 방식 익히기</li>
                  <li>배열, 객체, 메서드 등 자료구조의 개념과 활용법을 실습 중심으로 학습</li>
                  <li>실무 프로젝트에서 자주 쓰이는 유틸리티 함수와 코드 패턴 익히기</li>
                </ul>

                <h3 className='mt-6'>강사 소개</h3>
                <p>
                  JavaScript로 수많은 인터랙티브 웹사이트를 제작한 경험을 가진 강사가 직접
                  커리큘럼을 구성했습니다. 단순한 문법 강의가 아닌, 사용자의 흐름을 고려한 기능 설계
                  방식과 코드 작성 습관까지 함께 배울 수 있는 실전형 강의입니다.
                </p>

                <h3 className='mt-6'>지금 시작하세요</h3>
                <p>
                  JavaScript는 웹 개발의 중심입니다. 기초 문법부터 사용자와 소통하는 기능 구현까지,
                  단계적으로 익히며 개발자로 성장할 수 있는 기반을 지금 이 강의에서 시작해보세요.
                </p>

                <Link
                  href='/reference/javascript'
                  className='w-full flex items-center justify-center gap-2 p-2 mt-8 rounded font-bold text-sm bg-amber-100'
                >
                  <TvMinimalPlay />
                  아직 준비중입니다.
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Footer />
    </>
  )
}
