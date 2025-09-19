import React from 'react'
import { Heart } from 'lucide-react'
import { APP_NAME, APP_DESCRIPTION, APP_COPYRIGHT } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className='bg-green-800 text-white '>
      <div className='footer__container py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* 브랜드 정보 */}
          <div className='space-y-3'>
            <div className='flex items-center gap-2'>
              <h3 className='text-xl font-bold'>{APP_NAME}</h3>
            </div>
            <p className='text-green-50 text-sm font-light leading-relaxed'>
              {APP_DESCRIPTION}
            </p>
          </div>
        </div>

        {/* 하단 구분선 */}
        <div className='border-t border-green-700 mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='text-xs text-green-200'>{APP_COPYRIGHT}</div>
            <div className='flex items-center gap-2 text-xs text-green-200'>
              <span>Made with</span>
              <Heart className='h-4 w-4 text-white' />
              <span>for coffee lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
