import Link from "next/link"
import Image from "next/image"

export default function socail () {
    return (
        <div className="text-white pl-12" style={{backgroundColor: "#000E1C",
        backgroundRepeat: 'no-repeat'}}>
            <div className="flex space-x-32">
            <Link href="be">
                <Image
                src="/icons/insta.svg" 
                width={44}
                height={44}
                alt="instagram icon"
                 >

                </Image>
            </Link>

            <Link href="be">
                <Image
                src="/icons/linkd.svg" 
                width={44}
                height={44}
                alt="instagram icon"
                 >

                </Image>
            </Link>

            <Link href="be">
                <Image
                src="/icons/twit.svg" 
                width={44}
                height={44}
                alt="instagram icon"
                 >

                </Image>
            </Link>

            <Link href="be">
                <Image
                src="/icons/be.svg" 
                width={44}
                height={44}
                alt="instagram icon"
                 >

                </Image>
            </Link>

            <Link href="be">
                <Image
                src="/icons/drib.svg" 
                width={44}
                height={44}
                alt="instagram icon"
                 >

                </Image>
            </Link>

            <Link href="be">
                <Image
                src="/icons/git.svg" 
                width={44}
                height={44}
                alt="instagram icon"
                 >

                </Image>
            </Link>
            </div>
        </div>
    )
}