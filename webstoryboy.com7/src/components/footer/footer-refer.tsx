import React from 'react'
import { APP_COPYRIGHT, APP_ENGNAME } from '@/lib/constants'

export default function FooterRefer() {
  return (
    <footer className='footerRefer__container'>
      <div className='font-nanum p-4 md:p-8'>
        <h6 className='text-xl font-light font-poppins mb-2'>{APP_ENGNAME}</h6>
        <p className='text-muted-foreground md:w-1/2 w-full leading-5 text-sm mb-2'>
          최신 웹 개발 지식을 공유하고, 실전에서 활용할 수 있는
          <br />
          강력한 개발 역량을 길러주는 공간입니다.
        </p>
        <p className='text-xs mt-1 text-muted-foreground'>{APP_COPYRIGHT}</p>
      </div>
    </footer>
  )
}
