import Link from 'next/link';

export default function Home() {
  return (
    <main className='w-full h-screen fixed flex justify-center items-center' style={{backgroundColor: "#000E1C",
    backgroundRepeat: 'no-repeat'}} >
    <div className='flex flex-col justify-center items-center gap-8 fixed top-1/2'>
      <p className='text-6xl font-bold'>Welcome to Adnan Adil Portfolio
      </p>
      <Link className='uppercase text-2xl text-blue-600 hover:text-cyan-500' href='/ui/home'>Let&apos;s get in...</Link>
    </div>
    </main>
  )
}
