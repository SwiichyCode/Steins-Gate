import styled from "styled-components";
import AuthButton from "../AuthButton";

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
        // icon="/signup_icon.svg"
        backgroundcolor="#DC143C"
        color="#f8f7f9"
      />
      <AuthButton
        text="Connection"
        backgroundcolor="rgba(248, 247, 249, 0.50)"
        color="#f8f7f9"
      />
    </Container>
  );
}
