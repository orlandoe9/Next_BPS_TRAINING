import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaLaptop, FaInstagram, FaFacebook } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col lg:flex-row">
          <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/" className="text-white no-underline hover:text-black">Orlando Garcia</Link>
          </h1>
          <div className="flex flex-row justify-center md:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                <Link className="text-white/90 hover:text-black" href="https://github.com/orlandoe9">
                  <FaGithub />
                </Link>
                <Link className="text-white/90 hover:text-black" href="https://twitter.com/orlandogrciab">
                  <FaTwitter /> 
                </Link>
                <Link className="text-white/90 hover:text-black" href="https://www.facebook.com/orlando.barba.90/">
                   <FaFacebook/>
                </Link>
                <Link className="text-white/90 hover:text-black" href="https://www.instagram.com/orlandogrciab/">
                    <FaInstagram/>
                </Link>
          </div>
        </div>
    </nav>
  )
}
