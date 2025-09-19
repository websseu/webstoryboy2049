import { getPostsForSubCategory } from '@/lib/actions/post.action'
import PostTab from '@/components/post/post-tab'

export default async function LectureGsapScrollTrigglePage() {
  const { posts, totalCount } = await getPostsForSubCategory('gsap-parallax-effect')

  console.log(posts)

  return (
    <section>
      <div className='page__title'>
        <h2 className='text-center mt-4 mb-3 font-light'>
          GSAP Parallax Effect <span className='small'>{totalCount}</span>
        </h2>
        <p className='text-center'>
          사용자의 시선을 사로잡는 인터랙티브 웹사이트는 단순한 정보 제공을 넘어, 브랜드의 이미지를
          전달하고, 방문자의 행동을 유도하는 중요한 수단이 됩니다. 본 강의는 애니메이션 라이브러리인
          GSAP을 중심으로, 실무에서 바로 사용할 수 있는 웹 애니메이션 구현 기법을 배웁니다.
        </p>
      </div>

      <PostTab posts={posts} />
    </section>
  )
}
