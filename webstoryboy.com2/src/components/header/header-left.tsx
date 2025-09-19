'use client'

import { useTheme } from 'next-themes'
import { GiMoebiusStar, GiOverkill } from 'react-icons/gi'
import MobileMenu from './mobile-menu'

export default function HeaderLeft() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <div className='absolute left-4 hidden sm:block'>
        <span className='circle' onClick={toggleTheme}>
          {theme === 'dark' ? (
            <GiOverkill size={20} />
          ) : (
            <GiMoebiusStar size={20} />
          )}
        </span>
      </div>
      <MobileMenu />
    </>
  )
}
