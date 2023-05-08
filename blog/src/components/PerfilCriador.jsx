import Link from "next/link";
import Image from "next/image";
import npp from "../../public/npp.jpg"

export default function PerfilCriador( props ){
    return (
      <Link href={props.post.author.href}>
        <article className="flex max-w-sm flex-col items-center justify-center bg-gradient-to-b from-cta to-back rounded-xl p-11">
          <span className="relative top-0 right-32  px-4 py-2 rounded-full bg-back">{props.post.id}</span>
          <Image
            src={npp}
            alt=""
            className=" mb-8 rounded-full bg-gray-50"
            width={200}
            height={200}
          />
          <div className="text-sm leading-6 text-center">
            <p className="font-semibold text-xl text-white">{props.post.author.name}</p>
            <p className="">Seguidores: {props.post.author.seguidores}</p>
          </div>
        </article>
      </Link>
    );
}