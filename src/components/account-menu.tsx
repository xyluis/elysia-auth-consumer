'use client'

import { getProfile } from '@/api/get-profile'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from './ui/skeleton'
import { ChevronDown, LayoutDashboard, LogOut, User } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

type AccountMenuProps = {
  token: string
}

export function AccountMenu({ token }: AccountMenuProps) {
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
          className="group flex items-center gap-2 min-w-[10rem]"
        >
          {isLoadingUser ? (
            <Skeleton className="h-4 w-40" />
          ) : (
            <div className="flex items-center justify-center gap-2">
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
          <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
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
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            asChild
            className="text-rose-500 dark:text-rose-400"
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
