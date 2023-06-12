import Link from "next/link";
import Image from "next/image";

export default function CardPost(props){
    return(
        <Link href={props.arr.category.href}>
        <article className="flex max-w-sm flex-col items-center justify-center bg-gradient-to-b from-cta to-transparent rounded-xl">
          <Image
            src={props.arr.img}
            alt=""
            className="h-64 w-full mb-8 rounded-t-xl bg-gray-50"
            width={0}
            height={0}
          />
          <div className="text-sm leading-6 text-center">
            <p className="font-semibold text-xl text-white">{props.arr.title}</p>
            <p className="">{props.arr.tags}</p>
          </div>
        </article>
      </Link>
    )
}