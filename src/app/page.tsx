import { Button } from '@/components/ui/button'
import { ArrowUpRightSquare, Info } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container relative">
      <div className="w-full min-h-[calc(100vh_-_64px)] flex flex-col gap-6 items-center justify-between py-6">
        <div className="h-px w-px bg-transparent" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <Button asChild variant="secondary" size="sm">
            <Link
              href="https://github.com/xyluis/elysia-auth-consumer"
              target="_blank"
            >
              Frontend
              <ArrowUpRightSquare strokeWidth={2.5} className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link
              href="https://github.com/xyluis/elysia-auth-server"
              target="_blank"
            >
              Backend
              <ArrowUpRightSquare strokeWidth={2.5} className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <p className="text-sm text-zinc-500 flex gap-1 items-center justify-center">
            <Info className="h-4 w-4" />
            This is a demo by
          </p>
          <a
            href="https://github.com/xyluis"
            target="_blank"
            className="text-sm text-zinc-500 underline underline-offset-4 hover:text-zinc-400"
          >
            @xyluis
          </a>
        </div>
      </div>
    </div>
  )
}
