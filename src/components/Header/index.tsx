import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useWindowSize } from "usehooks-ts";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import AuthNavigation from "@/components/AuthNavigation";
import * as S from "./styles";
import MobileMenu from "../MobileMenu";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { width } = useWindowSize();

  return (
    <S.Container>
      <Logo />
      <Navigation />
      <AuthNavigation />
      {width < 870 && (
        <S.HamburgerBtn onClick={() => setNavbarOpen(!navbarOpen)}>
          {navbarOpen ? <MdClose size={32} /> : <RxHamburgerMenu size={32} />}
        </S.HamburgerBtn>
      )}

      <MobileMenu navbarOpen={navbarOpen} />
    </S.Container>
  );
}
