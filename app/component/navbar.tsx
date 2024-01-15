'use client';

import Image from "next/image"
import DownloadResumeButton from "../ui/info/resumebtn";
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import { useState } from "react";

export default function Navbar(){

    const pathname =    usePathname();
    const links = [
        { name: 'Home', href: '/ui/home' },
        {
          name: 'About me',
          href: '/ui/info',
        },
      ];

      const [isOpen, setIsOpen] = useState(false);

      const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };
      console.log(isOpen)
      const customStyle = {
        backgroundColor: isOpen ? '#000E1C' : "transparent"
      }
    

      return (
        <nav className="bg-black flex justify-between w-full  md:px-12 md:py-4" 
        style={{backgroundColor: "#000E1C",}}>
          <div className={`flex  w-full  ${isOpen ? 'flex flex-col gap-32 h-screen z-10 fixed' : 'justify-between gap-0'}`} style={customStyle}>
<div className={`md:w-auto ${isOpen ? 'flex justify-between items-center p-4 w-full' : "flex justify-between items-center w-full p-4"}`}>
            <Link href="/ui/home">
              <Image src="/logo.png" width={64} height={64} alt="A symbol logo" className="md:w-16 md:h-16"/>
            </Link>
            {/* Hamburger menu for mobile */}
            <div className="md:hidden">
              <button onClick={toggleNavbar}>
                <svg
                  className="w-8 h-8 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
</div>
    
            {/* Navbar links */}
            <div className={`md:flex md:items-center ${isOpen ? 'flex flex-col items-center gap-12' : 'hidden gap-0'}`}>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block py-2 px-4 md:px-2 text-white hover:text-blue-600 ${
                    pathname === link.href ? 'text-blue-600' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
       <div className="flex md:hidden">
                    <div>
                    </div>

<div className="flex flex-col items-start gap-4">
<Link href="/adnancv.pdf" target="blank">
<button className="border border-blue-700 rounded-sm py-2 w-44 hover:border-blue-400 hover:text-blue-700">
           View Resume
           </button>
</Link>
         <DownloadResumeButton></DownloadResumeButton>
</div>
                </div>
              <div>
                <Image className="md:hidden block fixed bottom-0 left-0" src="/prof.png" width={180} height={180} alt="profile picture"/>
              </div>
            </div>
          </div>
        </nav>
      )
}