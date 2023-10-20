import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KanTech',
  description: 'Online order app for Kantek',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex md:w-1/3 md:mx-auto bg-only-black text-only-white`}>{children}</body>
    </html>
  )
}
