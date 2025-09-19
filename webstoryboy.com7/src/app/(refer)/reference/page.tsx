import React from 'react'
import { BookText, Code2, FileCode, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Reference() {
  return (
    <section className='p-6'>
      <div>
        <h1 className='font-black text-3xl md:text-4xl font-poppins uppercase text-center pt-6 md:pt-10 pb-4'>
          Reference
        </h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/* HTML */}
        <div className='border border-dashed rounded p-4 hover:border-blue-700 transition-all'>
          <BookText className='w-6 h-6 mb-2 text-blue-500' />
          <h2 className='text-xl font-bold mb-2 font-poppins'>HTML</h2>
          <p className='text-sm text-muted-foreground font-nanum mb-4 leading-6'>
            모든 HTML 태그의 의미, 속성, 사용 예제를 한눈에 정리했습니다. 웹의 뼈대를 구성하는
            HTML을 제대로 이해해보세요.
          </p>
          <Link
            href='/reference/html-dictionary'
            className='inline-flex gap-1 font-poppins text-sm items-center border px-2.5 py-1 rounded hover:bg-accent'
          >
            VIEW <ArrowRight className='w-4 h-4' />
          </Link>
        </div>

        {/* CSS 사전 */}
        <div className='border border-dashed rounded p-4 hover:border-green-700 transition-all'>
          <FileCode className='w-6 h-6 mb-2 text-green-500' />
          <h2 className='text-xl font-bold mb-2 font-poppins'>CSS</h2>
          <p className='text-sm text-muted-foreground font-nanum mb-4 leading-6'>
            레이아웃부터 애니메이션까지, CSS 속성을 체계적으로 정리했습니다. 시각적 스타일링의
            핵심을 이곳에서 익히세요.
          </p>
          <Link
            href='/reference/css-dictionary'
            className='inline-flex gap-1 font-poppins text-sm items-center border px-2.5 py-1 rounded hover:bg-accent'
          >
            VIEW <ArrowRight className='w-4 h-4' />
          </Link>
        </div>

        {/* JavaScript 사전 */}
        <div className='border border-dashed rounded p-4 hover:border-yellow-700 transition-all'>
          <Code2 className='w-6 h-6 mb-2 text-yellow-500' />
          <h2 className='text-xl font-bold mb-2 font-poppins'>JavaScript</h2>
          <p className='text-sm text-muted-foreground font-nanum mb-4 leading-6'>
            DOM, 이벤트, 배열 메서드 등 자바스크립트의 모든 핵심 문법을 빠르게 찾아보세요. 실무 활용
            중심으로 구성했습니다.
          </p>
          <Link
            href='/reference/javascript-dictionary'
            className='inline-flex gap-1 font-poppins text-sm items-center border px-2.5 py-1 rounded hover:bg-accent'
          >
            VIEW <ArrowRight className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </section>
  )
}
