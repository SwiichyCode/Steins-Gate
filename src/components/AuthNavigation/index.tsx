import { useSession, signOut } from "next-auth/react";
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
  const { data: session } = useSession();

  return (
    <Container>
      {!session?.user ? (
        <>
          <AuthButton
            text="Inscription"
            backgroundcolor="#DC143C"
            color="#f8f7f9"
            href="/signup"
          />
          <AuthButton
            text="Connection"
            backgroundcolor="rgba(248, 247, 249, 0.50)"
            color="#f8f7f9"
            href="/login"
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
}
