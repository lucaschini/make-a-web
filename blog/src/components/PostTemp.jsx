import Link from 'next/link'
import Image from 'next/image'
import astronauta from "../../public/astronauta.jpg"

export default function PostTemp(){
    return(
        <Link href="../pages/index">
        <article className="flex max-w-sm flex-col items-center justify-center bg-gradient-to-b from-cta to-transparent rounded-xl">
          <Image
            src={astronauta}
            alt=""
            className=" mb-8 rounded-t-xl bg-gray-50"
            width={400}
            height={400}
          />
          <div className="text-sm leading-6 text-center">
            <p className="font-semibold text-xl text-white">
              Como fazer um código mais limpo!
            </p>
          </div>
        </article>
      </Link>
    )
}