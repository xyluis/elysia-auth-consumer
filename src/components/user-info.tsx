'use client'

import { useQuery } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'

import { Skeleton } from './ui/skeleton'
import { getProfile } from '@/api/get-profile'
import { Button } from './ui/button'
import Link from 'next/link'

type UserInfoProps = {
  token: string
}

export function UserInfo({ token }: UserInfoProps) {
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['me'],
    queryFn: () => getProfile(token),
    staleTime: Infinity,
  })

  return (
    <>
      {isLoadingUser ? (
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold text-2xl">
            Logged as{' '}
            <span className="text-zinc-500 underline decoration-zinc-500">
              @{user?.username}
            </span>
          </h1>

          <Button asChild variant="destructive">
            <Link href="/api/v1/sign-out" prefetch={false}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Link>
          </Button>
        </div>
      )}
    </>
  )
}
