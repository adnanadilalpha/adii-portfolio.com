import Image from "next/image";
import Link from "next/link";


export default function page (){
  
  return (


    // main container
    <div className="text-slate-50 w-full h-full p-12 justify-center flex flex-col"
    style={{backgroundColor: "#000E1C",}}>
 {/*first section for profession*/}
 <div className="flex flex-col  gap-6 mb-8">
  <div className="mb-4">
    <h1 className="uppercase text-5xl font-extrabold">
    Adnan Adil Full Stack Designer
    </h1>
  </div>
  <h1 className="uppercase text-4xl font-semibold">
    Hello There,
  </h1>
  <p className="text-2xl font-medium">
    Welcome to my portfolio.
  </p>
 </div>

{/*second section for portfolio*/}
 <div className="w-full flex">
 <div className="flex gap-8 overflow-hidden shrink-0 z-0">
 <div className="space-y-6">
<Link href=''>
 <Image className="rounded-lg border"
 src='/portfolio/dub.png' 
 width={320}
 height={220}
 alt="dubdubai project overview"
 >

 </Image>
  </Link>
  <div>
    <Link href="link">
     <h3 className="text-white uppercase text-lg">dubdubai case study</h3>
    </Link>
  </div>
</div>
<div className="space-y-6">
<Link href=''>
 <Image className="rounded-lg border"
 src='/portfolio/up.png' 
 width={320}
 height={220}
 alt="dubdubai project overview"
 >

 </Image>
  </Link>
  <div>
    <Link href="link">
     <h3 className="text-white uppercase text-lg">Upland case study</h3>
    </Link>
  </div>
</div>
<div className="space-y-6">
<Link href=''>
 <Image className="rounded-lg border"
 src='/portfolio/alp.png' 
 width={320}
 height={220}
 alt="dubdubai project overview"
 >

 </Image>
  </Link>
  <div>
    <Link href="link">
     <h3 className="text-white uppercase text-lg">Alpha Squad Website</h3>
    </Link>
  </div>
</div>
 </div>
 <div className="w-96 flex items-center fixed right-12 top-60">
<Image
src="/portfolio/tag.png"
width={460}
height={420}
alt="professional photo"
>

</Image>
  </div>
 </div>
    </div>
  )
}