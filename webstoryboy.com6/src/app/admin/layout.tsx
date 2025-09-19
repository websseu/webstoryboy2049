import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='main__container'>{children}</main>
      <Footer />
    </>
  )
}
