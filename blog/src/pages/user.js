import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function User() {
  return (
    <div>
      <form className="flex flex-col items-center py-9">
        <div className="space-y-12">
          <div className="border-b border-gra/10 pb-12">
            <h2 className="text-base font-semibold leading-7">Perfil</h2>
            <p className="mt-1 text-sm leading-6 -600">
              Altere suas informações pessoais.
            </p>

            <div className=" w- mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6"
                >
                  Username
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Nicolasppaz"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6"
                >
                  Bio
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 -600">
                  Escreva sua biografia.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6"
                >
                  Foto
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <UserCircleIcon
                    className="h-12 w-12 -300"
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-cta px-2.5 py-1.5 text-sm font-semibold shadow-sm ring-1 ring-inset hover:bg-gray-50 hover:text-black"
                  >
                    Alterar
                  </button>
                </div>
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

          <div className="border-b border-gra/10 pb-12">
            <h2 className="text-base font-semibold leading-7">
              Informação Pessoal
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6"
                >
                  Sennha
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
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link href="/">
            <button type="button" className="text-sm font-semibold leading-6">
              Voltar
            </button>
          </Link>
          <Link href="/posts">
          <button
            type="submit"
            className="rounded-md bg-cta px-3 py-2 text-sm font-semibold text-white"
          >
            Salvar
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
