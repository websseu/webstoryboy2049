import Footer from '@/components/footer/index2'
import ReferAside from '@/components/refer/refer-aside'

export default async function HtmlLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='refer__container'>
        <div className='refer__layout'>
          <aside className='refer__aside'>
            <ReferAside />
          </aside>
          <section className='refer__content'>{children}</section>
        </div>
      </main>
      <Footer />
    </>
  )
}
