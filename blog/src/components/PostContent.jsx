import Image from "next/image"
import Link from "next/link"

import headerImg from "../../public/background.png";

export default function PostContent(props) {
    return(
        <div className=" bg-back pb-20">
        <Image src={headerImg} alt="Header" className="w-full max-h-[500px]" />
        <div className="py-16 flex flex-col items-center gap-8">
          <p className="font-bold text-5xl">Como fazer um código mais limpo</p>
          <p className="text-3xl text-caption">Por <Link href="/creatorPage" className="hover:text-white">Nicolas Pereira Paz</Link></p>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            culpa modi ipsa sunt facere magni porro odio nisi pariatur quos
            reiciendis, quo eos praesentium voluptate voluptatibus id animi
            mollitia! Exercitationem.
          </p>
        </div>
      </div>
    )
}