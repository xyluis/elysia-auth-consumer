import type { Metadata } from 'next'
import './globals.css'

import { cn } from '@/lib/utils'
import { fontSans } from '@/lib/fonts'

import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/sonner'
import { SiteHeader } from '@/components/site-header'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Discord OAuth2 w/ Elysia',
  description:
    'A simple app that handle Discord OAuth2 with NextJS, Bun and ElysiaJS',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen font-sans antialiased',
            fontSans.className,
          )}
        >
          <Providers>
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-zinc-950">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
              </div>
            </div>
            <TailwindIndicator />
            <Toaster richColors />
          </Providers>
        </body>
      </html>
    </>
  )
}
