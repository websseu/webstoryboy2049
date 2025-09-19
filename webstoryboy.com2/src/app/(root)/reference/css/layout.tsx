// app/layouts/css/CssLayout.tsx
import Footer from '@/components/footer/index2'
import ReferCss from '@/components/refer/refer-css'

// MDN CSS 속성 스키마에 맞춘 타입 정의
interface CssProperty {
  syntax: string
  media: string
  inherited: boolean
  animationType: string
  percentages: string
  groups: string[]
  initial: string
  appliesto: string
  computed: string
  order: string
  status: string
  mdn_url: string
}
type CssPropertiesMap = Record<string, CssProperty>

export default async function CssLayout({ children }: { children: React.ReactNode }) {
  const res = await fetch('https://raw.githubusercontent.com/mdn/data/main/css/properties.json', {
    next: { revalidate: 60 * 60 },
  })
  // 타입 단언(as)을 통해 MDN 데이터 구조를 명시
  const allProps = (await res.json()) as CssPropertiesMap

  // 하이픈(-)으로 시작하는 속성명(예: --custom-property, -webkit-…)은 제외
  const titles = Object.keys(allProps).filter((name) => !name.startsWith('-'))

  return (
    <>
      <main className='css__container'>
        <div className='css__layout'>
          <aside className='css__aside'>
            <ReferCss titles={titles} />
          </aside>
          <section className='css__content'>{children}</section>
        </div>
      </main>
      <Footer />
    </>
  )
}
