import { UserInfo } from './user-info'
import { LoginButton } from './login-button'
import { cookies } from 'next/headers'

export async function LoginOrUser() {
  const token = cookies().get('auth')?.value

  return (
    <div className="flex items-center justify-center">
      {token ? <UserInfo /> : <LoginButton />}
    </div>
  )
}
