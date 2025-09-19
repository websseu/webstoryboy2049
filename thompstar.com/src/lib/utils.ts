import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 인증번호 생성
export function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// 날짜 생성 2024.04.03 03:11
export function formatDateTime(dateInput: Date | string): string {
  const d = new Date(dateInput)
  const yyyy = d.getFullYear()
  const MM = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  return `${yyyy}.${MM}.${dd} ${hh}:${mm}`
}

// 날짜 생성
export function getDayFormatted(date: Date = new Date()): string {
  const previousDay = new Date(date)
  previousDay.setDate(date.getDate() - 1)

  const year = previousDay.getFullYear()
  const month = String(previousDay.getMonth() + 1).padStart(2, '0')
  const day = String(previousDay.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

// 심플한 순위 변동 계산 함수
export function getSimpleRankChange(item: { ranking: string; prev: string }): {
  label: string
  color: string
} {
  if (!item.prev || item.prev === '-' || item.prev === '')
    return { label: 'NEW', color: 'text-blue-500' }
  const prev = parseInt(item.prev, 10)
  const now = parseInt(item.ranking, 10)
  if (isNaN(prev) || isNaN(now)) return { label: '-', color: 'text-gray-400' }
  const diff = prev - now
  if (diff > 0) return { label: `+${diff}`, color: 'text-green-500' }
  if (diff < 0) return { label: `${diff}`, color: 'text-red-500' }
  return { label: '-', color: 'text-gray-400' }
}
