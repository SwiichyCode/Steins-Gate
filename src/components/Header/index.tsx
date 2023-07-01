import * as S from "./styles";
import Logo from "../Logo";
import Navigation from "@/components/Navigation";
import AuthNavigation from "@/components/AuthNavigation";

export default function Header() {
  return (
    <S.Container>
      <Logo />
      <Navigation />
      <AuthNavigation />
    </S.Container>
  );
}
