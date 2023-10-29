import Link from "next/link";
import Image from "next/image";
import imageCta from '../../public/cat.webp'
import { MdOutlineEmail } from "react-icons/md";

export default function Cta(){
    return(
        <div className="w-full mb-20 flex justify-center items-center">
            <div className="mx-4 shadow-sm bg-backSecond rounded-[30px] md:rounded-[60px] flex flex-col md:flex-row items-center gap-5 p-8 md:gap-11 md:p-10">
                <Image src={imageCta} alt="Astronauta gerado por ia" width={0} height={0} className="shadow-md md:w-1/2 md:h-1/2 rounded-[15px] md:rounded-[30px]"/>
                <div className="h-1/2 flex flex-col gap-10 text-center">
                    <div className="flex flex-col gap-4">
                        <p className="text-3xl font-semibold">Join our community</p>
                        <p className="text-sm">Receive news directly to your email!</p>
                    </div>
                    <input type="text" name="email" id="" placeholder="Enter your email" className="text-black rounded-[30px] py-3 pfocus:border-cta text-center"/>
                    <button className="px-5 py-3 bg-cta rounded-xl drop-shadow-xl flex items-center justify-center gap-4"> <MdOutlineEmail />Sign up</button>
                </div>
            </div>
        </div>
    )
}