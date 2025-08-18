import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  }).format(new Date(date))
}

export function formatDateShort(date: string | Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date))
}

export function getYearsOfExperience(startDate: string) {
  const start = new Date(startDate)
  const now = new Date()
  const years = now.getFullYear() - start.getFullYear()
  const months = now.getMonth() - start.getMonth()
  
  return months < 0 ? years - 1 : years
}

export function getCurrentYear() {
  // Use a fixed timezone to avoid hydration mismatches
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date())
} 




