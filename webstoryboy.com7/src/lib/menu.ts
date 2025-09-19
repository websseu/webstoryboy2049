export type NavItem = {
  title: string
  description: string
  href: string
  featured?: boolean
}

export type Section = {
  trigger: string
  items: NavItem[]
}

export const nav: Section[] = [
  {
    trigger: 'Lecture',
    items: [
      {
        title: '강의',
        description: '체계적으로 배우는 강의 커리큘럼 처음 코딩을 한다면..',
        href: '/lecture',
        featured: true,
      },
      {
        title: '웹디자인개발기능사',
        description: '코딩이 처음이라면! 이것부터 따자!',
        href: '/lecture/web-design-2025',
      },
      {
        title: 'GSAP 패럴랙스 이펙트',
        description: '인터랙티브한 웹을 만들고 싶다면 이것부터!!!',
        href: '/lecture/gsap-parallax-effect',
      },
    ],
  },
  {
    trigger: 'Tutorial',
    items: [
      {
        title: '튜토리얼',
        description: '따라하면 실력이 는다. 재미와 함께 배우는 코딩!!',
        href: '/tutorial',
        featured: true,
      },
      {
        title: 'CSS Animation',
        description: 'CSS를 활용한 UI/UX 애니메이션을 배웁니다.',
        href: '/tutorial/css-animation',
      },
      {
        title: 'GSAP Animation',
        description: '웹 애니메이션과 인터랙티브 UI 개발을 배웁니다.',
        href: '/tutorial/gsap-animation',
      },
    ],
  },
  {
    trigger: 'Reference',
    items: [
      {
        title: '레퍼런스',
        description: '기본적인 개념을 배우는 곳. 기본은 여기서 익히자!',
        href: '/reference',
        featured: true,
      },
      {
        title: 'HTML 사전',
        description: 'HTML의 모든 태그 속성을 보여줍니다.',
        href: '/reference/html-dictionary',
      },
      {
        title: 'CSS 사전',
        description: 'CSS의 모든 속성을 보여줍니다.',
        href: '/reference/css-dictionary',
      },
      {
        title: 'JAVASCRIPT 사전',
        description: 'JAVASCRIPT의 모든 메서드를 보여줍니다.',
        href: '/reference/javascript-dictionary',
      },
    ],
  },
  {
    trigger: 'Inspiration',
    items: [
      {
        title: '인스퍼레이션',
        description: '코딩과 관련된 영감들!! 여기오면 확인 할 수 있습니다.',
        href: '/inspiration',
        featured: true,
      },
      {
        title: 'Codrops 인스퍼레이션',
        description: '코딩 튜토리얼 사이트의 최강자! 코드롭의 데이터를 봅니다.',
        href: '/inspiration/codrops',
      },
      {
        title: 'Awwwards 인스퍼레이션',
        description: '어워드 사이트가 선정한 최신 웹 사이트의 기술을 둘러봅니다.',
        href: '/inspiration/awwwards',
      },
    ],
  },
]
