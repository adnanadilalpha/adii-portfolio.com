import Image from "next/image";
import Link from "next/link";


export default function page (){
  
  return (


    // main container
    <div className="text-slate-50 w-full h-full p-4 md:p-12 justify-center flex flex-col"
    style={{backgroundColor: "#000E1C",}}>
 {/*first section for profession*/}
 <div className="flex flex-col gap-6 mb-8">
  <div className="mb-4">
  </div>
  <h1 className="uppercase text-center md:text-left text-xl md:text-3xl lg:text-4xl font-semibold">
    Hello There,
  </h1>
  <p className="text-lg text-center md:text-left md:text-2xl font-medium">
    Welcome to my portfolio.
  </p>
  <h1 className="uppercase text-center md:text-left text-2xl md:text-4xl lg:text-5xl font-extrabold">
    Adnan Adil Full Stack Designer
    </h1>
 </div>

{/*second section for portfolio*/}
 <div className="w-full flex">
 <div className="flex-wrap md:flex gap-8 overflow-hidden lg:shrink-0 z-0">
 <div className=" w-auto md:w-96 flex items-center md:fixed pb-4 right-12 top-60">
<Image
src="/portfolio/tag.png"
width={460}
height={420}
alt="professional photo"
>

</Image>
  </div>
 <div className="space-y-6 flex flex-col items-center pb-4 md:block md:pb-0">
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
<div className="space-y-6 flex flex-col items-center pb-4 md:block md:pb-0">
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
<div className="space-y-6 flex flex-col items-center pb-4 md:block md:pb-0">
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
 </div>
    </div>
  )
}