import Link from 'next/link'
import data from '@/lib/data'
import { AlignJustify, BadgeCheck } from 'lucide-react'
import { FaYoutube, FaGithub } from 'react-icons/fa6'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu'

export default function MobileMenu() {
  return (
    <div className='absolute left-4 block sm:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='circle'>
            <AlignJustify size={18} />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className='w-56 mr-0 mt-1 bg-background block sm:hidden'
          align='start'
          forceMount
        >
          <DropdownMenuLabel className='text-center'>
            개발을 배우다!
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            {data.menuData.map((section) => (
              <DropdownMenuSub key={section.label}>
                <DropdownMenuSubTrigger className='gap-2'>
                  <BadgeCheck className='h-4 w-4' />
                  {section.card.title}
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {section.items.map((item) => (
                      <DropdownMenuItem asChild key={item.title}>
                        <Link href={item.href}>{item.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a href='https://www.youtube.com/@webstoryboy' target='_blank'>
              <FaYoutube className='text-red-500' />
              웹스토리보이 유튜브
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href='https://github.com/webstoryboy' target='_blank'>
              <FaGithub className='text-black' />
              웹스토리보이 깃허브
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
