'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { slug: 'a', title: '<a>' },
  { slug: 'abbr', title: '<abbr>' },
  { slug: 'address', title: '<address>' },
  { slug: 'article', title: '<article>' },
  { slug: 'aside', title: '<aside>' },
  { slug: 'audio', title: '<audio>' },
  { slug: 'b', title: '<b>' },
  { slug: 'base', title: '<base>' },
  { slug: 'blockquote', title: '<blockquote>' },
  { slug: 'body', title: '<body>' },
  { slug: 'br', title: '<br>' },
  { slug: 'button', title: '<button>' },
  { slug: 'canvas', title: '<canvas>' },
  { slug: 'caption', title: '<caption>' },
  { slug: 'cite', title: '<cite>' },
  { slug: 'code', title: '<code>' },
  { slug: 'col', title: '<col>' },
  { slug: 'colgroup', title: '<colgroup>' },
  { slug: 'del', title: '<del>' },
  { slug: 'details', title: '<details>' },
  { slug: 'div', title: '<div>' },
  { slug: 'dl', title: '<dl>' },
  { slug: 'dt', title: '<dt>' },
  { slug: 'dd', title: '<dd>' },
  { slug: 'em', title: '<em>' },
  { slug: 'embed', title: '<embed>' },
  { slug: 'fieldset', title: '<fieldset>' },
  { slug: 'figcaption', title: '<figcaption>' },
  { slug: 'figure', title: '<figure>' },
  { slug: 'footer', title: '<footer>' },
  { slug: 'form', title: '<form>' },
  { slug: 'h1', title: '<h1>' },
  { slug: 'h2', title: '<h2>' },
  { slug: 'h3', title: '<h3>' },
  { slug: 'h4', title: '<h4>' },
  { slug: 'h5', title: '<h5>' },
  { slug: 'h6', title: '<h6>' },
  { slug: 'head', title: '<head>' },
  { slug: 'header', title: '<header>' },
  { slug: 'hr', title: '<hr>' },
  { slug: 'html', title: '<html>' },
  { slug: 'i', title: '<i>' },
  { slug: 'iframe', title: '<iframe>' },
  { slug: 'img', title: '<img>' },
  { slug: 'input', title: '<input>' },
  { slug: 'ins', title: '<ins>' },
  { slug: 'kbd', title: '<kbd>' },
  { slug: 'label', title: '<label>' },
  { slug: 'legend', title: '<legend>' },
  { slug: 'li', title: '<li>' },
  { slug: 'link', title: '<link>' },
  { slug: 'main', title: '<main>' },
  { slug: 'mark', title: '<mark>' },
  { slug: 'meta', title: '<meta>' },
  { slug: 'nav', title: '<nav>' },
  { slug: 'noscript', title: '<noscript>' },
  { slug: 'object', title: '<object>' },
  { slug: 'ol', title: '<ol>' },
  { slug: 'optgroup', title: '<optgroup>' },
  { slug: 'option', title: '<option>' },
  { slug: 'output', title: '<output>' },
  { slug: 'p', title: '<p>' },
  { slug: 'picture', title: '<picture>' },
  { slug: 'pre', title: '<pre>' },
  { slug: 'progress', title: '<progress>' },
  { slug: 'q', title: '<q>' },
  { slug: 's', title: '<s>' },
  { slug: 'script', title: '<script>' },
  { slug: 'section', title: '<section>' },
  { slug: 'select', title: '<select>' },
  { slug: 'small', title: '<small>' },
  { slug: 'source', title: '<source>' },
  { slug: 'span', title: '<span>' },
  { slug: 'strong', title: '<strong>' },
  { slug: 'style', title: '<style>' },
  { slug: 'sub', title: '<sub>' },
  { slug: 'summary', title: '<summary>' },
  { slug: 'sup', title: '<sup>' },
  { slug: 'svg', title: '<svg>' },
  { slug: 'table', title: '<table>' },
  { slug: 'tbody', title: '<tbody>' },
  { slug: 'td', title: '<td>' },
  { slug: 'template', title: '<template>' },
  { slug: 'textarea', title: '<textarea>' },
  { slug: 'tfoot', title: '<tfoot>' },
  { slug: 'th', title: '<th>' },
  { slug: 'thead', title: '<thead>' },
  { slug: 'time', title: '<time>' },
  { slug: 'title', title: '<title>' },
  { slug: 'tr', title: '<tr>' },
  { slug: 'u', title: '<u>' },
  { slug: 'ul', title: '<ul>' },
  { slug: 'var', title: '<var>' },
  { slug: 'video', title: '<video>' },
  { slug: 'wbr', title: '<wbr>' },
]

export default function HtmlLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const parts = pathname?.split('/') || []
  const activeSlug = parts[parts.length - 1]

  return (
    <section>
      <div className='reference__wrap'>
        <div className='reference__container '>
          {/* 왼쪽 네비 */}
          <aside className='border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block'>
            <div className='no-scrollbar h-full overflow-auto py-6 pr-4 lg:py-8'>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-1'>
                  <h4 className='rounded-md px-2 py-1 text-sm font-medium'>시작하기 전에</h4>
                  <div className='grid grid-flow-row auto-rows-max gap-1 text-sm'>
                    {items.map(({ slug, title }) => (
                      <Link
                        key={slug}
                        scroll={false}
                        href={`/reference/html/${slug}`}
                        className={`block rounded px-2 py-1.5 hover:bg-gray-50 font-nanum text-zinc-700 ${
                          activeSlug === slug ? 'bg-gray-100' : ''
                        }`}
                      >
                        {title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* 오른쪽 콘텐츠 */}
          <main className='relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]'>
            {children}
          </main>
        </div>
      </div>
    </section>
  )
}
