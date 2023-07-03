import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useWindowSize } from "usehooks-ts";
import { useSidebarStore } from "@/stores/sidebarStore";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import AuthNavigation from "@/components/AuthNavigation";
import MobileMenu from "../MobileMenu";
import * as S from "./styles";

export default function Header() {
  const { sidebar, toggleSidebar } = useSidebarStore();
  const { width } = useWindowSize();

  return (
    <S.Container>
      <Logo />
      <Navigation />
      <AuthNavigation />
      {width < 870 && (
        <S.HamburgerBtn onClick={() => toggleSidebar()}>
          {sidebar ? <MdClose size={32} /> : <RxHamburgerMenu size={32} />}
        </S.HamburgerBtn>
      )}

      <MobileMenu sidebar={sidebar} />
    </S.Container>
  );
}
