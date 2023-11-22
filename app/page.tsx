import Image from 'next/image'
import Navbar from '@/app/component/navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
    <div>
      <p>Welcome to Adnan Adil Portfolio
      </p>
      <Link href='/ui/home'>Let's get in</Link>
    </div>
    </main>
  )
}
