import Link from "next/link";

import Socials from "./Socials";

export default function Footer(){
    return (
      <div className="h-52 bg-backSecond p-10 grid grid-cols-1 grid-rows-2 gap-11 md:grid-cols-2 md:grid-rows-1 ">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="font-medium self-center text-center text-caption">Join our communities!</div>
          < Socials/>
        </div>
        <div className="flex flex-col justify-center h-full items-center text-center gap-2">
          <div className="flex flex-col gap-2 text-caption">
            <Link href="/criadores" className="hover:text-white">Creators</Link>
            <Link href="/posts" className="hover:text-white">Posts</Link>
          </div>
        </div>
      </div>
    );
}