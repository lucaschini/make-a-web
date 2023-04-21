import PerfilCriador from "@/components/PerfilCriador"

const posts = [
    {
      id: 1,
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        seguidores: '39820',
        href: '#',
        imageUrl:
        '',

      },
    },
    // More posts...
  ]
  
  export default function Example() {
    return (
      <div className="bg-back py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Criadores</h2>
            <p className="mt-2 text-lg leading-8 ">
            Conheça criadores famosos que utilizam nosso serviço.
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              < PerfilCriador key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    )
  }
  