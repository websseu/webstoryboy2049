import Footer from '@/components/footer'

export default async function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='main__container'>{children}</main>
      <Footer />
    </>
  )
}
