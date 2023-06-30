import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-3xl">Home Page</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  )
}
