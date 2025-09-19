import Header from '@/components/header/header'
import FooterRefer from '@/components/footer/footer-refer'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='refer__container'>{children}</main>
      <FooterRefer />
    </>
  )
}
