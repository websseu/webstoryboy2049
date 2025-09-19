import { getPostsForSubCategory } from '@/lib/actions/post.action'
import PostTab from '@/components/post/post-tab'

export default async function LectureWebdesign2025Page() {
  const { posts, totalCount } = await getPostsForSubCategory('webdesign2025')

  return (
    <section>
      <div className='page__title'>
        <h2 className='text-center mt-4 mb-3 font-light'>
          웹디자인개발기능사 2025 <span className='small'>{totalCount}</span>
        </h2>
        <p className='text-center'>
          본 강의는 입문자부터 실무 경험자까지 모두가 효과적으로 학습할 수 있도록 구성되었으며,
          HTML, CSS, jQuery JavaScript 등의 핵심 기술을 포함해 실기 시험에 필요한 레이아웃 구성,
          반응형 UI/UX 설계, 웹 접근성 고려 등 실무에 바로 적용 가능한 내용을 체계적으로 다룹니다.
        </p>
      </div>

      <PostTab posts={posts} />
    </section>
  )
}
