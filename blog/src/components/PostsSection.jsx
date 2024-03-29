import { AiOutlineSearch } from 'react-icons/ai';
import CardPost from './CardPost';
import { useState } from 'react';

export default function PostsSection(props) {
  const [busca, setBusca] = useState('')
  
  const arr = props.arr
  const buscaLower = busca.toLowerCase()

  const postFiltrado = arr
    .filter((post) => post.title.toLowerCase().includes(buscaLower))
  
  return (
    <div className="flex flex-col gap-5 items-center lg:min-h-[80vh]">
      <h1 className="text-4xl lg:text-6xl font-bold my-5">Navegar por posts</h1>
      <label class="relative block w-3/4 lg:w-1/4">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">< AiOutlineSearch/></svg>
        </span>
        <input
          class="placeholder:italic placeholder:text-white bg-transparent w-full border rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm"
          placeholder="Procure mais posts "
          type="text"
          name="search"
          value={busca}
          onChange={(ev) => setBusca(ev.target.value)}
        />
      </label>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {postFiltrado.map((post) => (
          <CardPost key={post.id} arr={post} />
        ))}
      </div>
    </div>
  );
}
