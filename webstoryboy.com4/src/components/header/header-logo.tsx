import Link from 'next/link'
import { MdStars } from 'react-icons/md'

export default function HeaderLogo() {
  return (
    <div className='md:my-4 md:px-4 my-1 px-2 bg-background'>
      <Link
        href={'/'}
        className='flex items-center md:text-8xl sm:text-7xl text-6xl font-poppins uppercase font-black rounded-xl px-4 md:h-[77px]'
      >
        <span className='mr-[-0.5vw] inline-block'>st</span>
        <MdStars className='text-red-500 text-[53px] sm:text-[66px] md:text-[91px]' />

        <span className='ml-[-0.5vw] inline-block'>ry</span>
      </Link>
    </div>
  )
}
