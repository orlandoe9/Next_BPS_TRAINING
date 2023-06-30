import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <h1>Hello Orlando</h1>
      <Link href={"/about"}>Go to the About Page</Link>
    </main>
  )
}
