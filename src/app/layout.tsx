import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
            'min-h-screen bg-zinc-900 font-sans antialiased',
            inter.className,
          )}
        >
          <Providers>
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-zinc-950">
                <main className="flex-1">{children}</main>
              </div>
            </div>
            <Toaster richColors />
          </Providers>
        </body>
      </html>
    </>
  )
}
