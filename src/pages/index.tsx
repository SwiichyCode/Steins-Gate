import HomeLayout from "@/layouts/HomeLayout";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FooterLink from "@/components/FooterLink";
import OtherGames from "@/components/OtherGames";

export default function Home() {
  return (
    <HomeLayout>
      <Header />
      <Hero />
      <FooterLink />
      <OtherGames />
    </HomeLayout>
  );
}
