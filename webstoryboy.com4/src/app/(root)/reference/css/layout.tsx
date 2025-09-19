import ReferFooter from '@/components/footer/index2'

export default async function CssLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='refer__container'>{children}</main>
      <ReferFooter />
    </>
  )
}
