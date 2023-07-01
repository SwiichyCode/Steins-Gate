import { GlobalStyle } from "@/styles/GlobalStyle";
import styled from "styled-components";

const Container = styled.div``;

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <GlobalStyle />
      {children}
    </Container>
  );
}
