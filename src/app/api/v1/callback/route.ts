import { NextRequest, NextResponse } from 'next/server'

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')
  const expiration = searchParams.get('expiration')

  const redirectURL = new URL('/auth', request.url)

  if (!token || !expiration) {
    redirectURL.searchParams.append('status', 'fail')
    return NextResponse.redirect(redirectURL)
  }

  redirectURL.searchParams.append('status', 'success')
  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `@zorin:auth=${token}; Path=/; Max-Age=${expiration};`,
    },
  })
}
