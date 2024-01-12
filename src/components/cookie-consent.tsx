import { Cookie } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'
import { cookies } from 'next/headers'

export function CookieConsent() {
  const cookie = cookies().get('cookie-consent')?.value

  if (cookie && cookie === 'yes') return null

  return (
    <div className="w-full bg-transparent flex items-center justify-center fixed bottom-0 md:bottom-12">
      <div className="max-w-[1216px] bg-zinc-950 h-24 shadow-md w-full flex items-center justify-between px-6 rounded-none md:rounded border-t md:border">
        <div className="flex items-center justify-start gap-6">
          <Cookie className="h-8 w-8" />
          <div className="flex flex-col items-start justify-center">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              We use cookies to enhance your user experience
            </h4>
            <div className="flex items-center justify-center gap-1">
              <p className="text-sm text-zinc-600">
                By using our website, you agree to our use of cookies.
              </p>
              <Link
                href="/cookies"
                className="text-sm hover:underline hover:underline-offset-2"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <Button asChild>
          <Link href="/api/v1/cookie-consent" prefetch={false}>
            Accept
          </Link>
        </Button>
      </div>
    </div>
  )
}
