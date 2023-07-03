import { useRef } from "react";
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

const Container = styled.div<{ navbarOpen: boolean }>`
  position: absolute;
  right: ${({ navbarOpen }) => (navbarOpen ? "0" : "-100%")};
  top: 0;
  display: flex;
  width: ${({ navbarOpen }) => (navbarOpen ? "40%" : "0")};
  height: 100vh;
  background: #161013;
  animation: ${({ navbarOpen }) => (navbarOpen ? slideIn : shrinkOut)} 0.3s
    ease-in-out;
  overflow: hidden;
`;

type Props = {
  navbarOpen: boolean;
};

export default function MobileMenu({ navbarOpen }: Props) {
  // Find other solution for remove scroll if navbarOpen

  return navbarOpen && <Container navbarOpen={navbarOpen}></Container>;
}
