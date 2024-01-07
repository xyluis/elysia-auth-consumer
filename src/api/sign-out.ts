import { authApi } from '@/lib/api'

export async function signOut() {
  await authApi.post('/sign-out')
}
