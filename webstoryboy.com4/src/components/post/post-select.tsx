'use client'

import { useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import data from '@/lib/data'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'

export default function PostSelect() {
  const { control, setValue, watch } = useFormContext()
  const selectedCategory = watch('category')
  const [subCategories, setSubCategories] = useState<
    {
      label: string
      value: string
    }[]
  >([])

  // 초기 로드: 카테고리와 서브카테고리 기본값 (소문자)
  useEffect(() => {
    if (data.menuData.length > 0) {
      const defaultCatLabel = data.menuData[0].label
      const defaultCat = defaultCatLabel.toLowerCase()
      setValue('category', defaultCat)
      const defaultSubs = data.menuData[0].items.map((item) => {
        const slug = item.href.split('/').pop()?.toLowerCase() || ''
        return { label: item.title, value: slug }
      })
      setSubCategories(defaultSubs)
      if (defaultSubs.length > 0) {
        setValue('subCategory', defaultSubs[0].value)
      }
    }
  }, [setValue])

  // 카테고리 변경 시 서브카테고리 업데이트
  useEffect(() => {
    const categoryData = data.menuData.find(
      (cat) => cat.label.toLowerCase() === selectedCategory
    )
    const subs = categoryData
      ? categoryData.items.map((item) => {
          const slug = item.href.split('/').pop()?.toLowerCase() || ''
          return { label: item.title, value: slug }
        })
      : []
    setSubCategories(subs)
    if (subs.length > 0) {
      setValue('subCategory', subs[0].value)
    } else {
      setValue('subCategory', '')
    }
  }, [selectedCategory, setValue])

  return (
    <>
      {/* 카테고리 선택 */}
      <FormField
        control={control}
        name='category'
        render={({ field }) => (
          <FormItem className='w-full'>
            <FormLabel>카테고리</FormLabel>
            <FormControl>
              <Select
                onValueChange={(val) => field.onChange(val.toLowerCase())}
                value={field.value}
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='카테고리를 선택하세요' />
                </SelectTrigger>
                <SelectContent>
                  {data.menuData.map((cat) => (
                    <SelectItem key={cat.label} value={cat.label.toLowerCase()}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* 서브 카테고리 선택 */}
      <FormField
        control={control}
        name='subCategory'
        render={({ field }) => (
          <FormItem className='w-full'>
            <FormLabel>서브 카테고리</FormLabel>
            <FormControl>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={subCategories.length === 0}
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='서브 카테고리를 선택하세요' />
                </SelectTrigger>
                <SelectContent>
                  {subCategories.map((sub) => (
                    <SelectItem key={sub.value} value={sub.value}>
                      {sub.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
