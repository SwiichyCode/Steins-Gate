import Logo from "@/components/Logo";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100vh;
  background-image: url("/background_3.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 95px);
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 95px;
  padding: 0 64px;
`;

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <MainWrapper>{children}</MainWrapper>
    </Container>
  );
}
