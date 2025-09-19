import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function A() {
  return (
    <>
      <div className='mx-auto w-full min-w-0 max-w-2xl'>
        <section className='text-[15px]'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/reference'>Reference</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href='/html'>html</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>a</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className='text-4xl font-bold my-4 font-mono'>&lt;a&gt;</h1>
          <p className='text-zinc-500 mb-8 leading-6.5'>
            &lt;a&gt; 태그는 다른 페이지 이동을 설정합니다. 페이지 주소 뿐만 아니라, 메일 주소, 전화
            번호 등도 연결할 수 있으며, 아이디(#) 값으로 페이지 내에서도 이동이 가능합니다.
          </p>

          <h2 className='text-xl mb-2'>설명</h2>
          <ul className='list-disc pl-4'>
            <li className='text-zinc-500 dark:text-zinc-100 text-[15px] leading-6.5'>
              &lt;a&gt; 태그는 클릭하면 다른 페이지로 이동합니다. 현재 페이지에서 다른 페이지 URL로
              연결하는 것을 하이퍼링크라고 합니다.
            </li>
            <li className='text-zinc-500 dark:text-zinc-100 text-[15px] leading-6.5'>
              &lt;a&gt; 태그는 페이지 주소 뿐만 아니라, 메일 주소, 전화 번호 등도 연결할 수
              있습니다.
            </li>
            <li className='text-zinc-500 dark:text-zinc-100 text-[15px] leading-6.5'>
              &lt;a&gt; 태그는 아이디(#id)로 이동 할 수 있습니다.
            </li>
            <li className='text-zinc-500 dark:text-zinc-100 text-[15px] leading-6.5'>
              &lt;a&gt; 태그는 target 속성을 이용하면 새로운 브라우저 창에서 페이지 이동을 할 수
              있습니다.
            </li>
            <li className='text-zinc-500 dark:text-zinc-100 text-[15px] leading-6.5'>
              &lt;a&gt; 태그는 방문한 링크는 밑줄과 보라색으로 표시되고, 활성화된 링크는 밑줄과
              빨간색으로 표시됩니다.
            </li>
            <li className='text-zinc-500 dark:text-zinc-100 text-[15px] leading-6.5'>
              원칙적으로 &lt;a&gt; 태그는 블록구조를 포함 할 수 없지만, HTML5에서는 &lt;a&gt; 태그는
              블록 요소를 포함할 수 있습니다.
            </li>
            <li className='text-zinc-500 dark:text-zinc-100 text-[15px] leading-6.5'>
              href=&quot;#&quot;의 페이지 지정을 막기 위해 javascript:void(0)를 사용하는 것보다
              &lt;button&gt; 태그를 사용하는 것이 바람직합니다.
            </li>
            <li className='text-zinc-500 dark:text-zinc-100 text-[15px] leading-6.5'>
              &lt;a&gt; 태그는 href 속성을 사용하지 않는다면, target, download, ping, rel, hreflang,
              type, referrerpolicy 속성을 사용할 수 없습니다.
            </li>
          </ul>
        </section>
      </div>
      <div className='hidden text-sm xl:block'>이 페이지는</div>
    </>
  )
}
