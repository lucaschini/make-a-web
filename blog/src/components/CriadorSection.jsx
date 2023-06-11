import CriadorTemp from "./CardCreator";
import { AiOutlineSearch } from "react-icons/ai";
import PerfilCriador from "./PerfilCriador";
import CardCreator from "./CardCreator";

export default function CriadorSection(props) {
  return (
    <div className="flex flex-col gap-5 items-center pb-9">
      <h1 className="text-4xl text-center lg:text-6xl font-bold my-5">
        Navegar por criadores
      </h1>
      <label className="relative block w-3/4 lg:w-1/4">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
            <AiOutlineSearch />
          </svg>
        </span>
        <input
          className="placeholder:italic placeholder:text-white bg-transparent w-full border rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm"
          placeholder="Procure mais criadores"
          type="text"
          name="search"
        />
      </label>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {props.arr.map((creator) => (
          <CardCreator key={creator.id} arr={creator} />
        ))}
      </div>
    </div>
  );
}
