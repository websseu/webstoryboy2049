export interface Notice {
  id: number
  title: string
  date: string
  description: string
}

export const notices: Notice[] = [
  {
    id: 1,
    title: '[안내] 글로벌챠트 999 사이트 소개',
    date: '2025.07.15',
    description:
      '글로벌챠트 999는 전 세계 음악 트렌드를 한눈에 확인할 수 있는 종합 음악 차트 플랫폼입니다. K-pop, 팝, 힙합, 라틴 등 다양한 장르의 인기 순위를 실시간으로 제공합니다. 음악 팬이라면 절대 놓칠 수 없는 필수 차트 사이트!',
  },
  {
    id: 2,
    title: '[이벤트] 첫 방문자 대상 플레이리스트 증정',
    date: '2025.07.15',
    description:
      '글로벌챠트 999 오픈 기념! 지금 가입하면 최신 차트 상위곡을 모은 스페셜 플레이리스트를 무료로 드립니다. 당신의 음악 라이프를 더 풍성하게 만들어보세요 🎧',
  },
  {
    id: 3,
    title: '[업데이트] 2025년 7월 3주차 차트 반영',
    date: '2025.07.15',
    description:
      '2025년 7월 3주차 전 세계 음악 차트가 업데이트되었습니다. BTS, Billie Eilish, NewJeans, Drake 등 글로벌 아티스트의 새로운 순위를 지금 바로 확인하세요!',
  },
]
