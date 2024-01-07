import { Button } from '@/components/ui/button'
import { ArrowUpRightSquare } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container relative">
      <div className="w-full min-h-[calc(100vh_-_112px)] flex flex-col gap-6 items-center justify-between">
        <div className="h-px w-px bg-transparent" />
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Read the code below
          </h1>

          <div className="flex items-center justify-center gap-2">
            <Button asChild variant="secondary" size="sm">
              <Link
                href="https://github.com/xyluis/elysia-auth-consumer"
                target="_blank"
              >
                Frontend
                <ArrowUpRightSquare
                  strokeWidth={2.5}
                  className="ml-2 w-4 h-4"
                />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="sm">
              <Link
                href="https://github.com/xyluis/elysia-auth-server"
                target="_blank"
              >
                Backend
                <ArrowUpRightSquare
                  strokeWidth={2.5}
                  className="ml-2 w-4 h-4"
                />
              </Link>
            </Button>
          </div>
        </div>
        <div className="h-px w-px bg-transparent" />
      </div>
    </div>
  )
}
