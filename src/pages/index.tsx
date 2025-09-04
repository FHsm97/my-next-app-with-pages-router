import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  const router=useRouter()
  return (
    <ul>
      <li>
        <Link href='/'>
          Home
        </Link>
      </li>
      <li>
        <Link href='/posts'>
          Posts
        </Link>

      </li>
      <li>
        <Link href='/about'>
          About
        </Link>
      </li>

      <button className="bg-gray-100 py-1 px-2 rounded font-bold" onClick={()=>router.push('/contact-us')}>
        go to contact
      </button>
    </ul>
  );
}
