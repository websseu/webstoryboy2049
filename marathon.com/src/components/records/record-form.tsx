/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import type React from 'react'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Calendar, Target, Clock, MapPin, Cloud, Star, Zap, Save, ArrowLeft } from 'lucide-react'
import { createRunningRecord, updateRunningRecord } from '@/lib/actions/running-record.action'
import { toast } from 'sonner'
import Link from 'next/link'

interface RunningRecordFormProps {
  userId: string
  initialData?: {
    _id?: string
    title: string
    date: string
    targetDistance: number
    actualDistance?: number
    targetTime?: string
    actualTime: string
    notes?: string
    weather?: string
    location?: string
    difficulty: number
    feeling: number
  }
  isEdit?: boolean
}

export default function RunningRecordForm({
  userId,
  initialData,
  isEdit = false,
}: RunningRecordFormProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    date: initialData?.date
      ? new Date(initialData.date).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0],
    targetDistance: initialData?.targetDistance || 5,
    actualDistance: initialData?.actualDistance || undefined,
    targetTime: initialData?.targetTime || '',
    actualTime: initialData?.actualTime || '',
    notes: initialData?.notes || '',
    weather: initialData?.weather || '',
    location: initialData?.location || '',
    difficulty: initialData?.difficulty || 3,
    feeling: initialData?.feeling || 3,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title.trim()) {
      toast.error('제목을 입력해주세요.')
      return
    }

    if (!formData.actualTime) {
      toast.error('실제 시간을 입력해주세요.')
      return
    }

    startTransition(async () => {
      const result =
        isEdit && initialData?._id
          ? await updateRunningRecord(initialData._id, userId, formData)
          : await createRunningRecord(userId, formData)

      if (result.success) {
        toast.success(result.message)
        router.push('/records')
      } else {
        toast.error(result.error || '기록 저장에 실패했습니다.')
      }
    })
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const weatherOptions = [
    { value: 'none', label: '선택 안함' },
    { value: '맑음', label: '☀️ 맑음' },
    { value: '흐림', label: '☁️ 흐림' },
    { value: '비', label: '🌧️ 비' },
    { value: '눈', label: '❄️ 눈' },
    { value: '바람', label: '💨 바람' },
    { value: '더움', label: '🔥 더움' },
    { value: '추움', label: '🧊 추움' },
  ]

  const difficultyLabels = {
    1: '매우 쉬움',
    2: '쉬움',
    3: '보통',
    4: '어려움',
    5: '매우 어려움',
  }

  const feelingEmojis = {
    1: '😫',
    2: '😕',
    3: '😐',
    4: '😊',
    5: '🤩',
  }

  return (
    <Card>
      <CardHeader>
        <div className='flex items-center gap-4'>
          <Button variant='ghost' size='sm' asChild>
            <Link href='/records'>
              <ArrowLeft className='h-4 w-4 mr-2' />
              돌아가기
            </Link>
          </Button>
          <CardTitle>{isEdit ? '기록 수정' : '새 기록 작성'}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* 제목 */}
          <div className='space-y-2'>
            <Label htmlFor='title' className='flex items-center gap-2'>
              <Star className='h-4 w-4' />
              제목
            </Label>
            <Input
              id='title'
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder='예: 아침 조깅, 한강 달리기'
              maxLength={100}
              required
            />
          </div>

          {/* 날짜 */}
          <div className='space-y-2'>
            <Label htmlFor='date' className='flex items-center gap-2'>
              <Calendar className='h-4 w-4' />
              날짜
            </Label>
            <Input
              id='date'
              type='date'
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              required
            />
          </div>

          {/* 거리 */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='targetDistance' className='flex items-center gap-2'>
                <Target className='h-4 w-4' />
                목표 거리 (km)
              </Label>
              <Input
                id='targetDistance'
                type='number'
                step='0.1'
                min='0.1'
                max='200'
                value={formData.targetDistance}
                onChange={(e) =>
                  handleInputChange('targetDistance', Number.parseFloat(e.target.value))
                }
                required
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='actualDistance'>실제 거리 (km) - 선택사항</Label>
              <Input
                id='actualDistance'
                type='number'
                step='0.1'
                min='0.1'
                max='200'
                value={formData.actualDistance || ''}
                onChange={(e) =>
                  handleInputChange(
                    'actualDistance',
                    e.target.value ? Number.parseFloat(e.target.value) : undefined
                  )
                }
                placeholder='실제 달린 거리'
              />
            </div>
          </div>

          {/* 시간 */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='targetTime'>목표 시간 (HH:MM:SS) - 선택사항</Label>
              <Input
                id='targetTime'
                type='time'
                step='1'
                value={formData.targetTime}
                onChange={(e) => handleInputChange('targetTime', e.target.value)}
                placeholder='00:30:00'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='actualTime' className='flex items-center gap-2'>
                <Clock className='h-4 w-4' />
                실제 시간 (HH:MM:SS)
              </Label>
              <Input
                id='actualTime'
                type='time'
                step='1'
                value={formData.actualTime}
                onChange={(e) => handleInputChange('actualTime', e.target.value)}
                required
              />
            </div>
          </div>

          {/* 장소와 날씨 */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='location' className='flex items-center gap-2'>
                <MapPin className='h-4 w-4' />
                장소 - 선택사항
              </Label>
              <Input
                id='location'
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder='예: 한강공원, 올림픽공원'
                maxLength={100}
              />
            </div>
            <div className='space-y-2'>
              <Label className='flex items-center gap-2'>
                <Cloud className='h-4 w-4' />
                날씨 - 선택사항
              </Label>
              <Select
                value={formData.weather}
                onValueChange={(value) => handleInputChange('weather', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder='날씨 선택' />
                </SelectTrigger>
                <SelectContent>
                  {weatherOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 난이도와 기분 */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label className='flex items-center gap-2'>
                <Zap className='h-4 w-4' />
                난이도
              </Label>
              <Select
                value={formData.difficulty.toString()}
                onValueChange={(value) => handleInputChange('difficulty', Number.parseInt(value))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(difficultyLabels).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className='space-y-2'>
              <Label className='flex items-center gap-2'>
                <span className='text-2xl'>
                  {feelingEmojis[formData.feeling as keyof typeof feelingEmojis]}
                </span>
                운동 후 기분
              </Label>
              <Select
                value={formData.feeling.toString()}
                onValueChange={(value) => handleInputChange('feeling', Number.parseInt(value))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(feelingEmojis).map(([value, emoji]) => (
                    <SelectItem key={value} value={value}>
                      {emoji}{' '}
                      {value === '1'
                        ? '매우 나쁨'
                        : value === '2'
                        ? '나쁨'
                        : value === '3'
                        ? '보통'
                        : value === '4'
                        ? '좋음'
                        : '매우 좋음'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 메모 */}
          <div className='space-y-2'>
            <Label htmlFor='notes'>메모 - 선택사항</Label>
            <Textarea
              id='notes'
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder='오늘의 달리기에 대한 소감이나 특별한 점을 적어보세요...'
              maxLength={1000}
              className='min-h-[100px]'
            />
            <div className='text-sm text-gray-500 text-right'>{formData.notes.length}/1000</div>
          </div>

          {/* 저장 버튼 */}
          <div className='flex gap-3 pt-4'>
            <Button type='submit' disabled={isPending} className='flex-1'>
              <Save className='h-4 w-4 mr-2' />
              {isPending ? '저장 중...' : isEdit ? '수정하기' : '기록 저장'}
            </Button>
            <Button type='button' variant='outline' asChild>
              <Link href='/records'>취소</Link>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
