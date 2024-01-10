import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)

  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

type QueryObject = {
  [key: string]: unknown
}

export function objectToQuery(obj: QueryObject, join = '&') {
  return Object.entries(obj)
    .map((a) => a.join('='))
    .join(join)
}

export async function openUrlAsPopup(url: string, width = 500, height = 850) {
  const left = window.innerWidth / 2 - width / 2
  const top = window.innerHeight / 2 - height / 2

  const features = {
    popup: true,
    opener: true,
    height,
    width,
    top,
    left,
  }

  const query = objectToQuery(features, ',')

  return window.open(url, '_blank', query)
}
