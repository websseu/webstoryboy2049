import React from 'react'
import Link from 'next/link'
import { MdStars } from 'react-icons/md'
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
          <NavigationMenuItem>
            <NavigationMenuTrigger>Lecture</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-4 md:w-[455px] lg:w-[455px] lg:grid-cols-[.75fr_1fr]'>
                <li className='row-span-3'>
                  <NavigationMenuLink asChild>
                    <Link
                      className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md font-nanum'
                      href='/'
                    >
                      <MdStars />
                      <div className='mb-2 text-lg font-gmarket font-medium'>강의</div>
                      <p className='text-sm text-muted-foreground break-keep leading-5'>
                        체계적으로 배우는 강의 커리큘럼 처음 코딩을 한다면..
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href={'/'}
                      className='font-nanum block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    >
                      <div className='text-md font-medium font-gmarket leading-5'>
                        웹디자인개발기능사
                      </div>
                      <p className='line-clamp-2 text-sm leading-5 text-muted-foreground'>
                        코딩이 처음이라면! 이것부터 따자!
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href={'/'}
                      className='font-nanum block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    >
                      <div className='text-md font-medium font-gmarket leading-5'>
                        GSAP 패럴랙스 이펙트
                      </div>
                      <p className='line-clamp-2 text-sm leading-5 text-muted-foreground'>
                        인터랙티브한 웹을 만들고 싶다면 이것부터!!!
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Tutorial</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-4 md:w-[455px] lg:w-[455px] lg:grid-cols-[.75fr_1fr]'>
                <li className='row-span-3'>
                  <NavigationMenuLink asChild>
                    <Link
                      className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md font-nanum'
                      href='/'
                    >
                      <MdStars />
                      <div className='mb-2 text-lg font-gmarket font-medium'>튜토리얼</div>
                      <p className='text-sm text-muted-foreground break-keep leading-5'>
                        따라하면 실력이 는다. 재미와 함께 배우는 코딩!!
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href={'/'}
                      className='font-nanum block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    >
                      <div className='text-md font-medium font-gmarket leading-5'>
                        CSS Animation
                      </div>
                      <p className='line-clamp-2 text-sm leading-5 text-muted-foreground'>
                        CSS를 활용한 UI/UX 애니메이션을 배웁니다.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href={'/'}
                      className='font-nanum block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    >
                      <div className='text-md font-medium font-gmarket leading-5'>
                        GSAP Animation
                      </div>
                      <p className='line-clamp-2 text-sm leading-5 text-muted-foreground'>
                        웹 애니메이션과 인터랙티브 UI 개발을 배웁니다.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Reference</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-4 md:w-[455px] lg:w-[455px] lg:grid-cols-[.75fr_1fr]'>
                <li className='row-span-3'>
                  <NavigationMenuLink asChild>
                    <Link
                      className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md font-nanum'
                      href='/'
                    >
                      <MdStars />
                      <div className='mb-2 text-lg font-gmarket font-medium'>레퍼런스</div>
                      <p className='text-sm text-muted-foreground break-keep leading-5'>
                        기본적인 개념을 배우는 곳. 기본은 여기서 익히자!
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href={'/'}
                      className='font-nanum block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    >
                      <div className='text-md font-medium font-gmarket leading-5'>HTML 사전</div>
                      <p className='line-clamp-2 text-sm leading-5 text-muted-foreground'>
                        HTML의 모든 태그 속성을 보여줍니다.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href={'/'}
                      className='font-nanum block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    >
                      <div className='text-md font-medium font-gmarket leading-5'>CSS 사전</div>
                      <p className='line-clamp-2 text-sm leading-5 text-muted-foreground'>
                        CSS의 모든 속성을 보여줍니다.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href={'/'}
                      className='font-nanum block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    >
                      <div className='text-md font-medium font-gmarket leading-5'>
                        JAVASCRIPT 사전
                      </div>
                      <p className='line-clamp-2 text-sm leading-5 text-muted-foreground'>
                        JAVASCRIPT의 모든 메서드를 보여줍니다.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Inspiration</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-4 md:w-[455px] lg:w-[455px] lg:grid-cols-[.75fr_1fr]'>
                <li className='row-span-3'>
                  <NavigationMenuLink asChild>
                    <Link
                      className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md font-nanum'
                      href='/'
                    >
                      <MdStars />
                      <div className='mb-2 text-lg font-gmarket font-medium'>인스퍼레이션</div>
                      <p className='text-sm text-muted-foreground break-keep leading-5'>
                        코딩과 관련된 영감들!! 여기오면 확인 할 수 있습니다.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href={'/'}
                      className='font-nanum block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    >
                      <div className='text-md font-medium font-gmarket leading-5'>
                        Codrops 인스퍼레이션
                      </div>
                      <p className='line-clamp-2 text-sm leading-5 text-muted-foreground'>
                        코딩 튜포리얼 사이트의 최강자! 코드롭의 데이터를 봅니다.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href={'/'}
                      className='font-nanum block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    >
                      <div className='text-md font-medium font-gmarket leading-5'>
                        Awwwards 인스퍼레이션
                      </div>
                      <p className='line-clamp-2 text-sm leading-5 text-muted-foreground'>
                        어워드 사이트가 선정한 최신 웹 사이트의 기술을 둘러봅니다.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
