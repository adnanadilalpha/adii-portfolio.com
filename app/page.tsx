import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='w-full h-screen fixed flex justify-center items-center' style={{backgroundColor: "#000E1C",
    backgroundRepeat: 'no-repeat'}} >
      <div className='flex justify-center'>
<Image className='fixed top-28 '
        src='/giphy.gif'
        width={200}
        height={200}
        alt='' />
      </div>
    <div className='flex flex-col text-center justify-center items-center gap-4 md:gap-8 fixed md:top-1/2'>
      <p className='text-2xl md:text-4xl xl:text-6xl font-bold'>Welcome to Adnan Adil Portfolio
      </p>
      <Link className='animate-bounce hover:animate-none bg-blue-500 uppercase text-xl text-white
       hover:text-slate-800 md:text-2xl px-4 py-3 rounded-lg' href='/ui/home'>
        Let&apos;s get in</Link>
    </div>
    </main>
  )
}
