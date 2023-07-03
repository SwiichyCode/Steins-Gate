import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const shrinkOut = keyframes`
  from {
    transform: translateX(0) scale(1);
  }
  to {
    transform: translateX(100%) scale(0);
  }
`;

const Container = styled.div<{ sidebar: boolean }>`
  position: absolute;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  top: 0;
  display: flex;
  width: ${({ sidebar }) => (sidebar ? "40%" : "0")};
  height: 100vh;
  background: #161013;
  animation: ${({ sidebar }) => (sidebar ? slideIn : shrinkOut)} 0.3s
    ease-in-out;
  overflow: hidden;
`;

type Props = {
  sidebar: boolean;
};

export default function MobileMenu({ sidebar }: Props) {
  return sidebar && <Container sidebar={sidebar}></Container>;
}
