import ReferFooter from '@/components/footer/index2'
import ReferCss from '@/components/refer/refer-css'

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

export default async function CssDetailsLayout({ children }: { children: React.ReactNode }) {
  const res = await fetch('https://raw.githubusercontent.com/mdn/data/main/css/properties.json', {
    next: { revalidate: 60 * 60 },
  })
  const allProps = (await res.json()) as CssPropertiesMap
  const titles = Object.keys(allProps).filter((name) => !name.startsWith('-'))

  return (
    <>
      <div className='refer__container'>
        <div className='refer__layout'>
          <aside className='refer__aside'>
            <ReferCss titles={titles} />
          </aside>
          <section className='refer__content'>{children}</section>
        </div>
      </div>
      <ReferFooter />
    </>
  )
}
