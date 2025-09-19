'use client'

import * as React from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { format, parseISO } from 'date-fns'
import { useRouter } from 'next/navigation'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface MusicCalendarProps {
  country: string
  date: string
}

export default function MusicCalendar({ country, date }: MusicCalendarProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    date ? parseISO(date) : undefined
  )

  const handleSelect = (d: Date | undefined) => {
    if (!d) return
    setSelectedDate(d)
    setOpen(false)
    const formatted = format(d, 'yyyy-MM-dd')
    router.push(`/youtube/${country}?date=${formatted}`)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          id='date'
          className='w-56 h-9 text-muted-foreground text-[14px] justify-between font-normal'
        >
          {selectedDate
            ? format(selectedDate, 'yyyy년 MM월 dd일 (EEE)')
            : '날짜를 선택하세요'}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
        <Calendar
          mode='single'
          selected={selectedDate}
          captionLayout='dropdown'
          onSelect={handleSelect}
        />
      </PopoverContent>
    </Popover>
  )
}
