'use client'

import React from 'react'
import Link from 'next/link'
import { MdStars } from 'react-icons/md'
import { MenuItem } from './menu-item'
import data from '@/lib/data'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export default function HeaderMenu() {
  return (
    <div className='nav'>
      <NavigationMenu>
        <NavigationMenuList>
          {data.menuData.map((section) => (
            <NavigationMenuItem key={section.label}>
              <NavigationMenuTrigger>{section.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-2 p-1 md:w-[300px] lg:w-[440px] lg:grid-cols-[.6fr_1fr]'>
                  <li className='row-span-4 h-[225px]'>
                    <NavigationMenuLink asChild>
                      <Link
                        className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted to-muted p-4 no-underline outline-none focus:shadow-md'
                        href={section.card.href}
                      >
                        <div className='flex'>
                          {Array.from({ length: section.card.iconCount }).map((_, i) => (
                            <MdStars key={i} className='text-black h-2 w-2 dark:text-white' />
                          ))}
                        </div>
                        <div className='mb-2 font-gmarket text-lg font-medium'>
                          {section.card.title}
                        </div>
                        <p className='text-sm font-nanum text-zinc-500 break-keep'>
                          {section.card.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  {section.items.map((item) => (
                    <MenuItem key={item.title} href={item.href} title={item.title}>
                      {item.description}
                    </MenuItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
