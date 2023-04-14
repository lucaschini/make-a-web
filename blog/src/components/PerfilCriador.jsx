import Link from "next/link";
import Image from "next/image";

export default function PerfilCriador( props ){
    return(
        <article key={props.post.id} className="flex max-w-xl flex-col items-start justify-between bg-backSecond rounded-xl p-11">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={props.post.datetime}>
                    {props.post.date}
                  </time>
                  <Link
                    href={props.post.category.href}
                    className="relative z-10 rounded-full bg-cta px-3 py-1.5 font-medium  hover:border-2"
                  >
                    {props.post.category.title}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:">
                    <Link href={props.post.href}>
                      <span className="absolute inset-0" />
                      {props.post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 ">{props.post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image src={props.post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-white">
                      <Link href={props.post.author.href}>
                        <span className="absolute inset-0" />
                        {props.post.author.name}
                      </Link>
                    </p>
                    <p className="">{props.post.author.role}</p>
                  </div>
                </div>
              </article>
    )
}