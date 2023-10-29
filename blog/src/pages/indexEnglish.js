import HeaderEnglish from "@/components/HeaderEnglish";
import HeroEnglish from "@/components/HeroEnglish";
import CardSection from "@/components/CardSection";
import CtaEnglish from "@/components/CtaEnglish";
import FooterEnglish from "@/components/FooterEnglish";

import criadores from "./api/criadores";
import posts from "./api/posts";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 text-white">
      <HeaderEnglish />
      <HeroEnglish />
      <CardSection
        type="creator"
        title="Creators"
        sub="Meet creators from our website"
        arr={criadores}
      />
      <CardSection
        type="post"
        title="Posts"
        sub="Explore the latest publications"
        arr={posts}
      />
      <CtaEnglish />
      <FooterEnglish />
    </div>
  );
}
