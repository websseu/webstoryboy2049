import { Data } from './types'

const data: Data = {
  menuData: [
    {
      label: 'Lecture',
      card: {
        title: '강의',
        description: '체계적으로 배우는 강의 커리큘럼 처음 코딩을 한다면',
        iconCount: 1,
        icon: 'BookMarked',
        href: '/lecture',
        buttonText: 'Learn',
      },
      items: [
        {
          title: '웹디자인개발기능사',
          description: '코딩이 처음이라면! 이것부터 따자!',
          href: '/lecture/webdesign2025',
        },
        {
          title: 'GSAP 패럴랙스 이펙트',
          description: 'GSAP으로 인터랙티브 웹을 만들려면?',
          href: '/lecture/gsap-parallax-effect',
        },
      ],
    },
    {
      label: 'Tutorial',
      card: {
        title: '튜토리얼',
        description: '따라하면 실력이 는다. 재미와 함께 배우는 코딩',
        iconCount: 2,
        icon: 'BookUser',
        href: '/tutorial',
        buttonText: 'Learn',
      },
      items: [
        {
          title: 'CSS Animation',
          description: 'CSS를 활용한 UI/UX 애니메이션',
          href: '/tutorial/css-animation',
        },
        {
          title: 'GSAP Animation',
          description: '웹 애니메이션과 인터랙티브 UI 개발',
          href: '/tutorial/gsap-animation',
        },
      ],
    },
    {
      label: 'Reference',
      card: {
        title: '레퍼런스',
        description: '기본적인 개념을 배우는 곳. 기본은 여기서 익히자!',
        iconCount: 3,
        icon: 'PencilRuler',
        href: '/reference',
        buttonText: 'Learn',
      },
      items: [
        {
          title: 'HTML',
          description: 'HTML의 기본 개념을 익힙니다.',
          href: '/reference/html',
        },
        {
          title: 'CSS',
          description: 'CSS의 기본 개념을 익힙니다.',
          href: '/reference/css',
        },
        {
          title: 'JAVASCRIPT',
          description: 'JAVASCRIPT의 기본 개념을 익힙니다.',
          href: '/reference/javascript',
        },
      ],
    },
    {
      label: 'Inspiration',
      card: {
        title: '인스퍼레이션',
        description: '코딩과 관련된 인스퍼레이션은 여기서 확인하자!',
        iconCount: 4,
        icon: 'Sparkles',
        href: '/inspiration',
        buttonText: 'Explore',
      },
      items: [
        {
          title: 'SITE 인스퍼레이션',
          description: '웹사이트 디자인 사례 모음.',
          href: '/inspiration/site',
        },
        {
          title: 'TUTORIAL 인스퍼레이션',
          description: '다양한 웹 개발 학습 자료.',
          href: '/inspiration/tutorial',
        },
      ],
    },
  ],
}

export default data
