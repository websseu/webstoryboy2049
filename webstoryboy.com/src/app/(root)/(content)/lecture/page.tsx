import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TvMinimalPlay } from 'lucide-react'

export default async function LecturePage() {
  return (
    <section>
      <h1 className='title'>Lecture</h1>
      <div>
        <Tabs defaultValue='tab-1'>
          <TabsList className='grid mx-auto grid-cols-2 mb-4'>
            <TabsTrigger value='tab-1'>웹디자인개발기능사</TabsTrigger>
            <TabsTrigger value='tab-2'>타입스크립트</TabsTrigger>
          </TabsList>
          <TabsContent value='tab-1'>
            <div className='page__title'>
              <h2>한번에 자격증 취득하려면?</h2>
              <p>
                웹디자인개발기능사 2025는 최신 웹 트렌드와 국가기술자격 출제
                기준을 기반으로 설계된 시험으로, 실무 중심의 웹 디자인 역량을
                검증하는 중요한 자격입니다. 본 강의는 입문자부터 실무 경험자까지
                모두가 효과적으로 학습할 수 있도록 구성되었으며,{' '}
                <em>HTML, CSS, jQuery JavaScript</em> 등의 핵심 기술을 포함해
                실기 시험에 필요한 레이아웃 구성, 반응형 UI/UX 설계, 웹 접근성
                고려 등 실무에 바로 적용 가능한 내용을 체계적으로 다룹니다.
              </p>

              <h3>이 강의는 이런 분들을 위해 준비했습니다</h3>
              <ul>
                <li>
                  최신 기준에 맞춘 웹디자인개발기능사 2025 시험을 준비하는
                  수험생
                </li>
                <li>
                  실전 감각을 갖춘 퍼블리싱 및 프론트엔드 기초를 배우고 싶은 웹
                  입문자
                </li>
                <li>
                  출제 유형 분석 및 문제 풀이를 통해 합격 전략을 세우고 싶은
                  학습자
                </li>
                <li>
                  HTML/CSS 기반 구조 설계에 자신감을 갖고 싶은 실무 준비생
                </li>
                <li>
                  포트폴리오에 활용 가능한 완성도 높은 웹 디자인 예제를 경험하고
                  싶은 분
                </li>
              </ul>

              <h3>강의 특징</h3>
              <ul>
                <li>2025년 최신 출제 기준 및 유형 완벽 반영</li>
                <li>
                  실기 시험의 모든 문제 유형(A/B/C/D/E/E 유형)을 실습 중심으로
                  정리
                </li>
                <li>
                  시험 직결 웹 페이지 레이아웃 제작 기법과 실무 기술 병행 학습
                </li>
                <li>
                  웹디자인 실무에 유용한 반응형, UI/UX 설계, 접근성 고려 내용
                  포함
                </li>
                <li>
                  학습자의 이해를 돕기 위한 요약 정리 자료 및 실전 노트 제공
                </li>
                <li>
                  비전공자도 이해 가능한 설명으로 기초부터 심화까지 단계별 학습
                  가능
                </li>
              </ul>

              <h3>강사 소개</h3>
              <p>
                본 강의는 10년 이상 웹디자인 및 프론트엔드 분야에서 현업을
                경험한 전문가 가 직접 기획하고 진행합니다. 다양한 프로젝트
                수행과 교육 경험을 바탕으로, 시험에 꼭 나오는 핵심 개념과
                실무에서 바로 적용할 수 있는 노하우를 집약하였습니다. 수많은
                수강생들의 합격과 실력 향상을 이끌어온 신뢰도 높은 강의입니다.
              </p>

              <h3>지금 시작하세요</h3>
              <p>
                단순한 자격증 취득을 넘어 실무에 활용 가능한 역량 강화까지.
                웹디자인기능사 2025의 합격은 물론, 자신만의 웹 포트폴리오까지
                함께 완성해보세요. 지금 바로 시작하면, 더 빠르게 성장할 수
                있습니다!
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
            <div className='page__title'>
              <h2>스크립트를 잘 이해하려면?</h2>
              <p>
                자바스크립트(JavaScript)와 타입스크립트(TypeScript)는 현대 웹
                개발에서 중요한 역할을 하는 언어입니다. 본 강의는 두 언어의
                차이를 명확하게 이해하고, 상황에 맞게 적절히 활용할 수 있도록
                구성되었습니다. 자바스크립트의 유연함과 타입스크립트의 안정성을
                실무 프로젝트 중심으로 비교하며 실제 적용 방법을 배웁니다.
              </p>

              <h3 className='mt-6'>이 강의는 이런 분들을 위해 준비했습니다</h3>
              <ul>
                <li>
                  자바스크립트로 기본기를 다졌지만 타입스크립트 전환이 어려운
                  개발자
                </li>
                <li>JS와 TS의 차이를 실무 예제로 익히고 싶은 웹 개발자</li>
                <li>유지보수성과 안정성이 중요한 팀 프로젝트를 준비 중인 분</li>
                <li>
                  타입 시스템을 도입해 코드의 오류 가능성을 줄이고 싶은 실무자
                </li>
              </ul>

              <h3 className='mt-6'>강의 특징</h3>
              <ul>
                <li>
                  자바스크립트와 타입스크립트의 핵심 개념을 나란히 비교하여
                  빠르게 이해
                </li>
                <li>
                  동적 타입과 정적 타입의 특성을 실전 시나리오를 통해 설명
                </li>
                <li>
                  기존 자바스크립트 코드를 타입스크립트로 변환하는 마이그레이션
                  실습
                </li>
                <li>
                  타입 추론, 유니온 타입, 인터섹션 타입, 제네릭 등 실무에서 자주
                  쓰는 개념 학습
                </li>
                <li>
                  코드 자동완성, 리팩토링 등 타입스크립트의 생산성 향상 효과를
                  직접 체험
                </li>
                <li>실제 프로젝트 기반으로 JS와 TS의 차이를 비교하고 적용</li>
              </ul>

              <h3 className='mt-6'>강사 소개</h3>
              <p>
                다수의 프론트엔드 프로젝트와 협업 경험을 가진 강사가 직접
                커리큘럼을 설계했습니다. 자바스크립트의 유연함을 기반으로
                타입스크립트를 자연스럽게 익힐 수 있도록 구성되어 있으며, 코드
                품질과 협업 효율을 함께 높일 수 있는 실용적인 노하우를
                공유합니다.
              </p>

              <h3 className='mt-6'>지금 시작하세요</h3>
              <p>
                동적인 개발의 자유로움과 정적인 타입 안정성을 모두 갖춘 개발자가
                되고 싶다면, 이 강의를 통해 현대 프론트엔드 개발의 기준을 나만의
                것으로 만들어보세요.
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
      </div>
    </section>
  )
}
