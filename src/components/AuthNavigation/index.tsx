import styled from "styled-components";
import AuthButton from "../AuthButton";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const Container = styled.ul`
  display: flex;
  gap: 32px;
  z-index: 100;
`;

export default function AuthNavigation() {
  return (
    <Container>
      <AuthButton
        text="Inscription"
        backgroundcolor="#DC143C"
        color="#f8f7f9"
        href="/register"
      />
      <AuthButton
        text="Connection"
        backgroundcolor="rgba(248, 247, 249, 0.50)"
        color="#f8f7f9"
        href="/login"
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
