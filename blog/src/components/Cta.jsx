import Link from "next/link";
import Image from "next/image";
import imageCta from '../../public/cat.webp'
import { MdOutlineEmail } from "react-icons/md";

export default function Cta(){
    return(
        <div className="container w-screen flex justify-center items-center mb-28">
            <div className="mx-4 shadow-sm bg-backSecond rounded-[30px] md:rounded-[60px] flex flex-col md:flex-row items-center gap-5 p-8 md:gap-11 md:p-10">
                <Image src={imageCta} width={0} height={0} className="shadow-md md:w-1/2 md:h-1/2 rounded-[15px] md:rounded-[30px]"/>
                <div className="h-1/2 flex flex-col gap-10 text-center">
                    <div className="flex flex-col gap-4">
                        <p className="text-3xl font-semibold">Junte-se a nossa comunidade</p>
                        <p className="text-sm">Receba novidades direto no seu emai!</p>
                    </div>
                    <input type="text" name="email" id="" placeholder="Insira seu email" className="text-black rounded-[30px] py-3 pfocus:border-cta text-center"/>
                    <button className="px-5 py-3 bg-cta rounded-xl drop-shadow-xl flex items-center justify-center gap-4"> <MdOutlineEmail />Inscrever-se</button>
                </div>
            </div>
        </div>
    )
}