'use client'

import React from 'react'
import { LogIn } from 'lucide-react'

import { openUrlAsPopup } from '@/lib/utils'
import { getAuthPath } from '@/lib/api'

import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'

export function LoginButton() {
  const [isLogging, setIsLogging] = React.useState(false)

  async function openLoginPage() {
    setIsLogging(true)

    await openUrlAsPopup(getAuthPath('authorize'))

    setTimeout(() => setIsLogging(false), 10000)
  }

  return (
    <>
      {isLogging ? (
        <Skeleton className="w-48 h-4 rounded" />
      ) : (
        <Button onClick={() => openLoginPage()}>
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Button>
      )}
    </>
  )
}
