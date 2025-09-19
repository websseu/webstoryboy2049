import {
  Home,
  Bath,
  Carrot,
  Dessert,
  Drum,
  IceCreamBowl,
  Ghost,
  Siren,
} from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export interface MenuItem {
  icon: LucideIcon
  label: string
  href: string
  type: 'page' | 'dialog'
}

export const menuItems: MenuItem[] = [
  { icon: Home, label: '홈', href: '/', type: 'page' },
  { icon: Bath, label: '공지사항', href: '#notice', type: 'dialog' },
  { icon: Carrot, label: '문의하기', href: '#contact', type: 'dialog' },
  { icon: Dessert, label: '재생목록 관리', type: 'page', href: '/myplay' },
  { icon: Drum, label: '마이 페이지', type: 'page', href: '/mypage' },
]

export const authItems: MenuItem[] = [
  { icon: IceCreamBowl, label: '로그인', href: '#login', type: 'dialog' },
  { icon: Ghost, label: '회원가입', href: '#signup', type: 'dialog' },
]

export const loggedInItems: MenuItem[] = [
  { icon: Siren, label: '로그아웃', href: '#logout', type: 'dialog' },
]
