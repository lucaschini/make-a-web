import Link from "next/link";
import Image from "next/image";
import coding from "../../public/coding.jpg"

export default function Post(props){
    return(
        <Link href={props.post.author.href}>
        <article className="flex max-w-sm flex-col items-center justify-center bg-gradient-to-b from-cta to-back rounded-xl">
          <Image
            src={coding}
            alt=""
            className="h-64 w-full mb-8 rounded-t-xl bg-gray-50"
            width={0}
            height={0}
          />
          <div className="text-sm leading-6 text-center">
            <p className="font-semibold text-xl text-white">Como fazer um código mais limpo!</p>
            <p className="">30403 likes ❤</p>
          </div>
        </article>
      </Link>
    )
}