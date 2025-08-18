import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Full Stack Developer',
  description: 'Professional portfolio showcasing web development, mentorship, and technical expertise',
  keywords: ['portfolio', 'developer', 'web development', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Your Name' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  )
} 