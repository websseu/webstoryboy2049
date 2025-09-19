import Footer from '@/components/footer'

export default async function InspirationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='main__container'>{children}</main>
      <Footer />
    </>
  )
}
