import axios from 'axios'

export function getAuthUrl() {
  return process.env.NEXT_PUBLIC_AUTH_URI as string
}

export function getAuthPath(path: string) {
  return `${getAuthUrl()}/${path}`
}

export const authApi = axios.create({
  baseURL: getAuthUrl(),
  withCredentials: true,
})
