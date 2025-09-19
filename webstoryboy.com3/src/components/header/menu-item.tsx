import React from 'react'
import Link from 'next/link'
import { NavigationMenuLink } from '@/components/ui/navigation-menu'

type Props = {
  title: string
  href: string
  children: React.ReactNode
}

export const MenuItem = ({ title, href, children }: Props) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className='font-nanum block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none transition hover:bg-accent hover:text-accent-foreground'
        >
          <div className='text-[15px] font-gmarket font-medium leading-none pt-1'>{title}</div>
          <div className='text-sm leading-snug text-muted-foreground'>{children}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
