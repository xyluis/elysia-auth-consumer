'use client'

import { redirect, useSearchParams } from 'next/navigation'
import React from 'react'

export default function AuthPage() {
  const searchParams = useSearchParams()
  const status = searchParams.get('status')
  const error = searchParams.get('error')

  const hasAuthenticated = status === 'success'

  React.useEffect(() => {
    if (!status && error) return redirect('/')
    if (window.opener && hasAuthenticated) {
      window.opener.location.reload()
    }

    window.close()

    redirect('/')
  }, [hasAuthenticated, status, error])

  return (
    <div className="container relative">
      <div className="w-full min-h-screen flex flex-col gap-6 items-center justify-center">
        <h1>Loading...</h1>
      </div>
    </div>
  )
}
