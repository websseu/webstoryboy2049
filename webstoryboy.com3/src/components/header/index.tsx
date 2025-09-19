import HeaderLeft from './header-left'
import HeaderLogo from './header-logo'
import HeaderMenu from './header-menu'
import HeaderRight from './header-right'

export default function Header() {
  return (
    <header className='header__container line'>
      <div className='flex items-center justify-center mx-4'>
        <HeaderLeft />
        <HeaderLogo />
        <HeaderRight />
      </div>
      <HeaderMenu />
    </header>
  )
}
