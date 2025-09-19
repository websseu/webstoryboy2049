export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='notice__container'>{children}</main>
    </>
  )
}
