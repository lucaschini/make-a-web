import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";


export default function Curriculo() {
  return (
    <div className="flex flex-col gap-10 text-white">
      <Header />
      <div className="h-[60vh] flex justify-center items-center text-center flex-col gap-5">
        <div className="w-[1000px] gap-6 flex flex-col">
          <h2>Lucas Chini:</h2>
          <p>
            <Link className="hover:text-cta" href="https://www.linkedin.com/in/lucaschini/">LinkedIn</Link> <Link className="hover:text-cta" href="https://github.com/lucaschini">Github</Link>
          </p>
          <h2>Rafael Furian:</h2>
          <p>
          <Link className="hover:text-cta" href="https://www.instagram.com/rafael_edt?igshid=OGQ5ZDc2ODk2ZA%3D%3D">Instagram</Link> <Link className="hover:text-cta" href="https://www.linkedin.com/in/rafael-pellegrini-3804a725a/">LinkedIn</Link>
          </p>
          <h2>Murilo Batista:</h2>
          <p>
          <Link className="hover:text-cta" href="https://www.twitch.tv/lilofps1">Twitch</Link> <Link className="hover:text-cta" href="https://www.linkedin.com/in/murilo-batista-8377a2267/">LinkedIn</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
