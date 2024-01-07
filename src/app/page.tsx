import { LoginOrUser } from '@/components/login-or-user'

export default function HomePage() {
  return (
    <div className="container relative">
      <div className="w-full min-h-screen flex flex-col gap-6 items-center justify-center">
        <LoginOrUser />
      </div>
    </div>
  )
}
