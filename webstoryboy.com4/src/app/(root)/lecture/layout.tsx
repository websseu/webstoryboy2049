import Footer from '@/components/footer'

export default async function LectureLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='main__container'>{children}</main>
      <Footer />
    </>
  )
}
