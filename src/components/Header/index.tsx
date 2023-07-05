import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useWindowSize } from "usehooks-ts";
import { useSidebarStore } from "@/stores/sidebarStore";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import AuthNavigation from "@/components/AuthNavigation";
import MobileMenu from "../MobileMenu";
import * as S from "./styles";

export default function Header() {
  const { sidebar, toggleSidebar } = useSidebarStore();
  const { width } = useWindowSize();
  const currentUser = useCurrentUser();

  return (
    <S.Container>
      <Logo currentUser={currentUser} />
      <Navigation currentUser={currentUser} />
      <AuthNavigation currentUser={currentUser} />
      {width < 870 && (
        <S.HamburgerBtn onClick={() => toggleSidebar()}>
          {sidebar ? <MdClose size={32} /> : <RxHamburgerMenu size={32} />}
        </S.HamburgerBtn>
      )}

      <MobileMenu sidebar={sidebar} toggleSidebar={toggleSidebar} />
    </S.Container>
  );
}
