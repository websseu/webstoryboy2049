import React from 'react'
import { Heart } from 'lucide-react'
import { APP_DESCRIPTION, APP_COPYRIGHT, APP_ENG_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className='mt-28 mb-84'>
      <div className='footer__container'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 border-t py-8'>
          {/* 브랜드 정보 */}
          <div className='space-y-3'>
            <div className='flex items-center gap-2'>
              <h3 className='text-2xl font-bold uppercase font-poppins'>
                {APP_ENG_NAME}
              </h3>
            </div>
            <p className='text-sm leading-relaxed text-muted-foreground'>
              {APP_DESCRIPTION}
            </p>
          </div>
        </div>

        {/* 하단 구분선 */}
        <div className='border-t mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='text-xs'>{APP_COPYRIGHT}</div>
            <div className='flex items-center gap-2 text-xs'>
              <span>Made with</span>
              <Heart className='h-4 w-4' />
              <span>for music lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
