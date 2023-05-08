import Fazendo from "@/components/Fazendo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostsSection from "@/components/PostsSection";


export default function Posts(){
    return (
        <div className="flex flex-col gap-10">
        < Header/>
        < PostsSection/>
        < Footer/>
        </div>
    )
}