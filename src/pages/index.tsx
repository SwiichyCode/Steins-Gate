import React from "react";
import LandingLayout from "@/layouts/LandingLayout";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FooterLink from "@/components/FooterLink";
import OtherGames from "@/components/OtherGames";

export default function Landing() {
  return (
    <LandingLayout>
      <Header />
      <Hero />
      <OtherGames />
      <FooterLink />
    </LandingLayout>
  );
}
