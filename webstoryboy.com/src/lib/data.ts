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
          title: '자바스크립트 VS 타입스크립트',
          description: '자바스크립트와 타입스트립트를 동시에 공부합니다.',
          href: '/lecture/javascript-typescript',
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
          title: 'UI/UX CSS Design',
          description: 'CSS와 GSAP을 활용한 UI/UX 디자인 강의',
          href: '/tutorial/uiux-design',
        },
        {
          title: 'GSAP Interactive Animation',
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
