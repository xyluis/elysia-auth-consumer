'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

import { Skeleton } from './ui/skeleton'
import { getProfile } from '@/api/get-profile'
import { signOut } from '@/api/sign-out'
import { Button } from './ui/button'

export function UserInfo() {
  const { replace } = useRouter()

  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['me'],
    queryFn: getProfile,
    staleTime: Infinity,
  })

  const { isPending: isSigningOut, mutateAsync: handleSignOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      replace('/')
    },
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
            Logged as <span className="text-violet-500">@{user?.username}</span>
          </h1>

          <Button disabled={isSigningOut} onClick={() => handleSignOut()}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      )}
    </>
  )
}
