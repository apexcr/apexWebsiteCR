// import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'

import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Cal_Sans, Geist, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const calSans = Cal_Sans({
  subsets: ['latin'],
  weight: '400',
  adjustFontFallback: false,
  variable: '--font-cal-sans',
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

// const navigationData: NavigationSection[] = [
//   {
//     title: 'About Us',
//     href: '#',
//   },
//   {
//     title: 'Testimonials',
//     href: '#',
//   },
//   {
//     title: 'Contact us',
//     href: '#',
//   },
//   {
//     title: 'Offers',
//     href: '#',
//   },
// ]

export const metadata: Metadata = {
  title: 'Péptidos en Costa Rica | Apex Peptides CR Oficial',
  description:
    'Compra péptidos Apex en Costa Rica: Retatrutide, Tirzepatide, Semaglutide, BPC-157, TB-500 y más. Calidad premium, información clara y envíos a todo el país.',
  keywords: [
    'péptidos en Costa Rica',
    'Apex Peptides CR',
    'Retatrutide Costa Rica',
    'Tirzepatide Costa Rica',
    'Semaglutide Costa Rica',
    'BPC-157 Costa Rica',
    'TB-500 Costa Rica',
    'comprar péptidos Costa Rica',
    'péptidos de alta calidad Costa Rica',
    'apex peptides cr',
    'ghk cu costa rica',
    'melanotan costa rica',
    'peptides costa rica',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'dark',
        'h-full',
        'antialiased',
        geistSans.variable,
        calSans.variable,
        jetBrainsMono.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        {/* <Header navigationData={navigationData} /> */}
        <main className="flex flex-1 flex-col pt-17.5">{children}</main>
      </body>
    </html>
  )
}
