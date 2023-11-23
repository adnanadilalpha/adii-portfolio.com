'use client';

import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"

export default function Navbar(){
    const pathname =    usePathname();
    const links = [
        { name: 'Home', href: '/ui/home' },
        {
          name: 'About me',
          href: '/ui/info',
        },
        {
            name: 'Resume',
            href: '/ui/resume',
        }
      ];

    return (
        <div className="flex justify-between px-12 py-12 w-full h-24" style={{backgroundColor: "#000E1C",
        backgroundRepeat: 'no-repeat'}}>
         <Link href='/ui/home'>
            <Image 
            src='/logo.svg' 
            width={64} 
            height={64}
            alt="A symbol logo"
            ></Image>
         </Link>
         <div className="space-x-8 flex">
         {links.map((link) => {
        const LinkIcon = link;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex   hover:text-blue-600 md:flex-none md:justify-start ',
              {
                ' text-blue-600': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
         </div>
        </div>
    )
}