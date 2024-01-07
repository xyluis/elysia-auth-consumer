import { buttonVariants } from '@/components/ui/button'
import { Home } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container relative">
      <div className="w-full min-h-[calc(100vh_-_64px)] flex flex-col gap-6 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase">
            Page Not Found
          </h1>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The page you are looking for was not found
          </p>
        </div>

        <Link href="/" className={buttonVariants({})}>
          <Home className="mr-2 w-4 h-4" />
          Go back to Home
        </Link>
      </div>
    </div>
  )
}
