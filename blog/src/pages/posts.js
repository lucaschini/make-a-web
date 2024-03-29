import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostsSection from "@/components/PostsSection";
import posts from '@/pages/api/posts';


export default function Posts(){
    return (
        <div className="flex flex-col gap-10 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
        < Header/>
        < PostsSection arr={posts}/>
        < Footer/>
        </div>
    )
}