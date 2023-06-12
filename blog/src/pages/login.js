import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-col items-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="mt-28 sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Entre em sua conta
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Endereço de email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Senha
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-cta px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:shadow-cta hover:bg-cta "
            >
              Entrar
            </button>
            <Link
              href="/criarConta"
              className="flex w-full justify-center rounded-md px-3 py-1.5 mt-3 text-sm font-semibold leading-6 text-cta shadow-sm hover:bg-cta hover:text-white "
            >
              Não tenho uma conta
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
