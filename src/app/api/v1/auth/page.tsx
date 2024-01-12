'use client'

import { Loader2 } from 'lucide-react'
import { redirect, useSearchParams } from 'next/navigation'
import React from 'react'

export default function AuthPage() {
  React.useEffect(() => {
    const searchParams = useSearchParams()
    const status = searchParams.get('status')

    const hasAuthenticated = status === 'success'

    if (status && window.opener) {
      if (hasAuthenticated) {
        window.opener.location.reload()
      }

      window.close()
    }

    redirect('/')
  }, [])

  return (
    <div className="container relative">
      <div className="w-full min-h-screen flex flex-col gap-6 items-center justify-center">
        <Loader2 className="h-24 w-24 animate-spin" />
      </div>
    </div>
  )
}
