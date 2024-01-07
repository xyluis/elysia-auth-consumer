'use client'

import { openUrlAsPopup } from '@/lib/utils'
import { Button } from './ui/button'
import { getAuthPath } from '@/lib/api'
import React from 'react'

export function LoginButton() {
  const [isLogging, setIsLogging] = React.useState(false)

  async function openLoginPage() {
    setIsLogging(true)

    await openUrlAsPopup(getAuthPath('authorize'))

    setTimeout(() => setIsLogging(false), 5000)
  }

  return (
    <Button onClick={() => openLoginPage()}>
      {isLogging ? 'Logging...' : 'Login'}
    </Button>
  )
}
