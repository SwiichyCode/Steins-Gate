import { useRef } from "react";
import { useOnClickOutside, useWindowSize } from "usehooks-ts";
import { BiUser, BiUserPlus } from "react-icons/bi";
import AuthButton from "../AuthButton";
import * as S from "./styles";

type Props = {
  sidebar: boolean;
  toggleSidebar: () => void;
};

export default function MobileMenu({ sidebar, toggleSidebar }: Props) {
  const { width } = useWindowSize();
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    if (sidebar) {
      toggleSidebar();
    }
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    width < 870 && (
      <S.Container ref={ref} sidebar={sidebar} width={width}>
        <S.NavbarHeader>
          <AuthButton
            icon={<BiUser size={20} />}
            backgroundcolor="rgba(248, 247, 249, 0.50)"
            color="#f8f7f9"
            href="/login"
          />
          <AuthButton
            icon={<BiUserPlus size={20} />}
            backgroundcolor="#DC143C"
            color="#f8f7f9"
            href="/login"
          />
        </S.NavbarHeader>
        <S.NavbarLinks>
          <S.NavbarLink href="/">Accueil</S.NavbarLink>
          <S.NavbarLink href="/about">A propos</S.NavbarLink>
          <S.NavbarLink href="/contact">Contact</S.NavbarLink>
        </S.NavbarLinks>
      </S.Container>
    )
  );
}
