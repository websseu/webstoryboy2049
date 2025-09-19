import ReferFooter from '@/components/footer/index2'

export default async function HtmlLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='refer__container'>{children}</main>
      <ReferFooter />
    </>
  )
}
