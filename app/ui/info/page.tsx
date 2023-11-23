import Image from "next/image"

export default function page () {
    return (
        <div className="text-slate-50 w-full h-full p-12 justify-center flex flex-col" 
        style={{backgroundColor: "#000E1C",}}>
        {/*first section for about*/}
        <div className="w-full flex">
        <div className="w-3/5 text-base leading-normal flex flex-col gap-4 overflow-hidden shrink-0 z-0">
        <h1 className="text-4xl font-bold uppercase mb-4">
        About me!
        </h1>
        
        <p>
        🚀 Orchestrating Unforgettable Digital Journeys |
         Full Stack Designer 🎨 |
         Weaving Experiences at 
         the Nexus of Design and Development 💻
        </p>
        <p>
        Embarking on a dynamic creative odyssey,
         I am a fervent Full Stack Designer 
         who marries artistry with technology 
         to sculpt digital landscapes that leave an 
         enduring emotional resonance. My 
         prowess in UX/UI design and frontend 
         development empowers me to conceive 
         interfaces that captivate and profoundly connect.
        </p>
        <p>
        From igniting the spark of concept
         to finalizing the code strokes, 
         I am unwavering in my commitment 
         to materialize your vision. Each 
         project is a narrative yearning to unfurl, 
         and I immerse myself in your brand essence, 
         ensuring each pixel and interaction resonates deeply with
         your target audience, fostering authentic bonds.
        </p>
        <p>
        In the realm of design, I'm a passionate advocate 
        for the human touch. Each click, 
        every swipe, is a chance to orchestrate 
        a symphony of delight, harmonizing 
        with users' needs. I offer dynamic 
        user testing services to infuse 
        vitality into your aspirations, 
        collaborating to craft experiences that 
        resonate and empower your journey to excellence.
        </p>
        <p>
        Together, let's breathe soul, 
        intent, and innovation into your digital presence.
        </p>
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