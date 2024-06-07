'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NavLink } from './nav-items'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer'

export function Header() {
  const pathname = usePathname()

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <header className="">
      <div className="p-2 px-4  mx-auto w-full max-w-[1885px] flex items-center justify-between">
        {/* <Image src="/images/point.svg" alt="logo" width={38} height={38} /> */}
        <h1 className='text-base font-general font-semibold '>Julius.Caezar</h1>
        
        <nav className="hidden md:flex items-center gap-4">
          <NavLink href="/app" active={isActive('/app')}>
            Projetos
          </NavLink>
          <NavLink href="/projects" active={isActive('/projects')}>
            Sobre
          </NavLink>
          <NavLink href="/projects" active={isActive('/projects')}>
            Contato
          </NavLink>
        </nav>

        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger>
              <HamburgerMenuIcon className='w-[38px] h-[38px]'/>
            </DrawerTrigger>
            <DrawerContent>
              <nav className="flex flex-col items-center gap-4">
                <NavLink href="/app" active={isActive('/app')}>
                  Blog
                </NavLink>
                <NavLink href="/projects" active={isActive('/projects')}>
                  Projects
                </NavLink>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
}
