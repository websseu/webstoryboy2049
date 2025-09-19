import Link from 'next/link'

export default function HeaderLeft() {
  return (
    <div>
      <Link
        href={'/'}
        className='font-gmarket text-2xl font-bold text-[#1E553B] pt-1 block'
      >
        쓰벅 99
      </Link>
    </div>
  )
}
