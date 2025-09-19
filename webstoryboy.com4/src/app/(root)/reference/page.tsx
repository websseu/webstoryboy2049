import { Metadata } from 'next'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: '레퍼런스',
}

export default function ReferencePage() {
  return (
    <>
      <main className='main__container'>ReferencePage</main>
      <Footer />
    </>
  )
}
