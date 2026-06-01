import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maya Sagalin - Builder',
  description:
    'PM with a CS core - building products at the intersection of tech, people, and systems.',
  openGraph: {
    title: 'Maya Sagalin - Builder',
    description:
      'PM with a CS core - building products at the intersection of tech, people, and systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-[#FAFAFA] text-[#1C1C1E] antialiased">
        <Nav />
        {children}
        <footer className="border-t border-gray-100 py-8 px-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Maya Sagalin
        </footer>
      </body>
    </html>
  )
}
