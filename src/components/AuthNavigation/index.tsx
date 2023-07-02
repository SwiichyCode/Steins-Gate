import styled from "styled-components";
import AuthButton from "../AuthButton";
import { useWindowSize } from "usehooks-ts";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BiUser, BiUserPlus } from "react-icons/bi";

const Container = styled.ul`
  display: flex;
  gap: 32px;
  z-index: 100;

  @media (max-width: 1180px) {
    gap: 16px;
  }

  //Temporary
  @media (max-width: 870px) {
    display: none;
  }
`;

export default function AuthNavigation() {
  const { width } = useWindowSize();
  return (
    <Container>
      <AuthButton
        text={width < 1180 ? null : "Connexion"}
        backgroundcolor="rgba(248, 247, 249, 0.50)"
        color="#f8f7f9"
        href="/login"
        icon={width < 1180 ? <BiUser size={20} /> : null}
      />
      <AuthButton
        text={width < 1180 ? null : "Inscription"}
        backgroundcolor="#DC143C"
        color="#f8f7f9"
        href="/register"
        icon={width < 1180 ? <BiUserPlus size={20} /> : null}
      />

      {/* <>
           {session?.user?.role === "admin" && (
            <AuthButton
              backgroundcolor="#DC143C"
              color="#f8f7f9"
              href="/admin"
              icon={<MdOutlineAdminPanelSettings />}
            />
          )}

          <AuthButton
            backgroundcolor="#DC143C"
            color="#f8f7f9"
            href="/profile"
            icon={<FaRegUser />}
          />
          <AuthButton
            text="Deconnexion"
            backgroundcolor="#DC143C"
            color="#f8f7f9"
            href="/"
            onClick={() => signOut()}
          />
        </> */}
    </Container>
  );
}
