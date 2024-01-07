'use client'

import { redirect, useSearchParams } from 'next/navigation'
import React from 'react'

export default function CallbackPage() {
  const query = useSearchParams().get('status')

  const hasAuthenticated = query === 'success'

  React.useEffect(() => {
    if (!query) return redirect('/')
    if (window.opener && hasAuthenticated) {
      window.opener.location.reload()
    }

    window.close()

    redirect('/')
  }, [hasAuthenticated, query])

  return (
    <div className="container relative">
      <div className="w-full min-h-screen flex flex-col gap-6 items-center justify-center">
        <h1>Loading...</h1>
      </div>
    </div>
  )
}
