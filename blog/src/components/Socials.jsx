import { BsDiscord, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";

export default function Socials(props) {
    return(
        <div className="flex gap-2 text-xl text-caption">
            < BsDiscord className="hover:text-white"/>
            < BsYoutube className="hover:text-white"/>
            < BsTwitter className="hover:text-white"/>
            < BsInstagram className="hover:text-white"/>
        </div>
    )
}