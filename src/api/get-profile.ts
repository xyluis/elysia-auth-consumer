import { authApi } from '@/lib/api'

export type DecodedUser = {
  id: string
  username: string
  iat: number
  exp: number
  sub: string
}

export async function getProfile() {
  console.log('get profile')

  const response = await authApi.get<{ decoded: DecodedUser }>('check')

  return response.data.decoded
}
