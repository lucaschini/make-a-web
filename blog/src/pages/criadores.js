import Fazendo from "@/components/Fazendo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CriadorSection from "@/components/CriadorSection";

import criadores from "./api/criadores";


export default function Posts(){
    return (
        <div>
        < Header/>
        < CriadorSection arr={criadores} />
        < Footer/>
        </div>
    )
}