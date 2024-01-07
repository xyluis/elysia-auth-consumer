'use client'

import React from 'react'
import { Loader2, LogIn } from 'lucide-react'

import { openUrlAsPopup } from '@/lib/utils'
import { getAuthPath } from '@/lib/api'

import { Button } from './ui/button'

export function LoginButton() {
  const [isLogging, setIsLogging] = React.useState(false)

  async function openLoginPage() {
    setIsLogging(true)

    await openUrlAsPopup(getAuthPath('authorize'))

    return setTimeout(() => setIsLogging(false), 10000)
  }

  return (
    <Button
      disabled={isLogging}
      onClick={() => openLoginPage()}
      size={isLogging ? 'icon' : 'default'}
    >
      {isLogging ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <>
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </>
      )}
    </Button>
  )
}
