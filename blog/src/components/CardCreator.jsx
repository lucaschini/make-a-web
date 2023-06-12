import Link from 'next/link'
import Image from 'next/image'

export default function CardCreator(props){
    return(
      <Link href="/creatorPage">
      <article className="flex max-w-sm min-h-[350px] flex-col items-center justify-center bg-gradient-to-b from-cta to-transparent rounded-xl p-11">
        <Image
          src={props.arr.author.icon}
          alt=""
          className="mb-8 rounded-full w-[160px] h-[160px] bg-gray-50 shadow-lg"
        />
        <div className="leading-6 text-center">
          <p className="font-semibold text-xl text-white pb-2">{props.arr.author.name}</p>
          <p className="text-sm">{props.arr.author.desc}</p>
        </div>
      </article>
    </Link>
    )
}