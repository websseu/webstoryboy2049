'use client'

import React, { useEffect } from 'react'
import { toast } from 'sonner'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Badge } from '../ui/badge'
import { Switch } from '../ui/switch'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserEditSchema } from '@/lib/validator'
import { UserEditInput } from '@/lib/type'
import { IUser } from '@/lib/db/models/user.model'
import { updateUser } from '@/lib/actions/user.action'
import {
  User,
  Mail,
  Shield,
  Settings,
  Globe,
  Hash,
  Save,
  Eye,
} from 'lucide-react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'

interface DialogUserEditProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  user: IUser | null
  onSuccess: (updatedUser: IUser) => void
}

export default function DialogUserEdit({
  open,
  onOpenChange,
  user,
  onSuccess,
}: DialogUserEditProps) {
  const form = useForm<UserEditInput>({
    resolver: zodResolver(UserEditSchema),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      role: 'user',
      provider: 'email',
      image: '',
      visitCount: 0,
      isActive: true,
      emailVerified: true,
    },
  })

  // user가 변경될 때마다 폼 데이터 업데이트
  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name || '',
        username: user.username || '',
        email: user.email || '',
        role: user.role || 'user',
        provider: user.provider || 'email',
        image: user.image || '',
        visitCount: user.visitCount || 0,
        isActive: user.isActive ?? true,
        emailVerified: user.emailVerified ?? true,
      })
    }
  }, [user, form])

  // 수정하기
  const onSubmit = async (data: UserEditInput) => {
    if (!user) return

    try {
      const result = await updateUser(user._id as string, data)

      if (result.success) {
        toast.success('회원 정보가 성공적으로 수정되었습니다.')
        onSuccess(result.user)
        onOpenChange(false)
      } else {
        toast.error(result.error || '회원 정보 수정에 실패했습니다.')
      }
    } catch (error) {
      console.error('수정 중 오류 발생:', error)
      toast.error('서버 요청 중 오류가 발생했습니다.')
    }
  }

  // 다이얼로그 닫기(폼 초기화)
  const handleDialogClose = (open: boolean) => {
    if (!open) {
      form.reset()
    }
    onOpenChange(open)
  }

  if (!user) return null

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent className='max-w-2xl'>
        <DialogHeader className='border-b pb-4'>
          <DialogTitle className='flex items-center font-black text-green-700 justify-center gap-1 text-xl'>
            <User className='h-5 w-5' />
            회원 정보 수정
          </DialogTitle>
          <DialogDescription className='text-center text-sm text-muted-foreground'>
            회원의 정보를 수정할 수 있습니다.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-2 text-sm max-h-[60vh] overflow-y-auto pt-2'>
              {/* 이름 */}
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem className='flex items-center'>
                    <FormLabel className='flex-[2.5_2.5_0%]'>
                      <User className='h-4 w-4 text-green-600' />
                      이름
                    </FormLabel>
                    <div className='flex-[7.5_7.5_0%] pr-1'>
                      <FormControl>
                        <Input
                          placeholder='이름을 입력하세요'
                          {...field}
                          className='h-9'
                        />
                      </FormControl>
                      <FormMessage className='mt-2' />
                    </div>
                  </FormItem>
                )}
              />
              <Separator />

              {/* 사용자명 */}
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem className='flex items-center'>
                    <FormLabel className='flex-[2.5_2.5_0%]'>
                      <Hash className='h-4 w-4 text-purple-600' />
                      사용자명
                    </FormLabel>
                    <div className='flex-[7.5_7.5_0%] pr-1'>
                      <FormControl>
                        <Input
                          placeholder='사용자명을 입력하세요'
                          {...field}
                          className='h-9'
                        />
                      </FormControl>
                      <FormMessage className='mt-2' />
                    </div>
                  </FormItem>
                )}
              />
              <Separator />

              {/* 이메일 */}
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='flex items-center'>
                    <FormLabel className='flex-[2.5_2.5_0%]'>
                      <Mail className='h-4 w-4 text-blue-600' />
                      이메일
                    </FormLabel>
                    <div className='flex-[7.5_7.5_0%] pr-1'>
                      <FormControl>
                        <Input
                          type='email'
                          placeholder='이메일을 입력하세요'
                          {...field}
                          className='h-9'
                        />
                      </FormControl>
                      <FormMessage className='mt-2' />
                    </div>
                  </FormItem>
                )}
              />
              <Separator />

              {/* 로그인 방식 */}
              <FormField
                control={form.control}
                name='provider'
                render={({ field }) => (
                  <FormItem className='flex items-center'>
                    <FormLabel className='flex-[2.5_2.5_0%]'>
                      <Globe className='h-4 w-4 text-orange-500' />
                      로그인 방식
                    </FormLabel>
                    <div className='flex-[7.5_7.5_0%] pr-1'>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className='h-9'>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='email'>이메일</SelectItem>
                            <SelectItem value='google'>구글</SelectItem>
                            <SelectItem value='kakao'>카카오</SelectItem>
                            <SelectItem value='naver'>네이버</SelectItem>
                            <SelectItem value='github'>깃허브</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className='mt-2' />
                    </div>
                  </FormItem>
                )}
              />
              <Separator />

              {/* 권한 */}
              <FormField
                control={form.control}
                name='role'
                render={({ field }) => (
                  <FormItem className='flex items-center'>
                    <FormLabel className='flex-[2.5_2.5_0%]'>
                      <Shield className='h-4 w-4 text-red-500' />
                      권한
                    </FormLabel>
                    <div className='flex-[7.5_7.5_0%] pr-1'>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className='h-9'>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='user'>사용자</SelectItem>
                            <SelectItem value='admin'>관리자</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className='mt-2' />
                    </div>
                  </FormItem>
                )}
              />
              <Separator />

              {/* 방문수 */}
              <FormField
                control={form.control}
                name='visitCount'
                render={({ field }) => (
                  <FormItem className='flex items-center'>
                    <FormLabel className='flex-[2.5_2.5_0%]'>
                      <Eye className='h-4 w-4 text-green-600' />
                      방문수
                    </FormLabel>
                    <div className='flex-[7.5_7.5_0%] pr-1'>
                      <FormControl>
                        <Input
                          type='number'
                          min={0}
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value) || 0)
                          }
                          className='h-9'
                        />
                      </FormControl>
                      <FormMessage className='mt-2' />
                    </div>
                  </FormItem>
                )}
              />
              <Separator />

              {/* 계정 상태 */}
              <FormField
                control={form.control}
                name='isActive'
                render={({ field }) => (
                  <FormItem className='flex items-center justify-between mt-4'>
                    <FormLabel>
                      <Settings className='h-4 w-4 text-indigo-600' />
                      계정 상태
                    </FormLabel>
                    <div className='flex items-center gap-2'>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <Badge variant={field.value ? 'outline' : 'destructive'}>
                        {field.value ? '활성' : '비활성'}
                      </Badge>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className='sm:justify-center border-t pt-4 mt-4'>
              <Button
                type='submit'
                disabled={form.formState.isSubmitting}
                className='w-full bg-green-700 hover:bg-green-800'
              >
                {form.formState.isSubmitting ? (
                  <>
                    <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2'></div>
                    수정 중...
                  </>
                ) : (
                  <>
                    <Save className='h-4 w-4 mr-2' />
                    수정하기
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
