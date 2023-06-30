import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
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
        <Navbar></Navbar>
        <MyProfilePic></MyProfilePic>
        {children}
        </body>
    </html>
  )
}
