'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Search, MoreVertical, FileEdit, Trash2, Loader2, MapPin, Plus } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { getAllStores } from '@/lib/actions/store.action'
import DialogStoreDelete from '../dialog/dialog-store-delete'

interface Store {
  _id: string
  storeId: string
  name: string
  address: string
  location: string
  latitude?: number
  longitude?: number
  parking: string
  since: string
  phone?: string
  tags?: string[]
  images?: string[]
  createdAt: string
  updatedAt: string
}

export default function StoresManage() {
  const [stores, setStores] = useState<Store[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [storeToDelete, setStoreToDelete] = useState<Store | null>(null)

  // 데이터 가져오기
  const fetchStores = async () => {
    try {
      setIsLoading(true)
      const result = await getAllStores()

      if (result.success) {
        setStores(result.stores)
        setError(null)
      } else {
        setError(result.error || '데이터를 불러오는데 실패했습니다.')
      }
    } catch (err) {
      setError('데이터를 불러오는 중 오류가 발생했습니다.')
      console.error('스토어 데이터 로딩 오류:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchStores()
  }, [])

  // 삭제 다이얼로그 열기
  const handleDeleteClick = (store: Store) => {
    setStoreToDelete(store)
    setDeleteDialogOpen(true)
  }

  // 삭제 성공 후 처리
  const handleDeleteSuccess = (deletedStoreId: string) => {
    setStores((prevStores) => prevStores.filter((store) => store._id !== deletedStoreId))
    setStoreToDelete(null)
  }

  // 주차 정보 파싱 함수
  const getParkingInfo = (parking: string) => {
    const lowerParking = parking.toLowerCase()

    if (lowerParking.includes('불가')) {
      return { status: '불가', variant: 'destructive' as const }
    } else if (lowerParking.includes('유료')) {
      return { status: '유료', variant: 'destructive' as const }
    } else if (lowerParking.includes('무료')) {
      return { status: '무료', variant: 'default' as const }
    } else {
      return { status: '정보없음', variant: 'outline' as const }
    }
  }

  // 검색 기능
  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.storeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (store.tags && store.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  )

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        {/* 검색 및 필터 */}
        <div className='flex justify-between items-center'>
          <div className='relative w-80'>
            <Search className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
            <Input
              placeholder='매장명, 지역, 주소, 스토어ID 검색'
              className='pl-9'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className='ml-4 text-sm text-muted-foreground'>
            총 <span className='font-semibold text-foreground'>{filteredStores.length}</span>개 매장
          </div>
        </div>

        <div className='flex gap-2'>
          <Button onClick={fetchStores} variant='outline' disabled={isLoading}>
            {isLoading ? <Loader2 className='h-4 w-4 animate-spin mr-2' /> : null}
            새로고침
          </Button>
          <Link href='/admin/stores/create'>
            <Button>매장 등록</Button>
          </Link>
        </div>
      </div>

      {/* 테이블 */}
      {isLoading ? (
        <div className='flex justify-center items-center py-12'>
          <Loader2 className='h-8 w-8 animate-spin text-primary' />
          <span className='ml-2'>데이터를 불러오는 중...</span>
        </div>
      ) : error ? (
        <div className='bg-destructive/10 p-6 rounded-md text-destructive text-center'>
          <p className='font-medium'>{error}</p>
          <Button onClick={fetchStores} variant='outline' className='mt-2'>
            다시 시도
          </Button>
        </div>
      ) : (
        <div className='rounded-md border'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[60px]'>번호</TableHead>
                <TableHead>매장명</TableHead>
                <TableHead>지역</TableHead>
                <TableHead className='max-w-[200px]'>주소</TableHead>
                <TableHead>주차</TableHead>
                <TableHead>개점일</TableHead>
                <TableHead>스토어ID</TableHead>
                <TableHead className='w-[80px]'>관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStores.length > 0 ? (
                filteredStores.map((store, index) => (
                  <TableRow key={store._id}>
                    <TableCell className='text-center'>{index + 1}</TableCell>
                    <TableCell className='text-center'>{store.name}</TableCell>
                    <TableCell className='text-center'>
                      <Badge variant='secondary'>{store.location}</Badge>
                    </TableCell>
                    <TableCell className='max-w-[200px]'>
                      <div className='flex items-start gap-1'>
                        <MapPin className='h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0' />
                        <span className='text-sm truncate' title={store.address}>
                          {store.address}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className='text-center'>
                      {(() => {
                        const parkingInfo = getParkingInfo(store.parking)
                        return (
                          <Badge variant={parkingInfo.variant} className='text-xs'>
                            {parkingInfo.status}
                          </Badge>
                        )
                      })()}
                    </TableCell>
                    <TableCell className='text-center text-sm'>{store.since}</TableCell>
                    <TableCell className='text-center'>
                      <Badge variant='outline'>{store.storeId}</Badge>
                    </TableCell>
                    <TableCell className='text-center'>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant='ghost' size='icon' className='h-8 w-8'>
                            <MoreVertical className='h-4 w-4' />
                            <span className='sr-only'>메뉴 열기</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                          <Link href={`/admin/stores/edit/${store._id}`}>
                            <DropdownMenuItem>
                              <FileEdit className='h-4 w-4' />
                              수정
                            </DropdownMenuItem>
                          </Link>
                          <DropdownMenuItem
                            className='text-destructive focus:text-destructive'
                            onClick={() => handleDeleteClick(store)}
                          >
                            <Trash2 className='h-4 w-4 text-red-500' />
                            삭제
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={11} className='text-center py-12 text-muted-foreground'>
                    <div className='flex flex-col items-center gap-2'>
                      <MapPin className='h-8 w-8 text-muted-foreground/50' />
                      <p>{searchTerm ? '검색 결과가 없습니다.' : '등록된 매장이 없습니다.'}</p>
                      {!searchTerm && (
                        <Link href='/admin/stores/create'>
                          <Button variant='outline' size='sm'>
                            <Plus className='h-4 w-4 mr-2' />첫 번째 매장 등록하기
                          </Button>
                        </Link>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}

      {/* 삭제 확인 다이얼로그 */}
      <DialogStoreDelete
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        store={storeToDelete}
        onDeleteSuccess={handleDeleteSuccess}
      />
    </div>
  )
}
