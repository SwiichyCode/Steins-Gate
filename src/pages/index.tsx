import HomeLayout from "@/layouts/HomeLayout";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FooterLink from "@/components/FooterLink";
import OtherGames from "@/components/OtherGames";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  console.log(session?.user?.email || "Unknown");

  return (
    <HomeLayout>
      <Header />
      <Hero />
      <FooterLink />
      <OtherGames />
    </HomeLayout>
  );
}
