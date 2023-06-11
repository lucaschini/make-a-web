import PerfilCriador from "@/components/PerfilCriador"
import Post from "./Post"
import CardCreator from "./CardCreator";


  export default function CardSection(props) {
    if (props.type === "creator") {
      return (
        <div className="py-12 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {props.title}
              </h2>
              <p className="mt-2 text-lg leading-8 ">{props.sub}</p>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {props.arr.map((creator) => (
                < CardCreator key={creator.id} arr={creator}/>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (props.type === 'post'){
      return (
        <div className="py-12 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {props.title}
              </h2>
              <p className="mt-2 text-lg leading-8 ">{props.sub}</p>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {props.arr.map((post) => (
                <Post key={post.id} arr={post} />
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
  