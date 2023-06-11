import Link from "next/link";
import Image from "next/image";
import npp from "../../public/npp.jpg"

export default function PerfilCriador( props ){
    return (
      <Link href={props.arr.category.href}>
        <article className="flex max-w-sm flex-col items-center justify-center bg-gradient-to-b from-cta to-transparent rounded-xl p-11">
          <span className="relative top-0 right-32  px-4 py-2 rounded-full bg-back">{props.post.id}</span>
          <Image
            src={props.arr.author.icon}
            alt=""
            className=" mb-8 rounded-full bg-gray-50"
            width={200}
            height={200}
          />
          <div className="text-sm leading-6 text-center">
            <p className="font-semibold text-xl text-white">{props.arr.author.name}</p>
            <p className="">{props.arr.author.desc}</p>
          </div>
        </article>
      </Link>
    );
}