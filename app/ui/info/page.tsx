'use client'

import Image from "next/image"
import Link from "next/link"
import DownloadResumeButton from "./resumebtn"

export default function page () {
    return (
        <div className="text-slate-50 w-full h-full p-4 md:p-12 justify-center flex flex-col" 
        style={{backgroundColor: "#000E1C",}}>
        {/*first section for about*/}
        <div className="w-full flex flex-col">
        <div className="md:w-3/5 text-base leading-normal flex flex-col gap-4 shrink-0 z-0">
        <h1 className="text-4xl font-bold uppercase mb-4">
        About me!
        </h1>
        
        <p className="font-bold text-2xl">
        Short Description
        </p>
        <p>
🚀 Passionate Full Stack Designer weaving artistry 
and technology to craft 
unforgettable digital journeys 
at the nexus of design and development. 💻
        </p>
        <p className="font-bold text-2xl">Skills
        </p>
        <p>
| 🎨 UX/UI Design  <br />| 💻 
Frontend Development  <br />
| 🌐 Creative Conceptualization  <br />
| 🤝 Authentic Bonding
        </p>
        <p className="font-bold text-2xl">
        Impact Created
        </p>
        <p className="leading-6">
Embark on a dynamic creative odyssey where 
each pixel and interaction resonates deeply. 
From concept spark to code strokes, I commit 
to materializing your vision, crafting experiences 
that empower your journey to excellence. Together, 
let&apos;s breathe soul, intent, and innovation 
into your digital presence.
        </p>
        </div>
        <div className="w-96 flex flex-col gap-6 items-center fixed right-12 top-60">
       <Image className="hidden md:block"
       src="/portfolio/tag.png"
       width={460}
       height={420}
       alt="professional photo"
       >
       </Image>

       <div className="hidden md:flex">
                    <div>
                    </div>

<div className="flex items-start gap-4">
<Link href="/adnancv.pdf" target="blank">
<button className="border border-blue-700 rounded-sm py-2 w-44 hover:border-blue-400 hover:text-blue-700">
           View Resume
           </button>
</Link>
         <DownloadResumeButton></DownloadResumeButton>
</div>
                </div>
         </div>
        </div>
           </div>
    )
}