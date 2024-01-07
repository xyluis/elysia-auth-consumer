import React from 'react'

type AuthProviderState = {
  isLogging: boolean
  setIsLogging: (state: boolean) => void
}

const initialState: AuthProviderState = {
  isLogging: false,
  setIsLogging: () => null,
}

export const AuthProviderContext = React.createContext(initialState)

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [isLogging, setIsLogging] = React.useState(false)

  return (
    <AuthProviderContext.Provider value={{ isLogging, setIsLogging }}>
      {children}
    </AuthProviderContext.Provider>
  )
}
