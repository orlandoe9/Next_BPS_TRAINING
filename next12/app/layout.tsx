import './globals.css'
import Navbar from './components/Navbar'
import Image from 'next/image'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Orlando's Blog",
  description: 'Created by Orlando Garcia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
        {children}
        </main>
        </body>
    </html>
  )
}
