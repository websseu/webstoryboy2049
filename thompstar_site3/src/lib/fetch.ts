import 'server-only'
import { cache } from 'react'
import { MusicData } from './type'

export const fetchWorldData = cache(
  async (
    worldService: string,
    country: string,
    date: string
  ): Promise<MusicData[]> => {
    try {
      const url = `https://websseu.github.io/thompdata/${worldService}/${country}/${country}Top100_${date}.json`

      const response = await fetch(url, {
        next: {
          revalidate: 3600, // 1시간마다 재검증
        },
      })

      if (!response.ok) {
        throw new Error(`차트 데이터를 가져오지 못했습니다: ${response.status}`)
      }

      const data = await response.json()
      return data || []
    } catch (error) {
      console.error('차트 데이터 에러 발생:', error)
      return []
    }
  }
)

// 데이터 프리로딩 함수
export const preloadWorldData = (
  worldService: string,
  country: string,
  date: string
) => {
  void fetchWorldData(worldService, country, date)
}
