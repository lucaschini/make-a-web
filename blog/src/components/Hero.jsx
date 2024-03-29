import Image from "next/image"
import Link from "next/link";
import 'atropos/css'
import Atropos from 'atropos/react';

import { MdOutlineRocketLaunch } from "react-icons/md";

import heroimg from "../../public/hero_image.jpg"

export default function Hero(){
    return(
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="flex flex-col gap-14 text-center items-center">
                <div className="flex flex-col gap-5">
                    <h1 className="text-6xl">Faça o simples ser simples!</h1>
                    <p>Interaja com outros usuários e esteja antenado na Web 3.0</p>
                </div>
                <Link href="/login" className="px-5 py-3 bg-cta rounded-xl w-1/2 drop-shadow-xl flex items-center justify-center gap-2">Criar <MdOutlineRocketLaunch /></Link>
            </div>
            <Atropos >
                <Image
                    alt="Mountains"
                    src={heroimg}
                    className="rounded-xl max-w-sm lg:max-w-2xl drop-shadow-xl"
                />
            </Atropos>
        </div>
    )
}