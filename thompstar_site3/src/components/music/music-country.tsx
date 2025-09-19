'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { youtubeCountry } from '@/lib/menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface MusicCountryProps {
  country: string
}

export default function MusicCountry({ country }: MusicCountryProps) {
  const router = useRouter()

  return (
    <Select
      value={country}
      onValueChange={(value) => router.push(`/youtube/${value}`)}
    >
      <SelectTrigger className='w-[220px] mb-4 text-muted-foreground'>
        <SelectValue placeholder='국가를 선택하세요' />
      </SelectTrigger>
      <SelectContent>
        {youtubeCountry.map((country, idx) => (
          <SelectItem key={`${country.name}-${idx}`} value={country.name}>
            <span>{country.icon}</span>
            {country.nameKorean}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
