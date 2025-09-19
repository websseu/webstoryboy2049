import { cache } from 'react'
import { MusicData } from './type'

export const fetchYoutubeData = cache(
  async (country: string, date: string): Promise<MusicData[]> => {
    try {
      const url = `https://websseu.github.io/thompdata/youtube/${country}/${country}Top100_${date}.json`

      const response = await fetch(url, {
        next: {
          revalidate: 3600, // 1시간마다 재검증
        },
      })

      if (!response.ok) {
        throw new Error(`차트 데이터를 가져오지 못했습니다: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('차트 데이터 에러 발생:', error)
      return []
    }
  }
)
