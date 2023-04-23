import Link from "next/link";

export default function Footer(){
    return (
      <div className="h-52 bg-backSecond p-10 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 ">
        <div className="font-semibold self-center text-center">Entre em nossa comunidade!</div>
        <div className="flex flex-col justify-between h-full items-center text-center">
          <p className="text-2xl font-bold">Explorar</p>
          <div className="flex flex-col gap-2">
            <Link href="/criadores">Criadores</Link>
            <Link href="/posts">Posts</Link>
          </div>
        </div>
      </div>
    );
}