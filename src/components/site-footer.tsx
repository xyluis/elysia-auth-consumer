export function SiteFooter() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-[1216px] w-full h-12 container flex items-center justify-center md:justify-start">
        <p className="text-balance text-center text-sm leading-loose text-zinc-500 md:text-left">
          © {new Date().getFullYear()}. Built by{' '}
          <a
            href="https://github.com/xyluis"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            @xyluis
          </a>
          . The source code is available on{' '}
          <a
            href="https://github.com/xyluis/elysia-auth-consumer"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  )
}
