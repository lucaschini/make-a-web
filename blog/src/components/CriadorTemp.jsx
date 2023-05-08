import Link from 'next/link'
import Image from 'next/image'
import dino from "../../public/dino.jpg"

export default function CriadorTemp(){
    return(
      <Link href="../pages/index">
      <article className="flex max-w-sm flex-col items-center justify-center bg-gradient-to-b from-cta to-back rounded-xl p-11">
        <Image
          src={dino}
          alt=""
          className="mb-8 rounded-full bg-gray-50"
          width={160}
          height={160}
        />
        <div className="text-sm leading-6 text-center">
          <p className="font-semibold text-xl text-white">Julio Paulo</p>
          <p className="">Seguidores: 230920</p>
        </div>
      </article>
    </Link>
    )
}