'use client'

import React, { useState, useRef } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Camera, X } from 'lucide-react'
import { getInitials } from '@/lib/utils'
import { updateProfile } from '@/lib/actions/user.action'

interface SessionData {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
    id?: string
    role?: string
    visitCount?: number
  }
  expires?: string
}

interface DialogProfileEditProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  session: SessionData
  onProfileUpdate: (updatedData: { name: string; image?: string }) => void
}

export default function DialogProfileEdit({
  open,
  onOpenChange,
  session,
  onProfileUpdate,
}: DialogProfileEditProps) {
  const [name, setName] = useState(session.user?.name || '')
  const [imagePreview, setImagePreview] = useState<string | null>(
    session.user?.image || null
  )
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // 파일 크기 체크 (5MB 제한)
      if (file.size > 5 * 1024 * 1024) {
        alert('파일 크기는 5MB 이하여야 합니다.')
        return
      }

      // 파일 타입 체크
      if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드 가능합니다.')
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert('이름을 입력해주세요.')
      return
    }

    setIsLoading(true)
    try {
      // 이미지가 변경된 경우 파일 업로드
      let imageUrl = session.user?.image || undefined

      if (imagePreview && imagePreview !== session.user?.image) {
        // Base64 이미지를 파일로 변환
        const response = await fetch(imagePreview)
        const blob = await response.blob()
        const file = new File([blob], 'profile.jpg', { type: 'image/jpeg' })

        // 파일 업로드
        const formData = new FormData()
        formData.append('file', file)

        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        if (!uploadResponse.ok) {
          throw new Error('이미지 업로드에 실패했습니다.')
        }

        const uploadResult = await uploadResponse.json()
        imageUrl = uploadResult.url
      }

      // 프로필 업데이트
      const result = await updateProfile({
        name: name.trim(),
        image: imageUrl,
      })

      if (result.success) {
        onProfileUpdate({
          name: name.trim(),
          image: imageUrl,
        })
        onOpenChange(false)
      } else {
        alert(result.error || '프로필 업데이트에 실패했습니다.')
      }
    } catch (error) {
      console.error('프로필 업데이트 실패:', error)
      alert('프로필 업데이트에 실패했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setName(session.user?.name || '')
    setImagePreview(session.user?.image || null)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='font-gmarket text-starbucks-green text-xl'>
            프로필 수정
          </DialogTitle>
        </DialogHeader>

        <div className='space-y-6'>
          {/* 프로필 이미지 */}
          <div className='flex flex-col items-center space-y-4'>
            <div className='relative'>
              <Avatar className='h-24 w-24'>
                <AvatarImage
                  src={imagePreview || ''}
                  alt={name || '프로필 이미지'}
                />
                <AvatarFallback className='bg-starbucks-green text-white font-bold text-2xl'>
                  {name ? getInitials(name) : 'U'}
                </AvatarFallback>
              </Avatar>

              {/* 이미지 변경 버튼 */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className='absolute -bottom-2 -right-2 w-8 h-8 bg-starbucks-green rounded-full flex items-center justify-center text-white hover:bg-starbucks-green-light transition-colors'
              >
                <Camera className='w-4 h-4' />
              </button>

              {/* 이미지 제거 버튼 */}
              {imagePreview && (
                <button
                  onClick={handleRemoveImage}
                  className='absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors'
                >
                  <X className='w-3 h-3' />
                </button>
              )}
            </div>

            <input
              ref={fileInputRef}
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              className='hidden'
            />

            <div className='text-center'>
              <p className='font-nanum text-sm text-gray-600 mb-2'>
                프로필 이미지를 변경하려면 클릭하세요
              </p>
              <p className='font-nanum text-xs text-gray-400'>
                JPG, PNG, GIF (최대 5MB)
              </p>
            </div>
          </div>

          {/* 이름 입력 */}
          <div className='space-y-2'>
            <Label
              htmlFor='name'
              className='font-nanum font-bold text-gray-700'
            >
              이름
            </Label>
            <Input
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='이름을 입력하세요'
              className='font-nanum'
            />
          </div>

          {/* 이메일 (읽기 전용) */}
          <div className='space-y-2'>
            <Label className='font-nanum font-bold text-gray-700'>이메일</Label>
            <Input
              value={session.user?.email || ''}
              disabled
              className='font-nanum bg-gray-50'
            />
            <p className='font-nanum text-xs text-gray-500'>
              이메일은 변경할 수 없습니다.
            </p>
          </div>
        </div>

        {/* 버튼 */}
        <div className='flex gap-2 pt-4'>
          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            className='flex-1 bg-starbucks-green hover:bg-starbucks-green-light'
          >
            {isLoading ? '저장 중...' : '저장'}
          </Button>
          <Button
            onClick={handleCancel}
            variant='outline'
            className='border-starbucks-green text-starbucks-green hover:bg-starbucks-green-pale'
          >
            취소
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
