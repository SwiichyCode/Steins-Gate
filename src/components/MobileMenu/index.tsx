import styled from "styled-components";

const Container = styled.div<{ sidebar: boolean }>`
  position: absolute;
  right: ${({ sidebar }) => (sidebar ? "0" : "-300px")};
  top: 0;
  display: flex;
  width: ${({ sidebar }) => (sidebar ? "300px" : "0")};
  min-width: ${({ sidebar }) => (sidebar ? "300px" : "0")};
  height: 100vh;
  background: #161013;
  opacity: ${({ sidebar }) => (sidebar ? "1" : "0")};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;

type Props = {
  sidebar: boolean;
};

export default function MobileMenu({ sidebar }: Props) {
  return <Container sidebar={sidebar}></Container>;
}
