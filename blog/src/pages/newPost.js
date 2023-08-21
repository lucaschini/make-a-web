import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function newPost() {
  return (
    <div>
      <form className="flex flex-col w-screen items-center py-9">
        <div className="space-y-12">
          <div className="border-b border-gra/10 pb-12">
            <h2 className="text-base font-semibold leading-7">Nova Publicação</h2>
            <p className="mt-1 text-sm leading-6 -600">
              Publique um artigo!
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                

              <div className="col-span-full">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6"
                >
                  Nome
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

                <label
                  htmlFor="about"
                  className="block text-sm mt-4 font-medium leading-6"
                >
                  Conteudo do artigo
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w- text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 -600">
                  Escreva seu artigo.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6"
                >
                  Foto de capa
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gra/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 -300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex justify-center text-sm leading-6 -600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md p-1 bg-cta font-semibold text-white"
                      >
                        <span>Upload</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                    </div>
                    <p className="text-xs leading-5 -600">
                      PNG, JPG de até 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link href="/">
            <button type="button" className="text-sm font-semibold leading-6">
              Voltar
            </button>
          </Link>
          <button
            type="submit"
            className="rounded-md bg-cta px-3 py-2 text-sm font-semibold text-white"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
