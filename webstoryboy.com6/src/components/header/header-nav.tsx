import React from 'react'
import Link from 'next/link'
import { MdStars } from 'react-icons/md'
import { navConfig } from '@/lib/menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'

export default function HeaderNav() {
  return (
    <nav className='header__nav'>
      <NavigationMenu>
        <NavigationMenuList>
          {navConfig.map(({ trigger, items }) => (
            <NavigationMenuItem key={trigger}>
              <NavigationMenuTrigger>{trigger}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-3 p-2 md:w-[455px] lg:w-[455px] lg:grid-cols-[.75fr_1fr]'>
                  {items.map((item) =>
                    item.featured ? (
                      <li key={item.title} className='row-span-3'>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 font-nanum'
                          >
                            <MdStars className='text-black dark:text-white' />
                            <div className='text-lg font-gmarket font-medium mt-1'>
                              {item.title}
                            </div>
                            <p className='text-sm text-muted-foreground break-keep leading-5'>
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ) : (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link href={item.href} className='font-nanum block rounded-md p-3'>
                            <div className='text-md font-medium font-gmarket'>{item.title}</div>
                            <p className='line-clamp-2 text-sm leading-5 text-muted-foreground break-keep'>
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    )
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
