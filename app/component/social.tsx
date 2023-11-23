import Link from "next/link"
import Image from "next/image"

export default function socail () {
    return (
        <div className="text-white pl-4 md:pl-12 " style={{backgroundColor: "#000E1C",
        backgroundRepeat: 'no-repeat'}}>
            <div className="flex flex-wrap space-x-8 md:space-x-32">

            <Link 
            href="https://www.linkedin.com/in/adnan-adil-syed/" target="blank">
<svg xmlns="http://www.w3.org/2000/svg" 
className="icon icon-tabler icon-tabler-brand-linkedin stroke-white 
hover:scale-125 hover:stroke-blue-800" 
width="44" height="44" viewBox="0 0 24 24" 
stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
  <path d="M8 11l0 5" />
  <path d="M8 8l0 .01" />
  <path d="M12 16l0 -5" />
  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
</svg>
            </Link>

            <Link href="https://twitter.com/Adnanadil622" target="blank">
            <svg xmlns="http://www.w3.org/2000/svg" 
            className="icon icon-tabler icon-tabler-brand-x
            stroke-white hover:scale-125 hover:stroke-slate-400
            " width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
</svg>
            </Link>

            <Link href="https://www.behance.net/adnanadil2" target="blank">
            <svg xmlns="http://www.w3.org/2000/svg" 
            className="icon icon-tabler icon-tabler-brand-behance
            hover:stroke-blue-500 stroke-white hover:scale-125
            " width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
  <path d="M3 12l4.5 0" />
  <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
  <path d="M16 6l3 0" />
</svg>
            </Link>


            <Link href="https://github.com/adnanadilalpha" target="blank">
            <svg xmlns="http://www.w3.org/2000/svg" 
            className="icon icon-tabler icon-tabler-brand-github
            hover:stroke-red-500 hover:scale-125 stroke-white
            " width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
</svg>
            </Link>
            </div>
        </div>
    )
}