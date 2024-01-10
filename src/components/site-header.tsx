import { cookies } from 'next/headers'
import { AccountMenu } from './account-menu'
import { LoginButton } from './login-button'
import { Link as LucideLink } from 'lucide-react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

export function SiteHeader() {
  const token = cookies().get('@zorin:auth')?.value

  return (
    <div className="w-full border-b">
      <div className="container flex w-full h-16 max-w-[1216px] items-center justify-between">
        <Link href="/" className="flex items-center justify-center gap-2">
          <LucideLink strokeWidth={3} />
          <div className="hidden md:flex flex-col m-0 items-start justify-center">
            <h1 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Discord OAuth2 w/ Elysia
            </h1>
            <p className="text-xs font-bold text-zinc-500">by @xyluis </p>
          </div>
        </Link>

        <div className="ml-auto flex items-center justify-center space-x-2">
          {token ? <AccountMenu token={token} /> : <LoginButton />}
          <p className="text-zinc-500 hidden md:flex">{formatDate(new Date().getTime())}</p>
        </div>
      </div>
    </div>
  )
}
