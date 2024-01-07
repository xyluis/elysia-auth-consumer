import { authApi } from '@/lib/api'

export type DecodedUser = {
  id: string
  username: string
  avatarURL: string
  displayName?: string
  iat: number
  exp: number
  sub: string
}

export async function getProfile(token: string) {
  const response = await authApi.get<{ decoded: DecodedUser }>('check', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data.decoded
}
