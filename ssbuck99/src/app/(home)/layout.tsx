import Header from '@/components/header/header'

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className='main__container'>{children}</main>
    </>
  )
}
