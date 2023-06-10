import Image from "next/image";
import Link from "next/link";

import headerImg from "../../public/background.png";
import iconImg from "../../public/npp.jpg";

import Socials from "./Socials";
import PostTemp from "./PostTemp";

export default function CreatorContent() {
  return (
    <>
      <div className="static bg-back pb-20">
        <Image src={headerImg} alt="Header" className="w-full max-h-[500px]" />
        <Image
          src={iconImg}
          alt="Imagem de perfil"
          className="w-40 h-40 relative bottom-28 left-28 rounded-xl shadow-lg"
        />
        <div className="ml-28 pb-16 flex flex-col gap-4">
          <p className="font-bold text-5xl">Nicolas Pereira Paz</p>
          <p className="text-3xl text-caption">Bio:</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            culpa modi ipsa sunt facere magni porro odio nisi pariatur quos
            reiciendis, quo eos praesentium voluptate voluptatibus id animi
            mollitia! Exercitationem.
          </p>
          <p className="text-xl text-caption">Links:</p>
          <Socials />
        </div>
        <div className="flex justify-center">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <PostTemp />
            <PostTemp />
            <PostTemp />
          </div>
        </div>
      </div>
    </>
  );
}
