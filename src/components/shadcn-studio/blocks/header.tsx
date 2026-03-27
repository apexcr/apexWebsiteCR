'use client'

import MenuDropdown from '@/components/shadcn-studio/blocks/menu-dropdown'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'
import MenuNavigation from '@/components/shadcn-studio/blocks/menu-navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CalendarClockIcon, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 h-17.5 w-full border-b transition-all duration-300',
        {
          'bg-background shadow-md': isScrolled,
        },
        className,
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/apex-peptides-icon-white.svg"
            alt="Apex Peptides Logo"
            width={32}
            height={32}
          />
          <span className="text-primary text-[20px] font-semibold">
            Apex Peptides
          </span>
        </Link>

        {/* Navigation */}
        <MenuNavigation
          navigationData={navigationData}
          className="max-lg:hidden **:data-[slot=navigation-menu-list]:gap-1"
        />

        {/* Actions */}
        <div className="flex gap-4">
          <Button className="rounded-full max-sm:hidden" asChild>
            <a href="#">Book table</a>
          </Button>

          {/* Navigation for small screens */}
          <div className="flex gap-3">
            <Button size="icon" className="rounded-full sm:hidden" asChild>
              <a href="#">
                <CalendarClockIcon />
                <span className="sr-only">Book table</span>
              </a>
            </Button>

            <MenuDropdown
              align="end"
              navigationData={navigationData}
              trigger={
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full lg:hidden"
                >
                  <MenuIcon />
                  <span className="sr-only">Menu</span>
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
