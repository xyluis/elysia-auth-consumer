'use client'

import { DecodedUser, getProfile } from '@/api/get-profile'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Skeleton } from './ui/skeleton'
import { ChevronDown, Cloud, LayoutDashboard, LogOut, User } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

type AccountMenuProps = {
  token: string
}

export function AccountMenu({ token }: AccountMenuProps) {
  const queryClient = useQueryClient()

  const cached = queryClient.getQueryData<DecodedUser>(['me'])

  if (cached) {
    queryClient.setQueryData<DecodedUser>(['me'], cached)
  }

  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['me'],
    queryFn: () => getProfile(token),
    staleTime: Infinity,
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="group focus:bg-zinc-800 hover:bg-zinc-800 data-[state=open]:bg-zinc-800 flex items-center justify-between gap-2 min-w-[10rem] w-full lg:w-fit outline-none ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus-visible:outline-none"
        >
          {isLoadingUser ? (
            <div className="flex items-center justify-center gap-2">
              <Skeleton className="w-6 h-6 rounded" />
              <Skeleton className="h-3 w-32" />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 pointer-events-auto">
              <Image
                src={user?.avatarURL || ''}
                width={24}
                height={24}
                alt={`${user?.username}'s avatar`}
                className="w-6 h-6 rounded object-cover"
              />
              {user?.displayName ?? user?.username}
            </div>
          )}
          <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180 pointer-events-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        sideOffset={5}
        className="min-w-0 w-[var(--radix-popper-anchor-width)]"
      >
        <DropdownMenuLabel className="flex flex-col">
          {isLoadingUser ? (
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          ) : (
            <>
              {user?.displayName ?? user?.username}
              <span className="text-xs font-normal text-muted-foreground">
                @{user?.username}
              </span>
            </>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link className="w-full" href="/account">
              <User className="mr-2 h-4 w-4" />
              <span>Account</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link className="w-full" href="/dashboard">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild disabled>
            <Link className="w-full" href="/docs/api">
              <Cloud className="mr-2 h-4 w-4" />
              <span>API</span>
              <DropdownMenuShortcut>Soon</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            asChild
            className="text-rose-500 dark:text-rose-400 dark:focus:bg-rose-600/10"
          >
            <Link className="w-full" href="/api/v1/sign-out" prefetch={false}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
