'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { redirect, useSearchParams } from 'next/navigation'
import React from 'react'

export default function AuthPage() {
  const searchParams = useSearchParams()
  const status = searchParams.get('status')

  const hasAuthenticated = status === 'success'

  React.useEffect(() => {
    if (status && window.opener) {
      switch (status) {
        case 'success':
          window.opener.location.reload()
          break
      }

      window.close()
    }

    redirect('/')
  }, [hasAuthenticated, status])

  return (
    <div className="container relative">
      <div className="w-full min-h-screen flex flex-col gap-6 items-center justify-center">
        <Skeleton className="w-1/2 h-5 rounded" />
      </div>
    </div>
  )
}
