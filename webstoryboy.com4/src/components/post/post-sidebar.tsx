import Link from 'next/link'
import { Binoculars, MessageCircleCode, Palette } from 'lucide-react'
import PostList from '@/components/post/post-list'
import PostPdf from '@/components/post/post-pdf'
import PostComments from '@/components/post/post-comments'

interface PostSidebarProps {
  subCategory?: string
  currentSlug?: string
}

export default function PostSidebar({ subCategory, currentSlug }: PostSidebarProps) {
  const showFullMenus = subCategory === 'web-design-2025'
  const showPreviewCodeOnly = subCategory === 'gsap-parallax-effect'

  return (
    <aside className='post__sidebar'>
      {/* 광고 영역 */}
      <div className='ad w-[300px] h-[200px] bg-amber-100 rounded mx-auto mb-4' />

      {/* 관련 포스트 목록 */}
      {subCategory && currentSlug && (
        <PostList subCategory={subCategory} currentSlug={currentSlug} />
      )}

      {/* web-design-2025: PDF, 디자인, 미리보기, 코드 모두 그리드로 통합 */}
      {showFullMenus && (
        <div className='grid grid-cols-2 gap-2 mb-4'>
          {/* PDF 다운로드 */}
          <div>
            <PostPdf />
          </div>
          {/* 디자인 보기 */}
          <Link
            href='https://www.figma.com/design/dw6Hz3ecyWLgQ95Nl6aVu4/%EC%9B%B9%EB%94%94%EC%9E%90%EC%9D%B8%EA%B0%9C%EB%B0%9D%EA%B8%B0%EB%8A%A5%EC%82%AC-2025-%7C-webstoryboy?node-id=0-1&t=OUdv6hNZU7sPbImg-1'
            target='_blank'
            className='w-full flex items-center justify-center p-2 rounded gap-2 text-sm border text-zinc-700 hover:bg-zinc-50'
          >
            <Palette className='w-5 h-5' />
            디자인 보기
          </Link>

          {/* 미리보기 */}
          <Link
            href='https://webstoryboy.github.io/webdesign/'
            target='_blank'
            className='w-full flex items-center justify-center p-2 rounded gap-2 text-sm border text-zinc-700 hover:bg-zinc-50'
          >
            <Binoculars className='w-5 h-5' />
            미리보기
          </Link>

          {/* 코드보기 */}
          <Link
            href='https://github.com/webstoryboy/webdesign/tree/main/code'
            target='_blank'
            className='w-full flex items-center justify-center p-2 rounded gap-2 text-sm border text-zinc-700 hover:bg-zinc-50'
          >
            <MessageCircleCode className='w-5 h-5' />
            코드보기
          </Link>
        </div>
      )}

      {/* gsap-parallax-effect: 미리보기 + 코드만 */}
      {showPreviewCodeOnly && (
        <div className='grid grid-cols-2 gap-2 mb-4'>
          <Link
            href='https://webstoryboy.github.io/webdesign/'
            target='_blank'
            className='w-full flex items-center justify-center p-2 rounded gap-2 text-sm border text-zinc-700 hover:bg-zinc-50'
          >
            <Binoculars className='w-5 h-5' />
            미리보기
          </Link>
          <Link
            href='https://github.com/webstoryboy/webdesign/tree/main/code'
            target='_blank'
            className='w-full flex items-center justify-center p-2 rounded gap-2 text-sm border text-zinc-700 hover:bg-zinc-50'
          >
            <MessageCircleCode className='w-5 h-5' />
            코드보기
          </Link>
        </div>
      )}

      {/* 댓글 섹션 */}
      <PostComments />
    </aside>
  )
}
