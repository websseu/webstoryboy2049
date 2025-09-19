import React from 'react'
import { Heart } from 'lucide-react'
import { APP_COPYRIGHT, APP_ENG_NAME, APP_SLOGAN } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className='mt-28 mb-84'>
      <div className='footer__container'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 border-t py-8'>
          <div className='space-y-3'>
            <div className='flex items-center gap-2'>
              <h3 className='text-2xl font-black uppercase font-poppins text-orange-600'>
                {APP_ENG_NAME}.com
              </h3>
            </div>
            <p className='text-sm leading-relaxed text-muted-foreground'>
              {APP_SLOGAN}
            </p>
          </div>
        </div>

        <div className='border-t mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground'>
            <div className='text-xs'>{APP_COPYRIGHT}</div>
            <div className='flex items-center gap-2 text-xs'>
              <span>Made with</span>
              <Heart className='h-4 w-4 hover:text-red-500' />
              <span>for music lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
