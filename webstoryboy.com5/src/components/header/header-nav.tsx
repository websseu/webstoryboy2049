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
                <ul className='grid gap-3 p-4 md:w-[455px] lg:w-[455px] lg:grid-cols-[.75fr_1fr]'>
                  {items.map((item) =>
                    item.featured ? (
                      <li key={item.title} className='row-span-3'>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md font-nanum'
                          >
                            <MdStars />
                            <div className='mb-2 text-lg font-gmarket font-medium mt-1'>
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
                          <Link
                            href={item.href}
                            className='font-nanum block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                          >
                            <div className='text-md font-medium font-gmarket leading-5'>
                              {item.title}
                            </div>
                            <p className='line-clamp-2 text-sm leading-5 text-muted-foreground'>
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
