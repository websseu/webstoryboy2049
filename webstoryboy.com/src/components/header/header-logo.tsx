import Link from 'next/link'
import { MdStars } from 'react-icons/md'

export default function HeaderLogo() {
  return (
    <div className='md:my-2 my-1 bg-background md:px-4 px-2'>
      <Link
        href={'/'}
        className='flex items-center md:text-8xl sm:text-7xl text-6xl font-poppins uppercase font-black'
      >
        <span className='mr-[-0.5vw] inline-block'>st</span>
        <MdStars className='text-red-500 text-[53px] sm:text-[66px] md:text-[91px]' />

        <span className='ml-[-0.5vw] inline-block'>ry</span>
      </Link>
    </div>
  )
}
