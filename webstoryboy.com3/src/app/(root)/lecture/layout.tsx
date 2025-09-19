import Footer from '@/components/footer'

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='main__container'>{children}</main>
      <Footer />
    </>
  )
}
