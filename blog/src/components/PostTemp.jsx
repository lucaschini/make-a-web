import Link from 'next/link'
import Image from 'next/image'
import astronauta from "../../public/astronauta.jpg"

export default function PostTemp(){
    return(
        <Link href="/openPost">
        <article className="flex lg:w-[400px] w-[300px] flex-col items-center justify-center bg-gradient-to-b from-cta to-transparent rounded-xl">
          <Image
            src={astronauta}
            alt="Image post"
            className="lg:h-[400px] lg:w-[400px] h-[300px] w-[300px] mb-8 rounded-t-xl bg-gray-50"
          />
          <div className="text-sm leading-6 text-center">
            <p className="font-medium text-sm lg:text-xl text-white">
              Como fazer um código mais limpo!
            </p>
          </div>
        </article>
      </Link>
    )
}