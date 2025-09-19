import { APP_COPYRIGHT } from '@/lib/constants'

export default async function Footer() {
  return (
    <footer className='footer2__container'>
      <div className='font-nanum p-6 border-l border-r border-t border-dashed'>
        <h6 className='text-xl font-light font-poppins mb-2'>webstoryboy</h6>
        <p className='text-zinc-500 md:w-1/2 w-full leading-5 text-sm mb-2'>
          최신 웹 개발 지식을 공유하고, 실전에서 활용할 수 있는
          <br />
          강력한 개발 역량을 길러주는 공간입니다.
        </p>
        <p className='text-xs mt-1 text-zinc-500'>{APP_COPYRIGHT}</p>
      </div>
    </footer>
  )
}
